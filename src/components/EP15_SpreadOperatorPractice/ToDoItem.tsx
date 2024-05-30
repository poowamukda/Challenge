import React from 'react'
interface iTems {
    inputItem: string
}
function ToDoItem(items: iTems) {
    return (
        <li>
            {items.inputItem}
        </li>
    )
}

export default ToDoItem