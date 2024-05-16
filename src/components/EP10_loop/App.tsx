import { log } from "console";
import React from "react";
import Challenge from "./challenge";
// interface X{
//     dubble:Array;
// }
var numbers = [3, 56, 2, 48, 5];

// MAP 1
// function double(x: number) {
//   return 2 * x;
// }
// const newNumble1 = numbers.map(double);
// console.log(newNumble1);

// MAP 2
// var newNumber4: number[] = numbers.map(function (x: number) {
//   return x * 5;
// });
// console.log(newNumber4);




// forEach 1
// var newNumber2: number[] = [];
// function double2(x: number) {
//   newNumber2.push(x * 3);
// }
// numbers.forEach(double2);
// console.log(newNumber2);

// forEach 2
// var newNumber3: number[] = [];
// numbers.forEach(function (x: number) {
//   newNumber3.push(x * 4);
// });
// console.log(newNumber3);


// fillter
// const newNumber5 = numbers.filter((num) => {
//   return num > 10;
// });
// console.log(newNumber5);
//reduce
// var newNumber6 = numbers.reduce(
//   (accumulation: number, currentNumber: number) => {
//     return accumulation + currentNumber;
//   },
//   0
// );
// console.log(newNumber6);

// /* ลดรูป */
// const newNumble1 = numbers.map((x: number) => 2 * x);
// console.log(newNumble1);

// const newNumber2: number[] = [];
// numbers.forEach((x: number) => newNumber2.push(x * 3));
// console.log(newNumber2);

// const newNumber3 = numbers.filter(x => x > 10)
// console.log(newNumber3);

// //reduce
// const newNumber4 = numbers.reduce((accumulation: number, currentNumber: number) => accumulation + currentNumber)
// console.log(newNumber4);










/*Find and FindIndex */
// ตัวอย่างของอาร์เรย์ที่ต้องการทำการค้นหา

// ใช้ find เพื่อค้นหาเลขคู่ในอาร์เรย์
const evenNumber: number | undefined = numbers.find(
  (num: number) => num % 2 === 0
);

if (evenNumber !== undefined) {
  console.log("เลขคู่ที่พบคือ:", evenNumber); // พิมพ์ค่าเลขคู่ที่พบ
} else {
  console.log("ไม่พบเลขคู่ในอาร์เรย์"); // พิมพ์ถ้าไม่พบเลขคู่
}

Challenge();


function loop() {
  return (
    <>
      <h1>Javascript ES6 Map/Filter/Reduce</h1>
    </>
  );
}

export default loop;
