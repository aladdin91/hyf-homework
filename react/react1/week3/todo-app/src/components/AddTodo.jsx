import React, { useState } from "react";

function AddTodo({ todos, setTodos }) {
  const [inputValue, setInputValue] = useState("");
  const [deadlineValue, setDeadlineValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeadlineChange = (event) => {
    setDeadlineValue(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if todo input is not empty
    if (inputValue.trim() === "") {
      alert("Please input a todo.");
      return;
    }

    // Check if deadline is a valid date
    const deadlineDate = new Date(deadlineValue);
    if (isNaN(deadlineDate.getTime())) {
      alert("Please input a valid date for the deadline.");
      return;
    }

    // Check if deadline is in the future
    const now = new Date();
    if (deadlineDate < now) {
      alert(
        "We don't have time machine yet, until then please input a valid date :)."
      );
      return;
    }

    const newTodo = {
      id: Math.random(),
      description: inputValue.trim(),
      deadline: deadlineValue,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
    setDeadlineValue("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new todo item..."
      />
      <input
        type="date"
        value={deadlineValue}
        onChange={handleDeadlineChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
