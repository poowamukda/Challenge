import React from 'react'
var today = new Date();
// var today  = new Date(2024,1,1,8);  set time

const currentTime = today.getHours();

let greeting: string;

const customStyle = {
    color: ""
};
if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
} else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
} else {
    greeting = "Good Night";
    customStyle.color = "blue";
}

function Heading() {
    return (
        <React.Fragment>
            <h1 className="heading" style={customStyle}>
                {greeting}
            </h1>
            <hr />
        </React.Fragment>
    )
}

export default Heading