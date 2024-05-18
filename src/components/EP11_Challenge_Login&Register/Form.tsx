import React from 'react'
import Login from './Login';
import Register from './Register';

interface status {
    isRegistered: boolean

}


function form(Status: status) {
    return <div className='container'>
        <form className="form">
            Ans
            {Status.isRegistered ? <Login /> : <Register />}
        </form>
    </div>
}

export default form