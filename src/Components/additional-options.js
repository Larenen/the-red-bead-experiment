import "./css/additional-options.css"

export default function AdditionalOptions() {
    return (
        <div className="options">
            <h1>
            Przed losowaniem:
            </h1>
            <div className="option">
                <input id="mix" type="checkbox"/>
                <label for="mix">Zamieszaj kulki</label>
            </div>
            <div className="option">
                <input id="shake" type="checkbox"/>
                <label for="shake">Zatrzęś tacką</label>
            </div>
            <div className="option">
                <input id="right" type="checkbox"/>
                <label for="right">Przechyl w prawo</label>
            </div>
            <div className="option">
                <input id="left" type="checkbox"/>
                <label for="left">Przechyl w lewo</label>
            </div>
            <div className="option">
                <input id="down" type="checkbox"/>
                <label for="down">Przechyl w dół</label>
            </div>
            <div className="option">
                <input id="up" type="checkbox"/>
                <label for="up">Przechyl w górę</label>
            </div>
        </div>
    )
}