import "./css/paddle.css"
import React from 'react';
import whiteBead from '../white-bead.png';
import redBead from '../red-bead.png';
import emptyHole from '../empty-hole.png';

const items = 5 * 10;
const weights = [0.2, 0.8]; // probabilities
const results = [0, 1]; // values to return

export default function Paddle(props) {
    return(
        <div>
            <button className="button" disabled={!props.isEnabled} onClick={ () => {
                props.setBeads(updatePaddle());
                props.setStepPassed(true);
                } }>Losuj</button>
            <div className="container">
                {props.beads}
            </div>
        </div>
    )
}

export function initPaddle() {
    let beads = []

    for(let i = 0; i < items; i++) {
        beads.push(<img key={i} className="bead" alt="bead" src={emptyHole}/>)
    }

    return beads;
}

function updatePaddle() {
    let beads = []

    for(let i = 0; i < items; i++) {
        beads.push(<img key={i} className="bead" alt="bead" src={getRandomBeadColor() === 0 ? redBead : whiteBead}/>)
    }

    return beads;
}

export function shakePaddle(beadsArray) {
    let arrayCopy = [...beadsArray]
    for(let i = 0; i < 2; i++){
        const randomBeadToChange = getRndInteger(0, items - 1);
        const isRed = arrayCopy[randomBeadToChange].props.src.includes("media/red");
        arrayCopy[randomBeadToChange] = <img key={randomBeadToChange} className="bead" alt="bead" src={isRed ? whiteBead : redBead} />
    }

    return arrayCopy;
}

function getRandomBeadColor () {
    var num = Math.random(),
        s = 0,
        lastIndex = weights.length - 1;

    for (var i = 0; i < lastIndex; ++i) {
        s += weights[i];
        if (num < s) {
            return results[i];
        }
    }

    return results[lastIndex];
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
    
