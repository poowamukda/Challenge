import React from 'react'
import Input from './Input'
import Button from './Button'


function register() {
    return (
        <>
            <Input
                type='text'
                placeholder='UserName'
            />
            <Input
                type='password'
                placeholder='Password'
            />
            <Input
                type='password'
                placeholder='Confirm Your password'
            />
            <Button
                name='Register'
            />

        </>
    )
}

export default register