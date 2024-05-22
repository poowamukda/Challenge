import React from "react";
import { useEffect, useState } from "react";


function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  let [color, setColor] = useState<boolean>(true);
  function handleMouseMove() {
    setColor(false);
  }
  function handleMouseOut() {
    setColor(true);
  }

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {

  }



  return (
    <div className="container">
      <h1>Hello{" " + fullName.fName + " " + fullName.lName}</h1>

      <form >
        <input name="fName" placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input name="lName" placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
        />
        <button onMouseMove={handleMouseMove} onMouseOut={handleMouseOut} style={color ? { backgroundColor: "white" } : { backgroundColor: "black" }}
        >Submit
        </button>
      </form>
    </div>
  );
}

export default App;
