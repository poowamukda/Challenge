import React from "react";
import Cards from "./Cards";
import notes from "./notes";




function Note() {
    return (
        <>
            {
                notes.map((nodesData) => (
                    <Cards
                        key={nodesData.key}
                        title={nodesData.title}
                        content={nodesData.content}
                    />

                ))

            }

        </>
    );
}

export default Note;
