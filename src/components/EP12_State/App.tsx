import React, { useState } from "react";

const App: React.FC = () => {
    const [isDone, setIsDone] = useState<boolean>(false);

    const strike = () => {
        console.log("strike : true");
        setIsDone(true);
    }

    const unStrike = () => {
        console.log("unStrike : false");
        setIsDone(false);
    }

    return (
        <div>
            <h1 style={isDone ? { textDecoration: "line-through" } : undefined}>Buy milk</h1>
            <button onClick={strike}>Change to strike through</button>
            <button onClick={unStrike}>Change back</button>
        </div>
    );
}

export default App;
