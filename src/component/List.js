import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./List.css";

export default function List() {
  const [items, setItems] = useState([{ id: uuidv4(), text: "Start" }]);
  const [text, setText] = useState("");

  const addItem = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!text) {
      alert("โปรดกรอกข้อความ!");
      return;
    }

    if (items.some((item) => item.text === text)) {
      alert("มีข้อความนี้อยู่แล้ว!");
      return;
    }

    const newItem = { id: uuidv4(), text: text };
    setItems([...items, newItem]);
    setText("");
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setText(val);
  };

  const remove = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      {items.map((item) => (
        <div className="item" key={item.id}>
          <p>{item.text}</p>
          <span>
            <button className="rm" onClick={() => remove(item.id)}>
              X
            </button>
          </span>
        </div>
      ))}
      <form onSubmit={addItem} className="form-control">
        <input type="text" value={text} onChange={handleInputChange} />
        <button type="submit" className="btn-add">
          Add Item
        </button>
      </form>
    </div>
  );
}
