import React, { useState } from "react";
// import { setInterval } from "timers/promises";
var now = new Date().toLocaleTimeString();

function App() {
    setInterval(getAutoTime, 1000);

    const [autoTime, setAutoTime] = useState(now);

    function getAutoTime() {
        let currentTime = new Date().toLocaleTimeString();
        setAutoTime(currentTime);

    }



    const [time, setTime] = useState(now);
    function getTime() {
        let currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
        console.log(currentTime);
    }


    const [coust, setCoust] = useState(0);
    function increase() { setCoust(coust + 1) }
    function decrease() { setCoust(coust - 1) }

    return (
        <div className="container">
            <h1>{autoTime}</h1>
            <button >Dynamic Time</button>
            <br />
            <h1>{time}</h1>
            <button onClick={getTime}>Get Time</button>
            <br />
            <h1>{coust}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>

        </div>
    );
}

export default App;
