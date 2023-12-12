import { useState } from "react";
export default function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState();
  
    function handleSubmit(e) {
      e.preventDefault();
      if (!description) return;
      setDescription("");
      setQuantity(1);
  
      const newItem = { description, quantity, packed: false, id: new Date() };
      onAddItems(newItem);
    }
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip🤔?</h3>
  
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (currentVal, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          value={description}
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task......"
        ></input>
        <button>ADD</button>
      </form>
    );
  }