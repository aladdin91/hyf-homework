function DeleteTodo({ todos, setTodo, item }) {
  const deleteTodo = () => {
    setTodo(todos.filter((todo) => todo.id !== item.id));
  };

  return <button onClick={deleteTodo}>Delete</button>;
}

export default DeleteTodo;
