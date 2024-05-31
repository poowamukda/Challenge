import { log } from "console";
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputTex] = useState("");
  const [items, setItems] = useState<string[]>([]);

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const { value } = ev.target;
    const newValue = value;
    setInputTex(newValue);
  }

  function addItem(ev: React.MouseEvent<HTMLButtonElement>) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputTex("");
  }

  function deleteItem() {
    console.log("DeleteItem");

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          name="List"
          value={inputText}
          type="text"
          placeholder="What's your List"
          onChange={handleChange}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => {
            return < ToDoItem
              key={index}
              inputItem={todoItem}
              onChecked={deleteItem}

            />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
