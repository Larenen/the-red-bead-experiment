import "./css/paddle.css"
import React, { useState } from 'react';
import whiteBead from '../white-bead.png';
import redBead from '../red-bead.png';
import emptyHole from '../empty-hole.png';

const items = 5 * 10;
const weights = [0.2, 0.8]; // probabilities
const results = [0, 1]; // values to return

export default function Paddle(props) {
    const [beads, setBeads] = useState(initPaddle());
    const [thirdPassed, setThirdPassed] = useState(false);

    return(
        <div>
            <button className="button" disabled={!props.isEnabled} onClick={ () => {
                setBeads(updatePaddle());
                setThirdPassed(true);
                } }>Losuj</button>
            <div className="container">
                {beads}
            </div>
            <h1>Krok czwarty:</h1>
            <button className="button" disabled={!thirdPassed} onClick={() => setBeads(shakePaddle(beads))}>Potrząśnij tacką</button>
        </div>
    )
}

function initPaddle() {
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

function shakePaddle(beadsArray) {
    let arrayCopy = [...beadsArray]
    const beadsToChange = getRndInteger(1,5);
    for(let i = 0; i < beadsToChange; i++){
        const randomBeadToChange = getRndInteger(0, items - 1);
        arrayCopy[randomBeadToChange] = <img key={randomBeadToChange} className="bead" alt="bead" src={getRandomBeadColor() === 0 ? redBead : whiteBead}/>
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
    
