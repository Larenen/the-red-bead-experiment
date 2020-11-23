import "./css/additional-options.css"
import React, {useState} from "react"

export default function AdditionalOptions(props) {
    const [right, setRight] = useState(false);
    const [left, setLeft] = useState(false);
    const [down, setDown] = useState(false);
    const [up, setUp] = useState(false);

    return (
        <div className="options">
            <div className="option">
                <input id="right" type="checkbox" checked={right} onChange={(e) => {
                    setRight(e.target.checked);
                    props.setSecondPassed(e.target.checked || left || down || up);
                }} disabled={!props.isEnabled}/>
                <label htmlFor="right">Przechyl w prawo</label>
            </div>
            <div className="option">
                <input id="left" type="checkbox" checked={left} onChange={(e) => {
                    setLeft(e.target.checked);
                    props.setSecondPassed(right || e.target.checked || down || up);
                }}disabled={!props.isEnabled}/>
                <label htmlFor="left">Przechyl w lewo</label>
            </div>
            <div className="option">
                <input id="down" type="checkbox" checked={down} onChange={(e) => {
                    setDown(e.target.checked);
                    props.setSecondPassed(right || left || e.target.checked || up);
                }}disabled={!props.isEnabled}/>
                <label htmlFor="down">Przechyl w dół</label>
            </div>
            <div className="option">
                <input id="up" type="checkbox" checked={up} onChange={(e) =>{
                    setUp(e.target.checked);
                    props.setSecondPassed(right || left || down || e.target.checked);
                }} disabled={!props.isEnabled}/>
                <label htmlFor="up">Przechyl w górę</label>
            </div>
        </div>
    )
}