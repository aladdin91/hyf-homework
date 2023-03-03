import React, { useState } from "react";
import DeleteTodo from "./DeleteTodo";

function TodoItem({ item, todos, setTodo }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <li>
      <p style={{ textDecorationLine: checked ? "line-through" : "none" }}>
        {item.description}
      </p>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <DeleteTodo item={item} todos={todos} setTodo={setTodo} />
    </li>
  );
}

export default TodoItem;
