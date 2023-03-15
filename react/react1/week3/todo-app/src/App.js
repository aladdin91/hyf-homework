import React, { useState } from "react";

import './App.css';
import Count from './components/Count';
import Header from './components/Header';
import ToDosList from './components/TodoList';



function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Header title="Todolist" />
      <Count />
      <ToDosList todoItem={todos} />
    </div >
  );
}

export default App;
