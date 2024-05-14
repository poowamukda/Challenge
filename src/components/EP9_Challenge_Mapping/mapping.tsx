import React from 'react'
import Card from './card';
import Emojipedia from './emojipedia'




function mapping() {
    return (
        <React.Fragment>

            {/* {
                Emojipedia.map((emojipedia) => {
                    <Card
                        emoji={emojipedia.emoji}
                        name={emojipedia.name}
                        meaning={emojipedia.meaning}
                    />
                }
                )
            } */}

        </React.Fragment>
    );
}

export default mapping;


// function createCard(emojipedia: Req_Emojipedia) {
//     return (
//         <Card
//             emoji={emojipedia.emoji}
//             name={emojipedia.name}
//             meaning={emojipedia.meaning}
//         />
//     )
// }

{/* {
                // อาเรย์จาก contacts from "./contacts"
                Emojipedia.map(createCard)
            } */}