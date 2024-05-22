// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import Animals, { useAnimals } from "./data";
import Cars from "./practice";
import { log } from "console";

// console.log("---------------------------------------------");

const [CAT, DOG] = Animals;
// console.log(CAT);
// console.log(DOG);

const {
  name,
  sound,
  feedingRequirements: { food, water },
} = CAT;
// console.log("ให้อาหาร " + name + " วันละ " + food + " ครั้ง");

const {
  name: nameDog,
  sound: soundDog,
  feedingRequirements: { food: foodDog = "15 ครั้ง", water: waterDog },
} = DOG;
// console.log("ให้อาหาร " + nameDog + " วันละ " + foodDog + " ครั้ง");
// console.log("ให้น้ำ " + nameDog + " วันละ " + waterDog + " ครั้ง");

// console.log("*********************************************");
// const [Honda, Tesla] = Cars;
// const {
//   model: HondaModel,
//   coloursByPopularity: [HondaTopColour, HondUnpopular],
//   speedStats: { topSpeed: HondaTopSpeed, zeroToSixty: HondaZeroToSixty },
// } = Honda;
// const {
//   model: TeslaModel,
//   coloursByPopularity: [TeslaTopColour, TeslaUnpopular],
//   speedStats: { topSpeed: TeslaTopSpeed, zeroToSixty: TeslaZeroToSixty },
// } = Tesla;

console.log("#############################################");

// console.log(useAnimals(CAT));
// const [animal, makeSound] = useAnimals(CAT);
// console.log(animal);
// makeSound();

console.log("*********************************************");

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
function index() {
  return (
    <>
      {/* <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
        </tr>
        <tr>
          <td>{Tesla.model}</td>
          <td>{TeslaTopSpeed}</td>
          <td>{TeslaTopColour}</td>
        </tr>
        <tr>
          <td>{Honda.model}</td>
          <td>{HondaTopSpeed}</td>
          <td>{HondaTopColour}</td>
        </tr>
      </table> */}
    </>
  );
}

export default index;
