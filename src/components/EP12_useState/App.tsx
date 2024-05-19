import React, { useState } from "react";
import { setInterval } from "timers/promises";
var currentTime = new Date().toLocaleTimeString();

function App() {
    // const [autoTime, setAutoTime] = useState(currentTime);
    // function getAutoTime() {
    //     currentTime = new Date().toLocaleTimeString();
    //     setAutoTime(currentTime);

    // }
    // setInterval(setAutoTime, 1000);


    const [time, setTime] = useState(currentTime);
    function getTime() {
        currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
        console.log(currentTime);
    }


    const [coust, setCoust] = useState(0);
    function increase() { setCoust(coust + 1) }
    function decrease() { setCoust(coust - 1) }

    return (
        <div className="container">
            <h1>{time}</h1>
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
