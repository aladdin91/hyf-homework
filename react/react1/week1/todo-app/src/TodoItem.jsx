import React from 'react';

const TodoItem = ({ description, deadline }) => {
  return (
    <li>
      <p>{description} - {deadline}</p>
    </li>
  );
};

export default TodoItem;
