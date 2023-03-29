import React, { useState } from "react";

function TodoItem({ item, todos, setTodos }) {
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(item.description);
  const [editedDeadline, setEditedDeadline] = useState(item.deadline);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleDeleteTodo = () => {
    setTodos(todos.filter((todo) => todo.id !== item.id));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const editedTodo = {
      ...item,
      description: editedDescription.trim(),
      deadline: editedDeadline,
    };
    const updatedTodos = todos.map((todo) =>
      todo.id === item.id ? editedTodo : todo
    );
    setTodos(updatedTodos);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedDescription(item.description);
    setEditedDeadline(item.deadline);
  };
  return (
    <li className="toDo-list">
      {isEditing ? (
        <div className="listItem">
          <input
            type="text"
            value={editedDescription}
            onChange={(event) => setEditedDescription(event.target.value)}
          />
          <input
            type="date"
            value={editedDeadline}
            onChange={(event) => setEditedDeadline(event.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div className="listItem">
          <p style={{ textDecorationLine: checked ? "line-through" : "none" }}>
            {item.description} | {item.deadline}
          </p>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <button onClick={handleDeleteTodo}>Delete</button>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
