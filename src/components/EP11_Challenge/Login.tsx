import React from 'react'
import Input from './Input'



function login() {
    return (
        <>
            <form className="form">
                <Input
                    type='text'
                    placeholder='text'
                />
                <Input
                    type='password'
                    placeholder='password'
                />
                <Input
                    type='mail'
                    placeholder='E-Mail'
                />
                <button type="submit">Login</button>
            </form>

        </>
    )
}

export default login