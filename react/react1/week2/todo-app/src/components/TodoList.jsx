import React, { useState } from "react";
import TodoItem from "./TodoItems";
import AddRandomTodo from "./AddRandomTodo";

function ToDosList({ todoItem }) {
  const [todos, setTodo] = useState(todoItem);

  const mapTodo = () => {
    if (todos.length !== 0) {
      return todos.map((item) => (
        <TodoItem key={item.id} item={item} todos={todos} setTodo={setTodo} />
      ));
    } else {
      return <h3>No items</h3>;
    }
  };
  return (
    <div>
      <AddRandomTodo todo={todos} setTodo={setTodo} />
      <ul>{mapTodo()}</ul>
    </div>
  );
}

export default ToDosList;
