// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import Animals from './data'
import Cars from './practice'

// console.log("---------------------------------------------");

// const [CAT, DOG] = Animals;
// console.log(CAT);
// console.log(DOG);

// const { name, sound, feedingRequirements: { food, water } } = CAT;
// console.log("ให้อาหาร " + name + " วันละ " + food + " ครั้ง");

// const { name: nameDog, sound: soundDog, feedingRequirements: { food: foodDog = "15 ครั้ง", water: waterDog } } = DOG
// console.log("ให้อาหาร " + nameDog + " วันละ " + foodDog + " ครั้ง");
// console.log("ให้น้ำ " + nameDog + " วันละ " + waterDog + " ครั้ง");


console.log("*********************************************");
const [Honda, Tesla] = Cars;
console.log(Tesla);

const { model, coloursByPopularity: [TopColour, Unpopular], speedStats: { topSpeed, zeroToSixty } } = Honda;
console.log(TopColour);

console.log("*********************************************");



// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
function index() {
  return (
    <>

      {/* ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
); */}


    </>
  )
}

export default index