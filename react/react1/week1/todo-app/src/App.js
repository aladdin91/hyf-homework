import React from 'react';
import TodoList from './TodoList';
import Title from './Title';



const App = () => {
  return (
    <div>
      <Title title={"Todo List"} />
      <TodoList />
    </div>
  );
};

export default App;
