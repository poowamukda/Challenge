import React from 'react'
import Login from './Login';

var LogInChack: boolean = true;

const currentTime = new Date(2023, 5, 30, 10).getHours();
console.log(currentTime);


function porps() {
    return <div className='container'>
        {
            // LogInChack === true ? <h1>Hello</h1> : <Login />
            currentTime > 12 ? <h1>Why are tou stell working?</h1> : null

        }
    </div>

} export default porps;

