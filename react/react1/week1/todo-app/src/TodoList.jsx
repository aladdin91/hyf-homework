import React from 'react';
import TodoItem from './TodoItem';
import todoListData from './todos.json';

const TodoList = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoListData.map((item, index) => (
          <TodoItem key={index} description={item.description} deadline={item.deadline} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
