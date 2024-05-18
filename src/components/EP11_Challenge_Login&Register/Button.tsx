import React from 'react'
interface nameText {
    name: string;
}
function button(NameText: nameText) {
    return <button type="submit">{NameText.name}</button>
}

export default button