import React from "react";
import { useEffect, useState } from "react";


function App() {
  const [headDingText, setHeadDingText] = useState("Hello");
  const [name, setName] = useState<string>("");
  const [headingText, setHeadingText] = useState("");

  let [color, setColor] = useState<boolean>(true);

  function handleMouseMove() {
    setColor(false);
  }
  function handleMouseOut() {
    setColor(true);
  }

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setName(ev.target.value);
    console.log(ev.target.value);

    // setName(ev.target.value);
    // setHeadDingText(ev.target.value);
    // console.log(ev.target.placeholder);
    // console.log(ev.target.type );
  }
  function handleClick() {
    // console.log(ev);//ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
    setHeadingText(name);

  }

  return (
    <div className="container">

      <h1>{headDingText + "  " + headingText}</h1>

      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      // value={ name }
      />

      <button onClick={handleClick} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut} style={color ? { backgroundColor: "white" } : { backgroundColor: "black" }}>
        Submit
      </button>
    </div>
  );
}

export default App;
