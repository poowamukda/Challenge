import React from 'react'
interface Note {
    key: number;
    title: string;
    content: string;
}
function Cards(note: Note) {
    return (
        <div>
            <div className="note">
                <h1>{note.title}</h1>
                <p>{note.content}</p>
            </div>

        </div>
    )
}

export default Cards