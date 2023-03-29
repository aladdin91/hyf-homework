import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

function ToDosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    )
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const renderTodo = () => {
    if (todos.length !== 0) {
      return todos.map((item) => (
        <TodoItem key={item.id} item={item} todos={todos} setTodos={setTodos} />
      ));
    } else {
      return <h3>No items</h3>;
    }
  };
  return (
    <>
      <AddTodo todos={todos} setTodos={setTodos} />
      <ul className="toDo-container">{renderTodo()}</ul>
    </>
  );
}

export default ToDosList;
