import React, { useState } from "react";
interface Regis {
  fName: string,
  lName: string,
  email: string,
}
function App() {
  const [color, setColor] = useState<boolean>(false);
  const [fullRegis, setFullRegis] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  const [dataRegis, setDataRegis] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  function handleMouseMove() {
    setColor(true);
  }
  function handleMouseOut() {
    setColor(false);
  }

  function handleClick(ev: React.MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    setDataRegis(
      {
        fName: fullRegis.fName,
        lName: fullRegis.lName,
        email: fullRegis.email
      }
    )
  }


  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = ev.target;
    const nameValue = name;
    const inputValue = value;

    setFullRegis((prevValue: Regis) => {
      // if (nameValue === "fName") {
      //   return { ...prevValue, fName: inputValue }
      // } else if (nameValue === "lName") {
      //   return { ...prevValue, lName: inputValue }
      // } else if (nameValue === "email") {
      //   return { ...prevValue, email: inputValue }
      // } else {
      //   return prevValue;
      // }


      return {
        ...prevValue,
        [name]: value
      }

    });
  }

  return (
    <div className="container">
      <h1>Hello {dataRegis.fName + " " + " " + dataRegis.lName}</h1>
      <p>{dataRegis.email}</p>
      <br />
      <form>
        <input name="fName" type="text" placeholder="First Name" value={fullRegis.fName} onChange={handleChange} />
        <input name="lName" type="text" placeholder="Last Name" value={fullRegis.lName} onChange={handleChange} />
        <input name="email" type="email" placeholder="Your Email" value={fullRegis.email} onChange={handleChange} />
        <button
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseOut}
          style={
            color ? { backgroundColor: "black" } : { backgroundColor: "white" }
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

// onMouseOut;
// onMouseMove;
// onClick;

// handleMouseOut;
// handleMouseMove;
// handleClick;