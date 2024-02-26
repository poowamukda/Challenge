import React from 'react'
const name = "BUFFER";
const year = "2024"

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today = new Date();
// var today  = new Date(2024,1,1,8);  set time
var dataString = today.toLocaleDateString("th-TH");
var yearString = today.getFullYear();
const currentTime = today.getHours();

function Footer() {
    return (
        <>
            <br />
            {/* <p>Cerated by {name}</p> */}
            <p>Copyright © {yearString} </p>
        </>
    )
}

export default Footer