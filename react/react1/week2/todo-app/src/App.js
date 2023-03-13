import './App.css';
import Count from './components/Count';
import Header from './components/Header';
import ToDosList from './components/TodoList';


const todos = [
  {
    id: 1,
    description: "Get out of bed",
    completed: false,

  },
  {
    id: 2,
    description: "Brush teeth",
    completed: false,

  },
  {
    id: 3,
    description: "Eat breakfast",
    completed: false,

  },
];

function App() {
  return (
    <div className="App">
      <Header title="Todolist" />
      <Count />
      <ToDosList todoItem={todos} />
    </div >
  );
}

export default App;
