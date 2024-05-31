// import React, { useState } from "react";

// interface iTems {
//   inputItem: string;
// }
// function ToDoItem(props: iTems) {
//   const [line, setLine] = useState<boolean>(false);
//   function clickText() {
//     setLine(prevLine => !prevLine);
//     console.log("clickText: " + line);
//   }

//   // function clickText() {
//   //   setLine(true)
//   //   console.log("clickText :" + line);
//   // }
//   return <li onClick={clickText}
//     style={{ textDecoration: line ? "line-through" : "none" }}>
//     {props.inputItem}
//   </li>
// }

// export default ToDoItem;


interface Items {
  inputItem: string;
  onChecked: () => void;
}
function ToDoItem(props: Items) {
  return (
    <div onClick={props.onChecked}>
      <li>
        {props.inputItem}
      </li>
    </div>
  );
}

export default ToDoItem;