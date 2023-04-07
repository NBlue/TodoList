import React, { useEffect, useState } from "react";
import "./style.css";
import TodoItem from "../../components/TodoItem";
import Loading from "../../components/Loading";
import todoApi from "../../api/todoApi";

const TodoList = ({ todos = [], setTodos, setOpenNewTaskMobile }) => {
  const [todoChecked, setTodoChecked] = useState([]);
  const [loading, setLoading] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const [searchTodos, setSearchTodos] = useState([]);

  useEffect(() => {
    const findTodos = todos.filter((todo) => {
      const lowerTitle = todo.title.toLowerCase();
      const lowersearchText = textSearch.trim().toLowerCase();
      if (lowerTitle.includes(lowersearchText)) return todo;
    });
    setSearchTodos(findTodos);
  }, [textSearch, todos]);

  const handleRemoveManyTodo = () => {
    const removeMany = async () => {
      try {
        setLoading(true);

        await Promise.all(todoChecked.map((id) => todoApi.removeTodo(id)));
        const updateTodos = todos.filter(
          (todo) => !todoChecked.includes(todo._id)
        );
        setTodos(updateTodos);
        setTodoChecked([]);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        return error;
      }
    };
    removeMany();
  };

  return (
    <div className={`todolist ${!todoChecked.length && "no__footer"}`}>
      <div className="container">
        <h3 className="title">To Do List</h3>
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="search__input"
          value={textSearch}
          onChange={(data) => setTextSearch(data.target.value)}
        />

        {/* Todo List */}
        <ul className="todo__list">
          {searchTodos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              todoChecked={todoChecked}
              setTodoChecked={setTodoChecked}
              openFooter={!!todoChecked.length}
            />
          ))}
        </ul>

        {/* Button new stask reponsive */}
        <button
          className="newtask__btn"
          onClick={() => setOpenNewTaskMobile(true)}
        >
          New Task
        </button>
      </div>

      {todoChecked.length > 0 && (
        <div className="footer">
          <p className="footer__text">Bulk Action:</p>
          <div className="acction">
            <button className="btn btn__done">Done</button>
            <button className="btn btn__remove" onClick={handleRemoveManyTodo}>
              {loading && <Loading typeBtn />}
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
