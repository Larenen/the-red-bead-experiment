import Bead from "./bead";
import "./css/paddle.css"
import React from 'react';

const items = 5 * 10;

export default function Paddle(props) {
    let redBeadsLeft = props.redBeads

    let beads = []
    for(let i = 0; i < items; i++) {
        let beadColor = 1;

        if(redBeadsLeft > 0 && i % 2 === 0) {
            beadColor = getRandomBeadColor();
            if(beadColor === 0)
                redBeadsLeft -= 1;
        }

        beads.push(<Bead key={i} beadColorIndex={beadColor}/>)
    }

    return(
        <div className="container">
            {beads}
        </div>
    )
}

function getRandomBeadColor() {
    return Math.round(Math.random());
}
    
