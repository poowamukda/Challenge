import { log } from 'console';
import React from 'react'

// interface X{
//     dubble:Array;
// } 
var numbers = [3, 56, 2, 48, 5];



// MAP 1 
function double(x: number) {
    return (2 * x);
}
const newNumble1 = numbers.map(double)
console.log(newNumble1);

// MAP 2 
var newNumber4: number[] = numbers.map(function (x: number) {
    return (x * 5);
});
console.log(newNumber4);




// forEach 1
var newNumber2: number[] = [];
function double2(x: number) {
    newNumber2.push(x * 3);
}
numbers.forEach(double2);
console.log(newNumber2);


// forEach 2
var newNumber3: number[] = [];
numbers.forEach(function (x: number) {
    newNumber3.push(x * 4);
});
console.log(newNumber3);




// fillter
const newNumber5 = numbers.filter((num)=>{
return num>10
})
console.log(newNumber5);





function loop() {
    return (
        <div> <h1> Javascript ES6 Map/Filter/Reduce </h1></div>
    )
}

export default loop