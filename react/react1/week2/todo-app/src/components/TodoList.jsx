import React, { useState } from "react";
import TodoItem from "./TodoItems";
import AddRandomTodo from "./AddRandomTodo";

function ToDosList({ todoItem }) {
  const [todos, setTodos] = useState(todoItem);

  const renderTodos = () => {
    if (todos.length !== 0) {
      return todos.map((item) => (
        <TodoItem key={item.id} item={item} todos={todos} setTodo={setTodos} />
      ));
    } else {
      return <h3>No items</h3>;
    }
  };
  return (
    <div>
      <AddRandomTodo todo={todos} setTodo={setTodos} />
      <ul>{renderTodos()}</ul>
    </div>
  );
}

export default ToDosList;
