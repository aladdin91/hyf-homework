import React from 'react';
import TodoItem from './TodoItem';
import todoListData from './todos.json';

const TodoList = () => {
  return (
    <div>
      <ul>
        {todoListData.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
