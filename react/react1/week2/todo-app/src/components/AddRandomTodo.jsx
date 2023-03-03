function AddRandomTodo({ todos, setTodo }) {
  const addNewTodo = () => {
    const newTodo = {
      id: Math.random() * 10,
      description: "randomText",
    };
    setTodo((oldTodos) => [...oldTodos, newTodo]);
  };
  return <button onClick={addNewTodo}>Add random todo</button>;
}

export default AddRandomTodo;
