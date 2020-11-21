import './css/bead.css'
import React from 'react';

export default function Bead(props){
    const beadImages = ['red-bead.png', 'white-bead.png']

    return(
        <img className="bead" style={{ gridColumnStart: props.column, gridColumnEnd: props.column, gridRowStart:props.row, gridRowEnd:props.row }} alt="bead" src={beadImages[props.beadColorIndex]}/>
    )
}