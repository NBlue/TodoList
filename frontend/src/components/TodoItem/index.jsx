import React, { useState } from "react";
import "./style.css";
import Form from "../Form";
import Loading from "../Loading";
import todoApi from "../../api/todoApi";

const TodoItem = ({
  todo = {},
  todos = [],
  setTodos,
  todoChecked = [],
  setTodoChecked,
  openFooter = false,
}) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRemoveSubmit = (id) => {
    const removeTodo = async () => {
      try {
        setLoading(true);
        const data = await todoApi.removeTodo(id);

        if (data.success) {
          const updateTodos = todos.filter((todo) => todo._id !== id);
          setTodos(updateTodos);
        } else console.log(data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        return error;
      }
    };

    removeTodo();
  };

  const handleCheckboxChange = (data) => {
    if (data.target.checked) {
      setTodoChecked([...todoChecked, data.target.value]);
    } else {
      const updateChecked = todoChecked.filter(
        (id) => id !== data.target.value
      );
      setTodoChecked(updateChecked);
    }
  };

  return (
    <div className="item">
      <div className="item__wrap">
        <div className="checkbox">
          <input
            type="checkbox"
            className="checkbox__input"
            id="homework"
            name={todo._id}
            value={todo._id}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={todo._id} className="checkbox__label">
            {todo?.title}
          </label>
        </div>
        <div className="action">
          <button
            className="btn action__detail"
            onClick={() => setOpenDetail(!openDetail)}
          >
            Detail
          </button>
          <button
            className={`btn action__remove ${openFooter && "disable"}`}
            disabled={openFooter}
            onClick={() => handleRemoveSubmit(todo._id)}
          >
            {loading && <Loading typeBtn />}
            Remove
          </button>
        </div>
      </div>

      {/* disable */}
      <div className={`form__update ${!openDetail && "disable"}`}>
        <Form type="update" todo={todo} todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default TodoItem;
