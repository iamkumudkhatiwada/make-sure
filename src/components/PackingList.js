import { useState } from "react";
import Item from "./Item";
export default function PackingList({ items, onDeleteItems, onToggle, handleClearList }) {
    const [sort, setSort] = useState("input");
    let sortedItems;
    if (sort === "input") sortedItems = items;
    if (sort === "description") {
      sortedItems = [...items].sort((a, b) =>
        a.description.localeCompare(b.description)
      );
    }
    if (sort === "packed") {
      sortedItems = [...items].sort((a, b) => a.packed - b.packed);
    }
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              onDeleteItems={onDeleteItems}
              key={item.id}
              item={item}
              onToggle={onToggle}
            />
          ))}
        </ul>
        <div className="action">
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="input">sort by input Order</option>
            <option value="description">sort by description</option>
            <option value="packed">sort by packed status</option>
          </select>
          <button onClick={handleClearList}>Clear List</button>
        </div>
      </div>
    );
  }