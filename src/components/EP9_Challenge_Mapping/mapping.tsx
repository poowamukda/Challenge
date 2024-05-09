import React from 'react'
import Card from './card';
import Emojipedia from './emojipedia'


interface Req_Emojipedia {
    id: number;
    emoji: string;
    name: string;
    meaning: string;
}
function createCard(emojipedia: Req_Emojipedia) {
    return (
        <Card
            emoji={emojipedia.emoji}
            name={emojipedia.name}
            meaning={emojipedia.meaning}
        />
    )
}




function mapping() {
    return (
        <React.Fragment>
            {
                // อาเรย์จาก contacts from "./contacts"
                Emojipedia.map(createCard)
            }
        </React.Fragment>
    );
}

export default mapping;