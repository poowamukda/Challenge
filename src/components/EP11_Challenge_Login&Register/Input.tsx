import React from 'react'
interface inPut {
    type: string;
    placeholder: string;
}
function input(InPut: inPut) {
    return (
        <>
            <input type={InPut.type} placeholder={InPut.placeholder} />
        </>
    )
}

export default input