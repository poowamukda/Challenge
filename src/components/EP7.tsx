import React from 'react'
//import 1
// import Avatar from './EP7_React_DevTools/Avatar' 

//import 2
import * as Avatar from './EP7_React_DevTools/Avatar';

function EP7() {
    return (
        <React.Fragment>
            <h1 >แยกส่วน Avatar</h1>
            {/* import 1 */}
            {/* <Avatar /> */}

            {/* import  */}
            <Avatar.Props />
        </React.Fragment>
    )
}

export default EP7