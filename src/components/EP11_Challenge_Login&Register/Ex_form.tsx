import React from 'react'
interface status {
    isRegistered: boolean

}
function Ex(Status: status) {
    return (
        <>
            <div className='container'>
                <form className="form">
                    ตามตัวอย่าง
                    <input type="text" placeholder='UserName' />
                    <input type="password" placeholder='Password' />
                    {Status.isRegistered === false && <input type="password" placeholder='Confirm Your password' />}
                    {Status.isRegistered === false ? (<input type="password" placeholder='Confirm Your password' />) : null}
                    <button type='submit'>{Status.isRegistered ? "LOGIN" : "REGISTER"}</button>
                </form>
            </div>


        </>
    )
}

export default Ex