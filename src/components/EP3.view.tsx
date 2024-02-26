import React from 'react'
import ReactDOM from "react-dom";
// import 1
import EP3Model ,{add,multiply,subtract,divide} from './EP3.viewmodel';

// import 2
// import * as EP3Model from './EP3.viewmodel';

function EP3() {
  return (
    <React.Fragment>
      <h2>หัดใช้โมดูล EP3</h2>
      <h3> - การ import และการเรียกใช้รูปแบบต่างๆ</h3>
      <ul>

{/*เรียกใช้ import 1*/}
    <li>{add(1, 2)}</li>        
        <li>{multiply(2, 3)}</li>
        <li>{subtract(7, 2)}</li>
        <li>{divide(5, 2)}</li>

{/*เรียกใช้ import 2*/}
    {/* <li>{EP3Model.add(1, 2)}</li>          
    <li>{EP3Model.multiply(2, 3)}</li>
    <li>{EP3Model.subtract(7, 2)}</li>
    <li>{EP3Model.divide(5, 2)}</li> */}
  </ul>
      <hr />
    </React.Fragment>
  )
}

export default EP3