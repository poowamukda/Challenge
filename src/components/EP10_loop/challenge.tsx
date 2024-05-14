import React from "react";
import Emojipedia from "./emojipedia";


const result: string[] = [];
Emojipedia.map((emojipedia) => {
  result.push(emojipedia.meaning.substring(0, 2));
});
console.log(result);


// const Ans: string[] = [];
// function fillterText(meaning: string) {
//   let result = meaning.substring(0, 2);
//   Ans.push(result);
//   return null;
// }

function challenge() {
  return (
    <div>
      {/* {Emojipedia.map((emojipedia, index) => fillterText(emojipedia.meaning))} */}
    </div>
  );
}



// console.log(Ans);

export default challenge;
