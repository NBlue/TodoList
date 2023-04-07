import { useEffect, useState } from "react";
import "./App.css";
import NewTask from "./layouts/NewTask";
import TodoList from "./layouts/TodoList";
import todoApi from "./api/todoApi";
import Loading from "./components/Loading";
import { sortByDueDate } from "./utils/sortByDueDate";

function App() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [openNewTaskMobile, setOpenNewTaskMobile] = useState(false);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await todoApi.getAllTodo();
        setLoading(false);
        if (data.success) setTodos(sortByDueDate(data.todos));
        else console.log(data);
      } catch (error) {
        setLoading(false);
        return error;
      }
    };

    getTodos();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <NewTask
            todos={todos}
            setTodos={setTodos}
            openNewTaskMobile={openNewTaskMobile}
            setOpenNewTaskMobile={setOpenNewTaskMobile}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setOpenNewTaskMobile={setOpenNewTaskMobile}
          />
        </div>
      )}
    </>
  );
}

export default App;
