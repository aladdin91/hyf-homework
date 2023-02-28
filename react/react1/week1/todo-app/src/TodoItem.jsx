import React from 'react';

const TodoItem = ({ item }) => {
  return (
    <li>
      <p>{item.description} - {item.deadline}</p>
    </li>
  );
};

export default TodoItem;
