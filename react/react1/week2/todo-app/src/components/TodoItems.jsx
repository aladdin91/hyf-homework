function TodoItem({ item, todos, setTodo }) {
  const handleCheckboxChange = () => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = () => {
    setTodo(todos.filter((todo) => todo.id !== item.id));
  };

  return (
    <li>
      <h2
        style={{ textDecorationLine: item.completed ? "line-through" : "none" }}
      >
        {item.description}
      </h2>
      <input
        type="checkbox"
        checked={item.completed || false}
        onChange={handleCheckboxChange}
      />
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;
