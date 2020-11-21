import Bead from "./bead";
import "./css/paddle.css"
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Paddle(props) {
    
    function getRandomBeadColor() {
        const random = Math.round(Math.random());
        if(random === 0){
            redBeadsLeft -= 1;
        }

        return random;
    }

    const rows = 10;
    const columns = 5;
    let redBeadsLeft = props.redBeads

    let beads = []
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            beads.push(<Bead key={uuidv4()} row={i+1} column={j+1} beadColorIndex={redBeadsLeft > 0 && i % 2 === 0 ? getRandomBeadColor() : 1}/>)
        }
    }

    return(
        <div className="container">
            {beads}
        </div>
    )
}
