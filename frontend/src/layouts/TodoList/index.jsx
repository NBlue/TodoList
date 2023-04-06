import React from "react";
import "./style.css";
import TodoItem from "../../components/TodoItem";

const TodoList = () => {
  return (
    <div className="todolist">
      <div className="container">
        <h3 className="title">To Do List</h3>
        <input type="text" placeholder="Search..." className="search__input" />

        <ul className="todo__list">
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ul>
      </div>

      {/* disable */}
      <div className="footer">
        <p className="footer__text">Bulk Action:</p>
        <div className="acction">
          <button className="btn btn__done">Done</button>
          <button className="btn btn__remove">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
