import './css/bead.css'
import React from 'react';
import whiteBead from '../white-bead.png';
import redBead from '../red-bead.png';

export default function Bead(props){
    return(
        <img className="bead" style={{ gridColumnStart: props.column, gridColumnEnd: props.column, gridRowStart:props.row, gridRowEnd:props.row }} alt="bead" src={props.beadColorIndex === 0 ? redBead : whiteBead}/>
    )
}