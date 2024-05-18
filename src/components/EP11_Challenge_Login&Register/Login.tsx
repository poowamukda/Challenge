import React from 'react'
import Input from './Input'
import Button from './Button'
function login() {
    return (
        <>
            <Input
                type='text'
                placeholder='User Name'
            />
            <Input
                type='password'
                placeholder='Password'
            />
            <Button
                name='LOGin'
            />

        </>
    )
}

export default login