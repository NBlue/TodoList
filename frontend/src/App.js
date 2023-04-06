import "./App.css";
import NewTask from "./layouts/NewTask";
import TodoList from "./layouts/TodoList";

function App() {
  return (
    <div className="App">
      <NewTask />
      <TodoList />
    </div>
  );
}

export default App;
