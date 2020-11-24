import "./css/additional-options.css"
import React from "react"

export default function AdditionalOptions(props) {
    return (
        <div className="options">
            <div className="option">
                <input id={"right" + props.number} type="checkbox" checked={props.right} onChange={(e) => {
                    props.setRight(e.target.checked);
                    props.setStepPassed(e.target.checked || props.left || props.down || props.up);
                }} disabled={!props.isEnabled}/>
                <label htmlFor={"right" + props.number}>Przechyl w prawo</label>
            </div>
            <div className="option">
                <input id={"left" + props.number} type="checkbox" checked={props.left} onChange={(e) => {
                    props.setLeft(e.target.checked);
                    props.setStepPassed(props.right || e.target.checked || props.down || props.up);
                }}disabled={!props.isEnabled}/>
                <label htmlFor={"left" + props.number}>Przechyl w lewo</label>
            </div>
            <div className="option">
                <input id={"down" + props.number} type="checkbox" checked={props.down} onChange={(e) => {
                    props.setDown(e.target.checked);
                    props.setStepPassed(props.right || props.left || e.target.checked || props.up);
                }}disabled={!props.isEnabled}/>
                <label htmlFor={"down" + props.number}>Przechyl w dół</label>
            </div>
            <div className="option">
                <input id={"up" + props.number} type="checkbox" checked={props.up} onChange={(e) =>{
                    props.setUp(e.target.checked);
                    props.setStepPassed(props.right || props.left || props.down || e.target.checked);
                }} disabled={!props.isEnabled}/>
                <label htmlFor={"up" + props.number}>Przechyl w górę</label>
            </div>
        </div>
    )
}