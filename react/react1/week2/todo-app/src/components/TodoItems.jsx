import React, { useState } from "react";

function TodoItem({ item, todos, setTodo }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const deleteTodo = () => {
    setTodo(todos.filter((todo) => todo.id !== item.id));
  };

  return (
    <li>
      <h2 style={{ textDecorationLine: checked ? "line-through" : "none" }}>
        {item.description}
      </h2>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;
