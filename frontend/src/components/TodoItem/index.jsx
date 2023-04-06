import React from "react";
import "./style.css";
import Form from "../Form";

const TodoItem = () => {
  return (
    <div className="item">
      <div className="item__wrap">
        <div className="checkbox">
          <input
            type="checkbox"
            className="checkbox__input"
            id="homework"
            name="homework"
            value="homwork"
          />
          <label for="homwork" className="checkbox__label">
            Do home work
          </label>
        </div>
        <div className="action">
          <button className="btn action__detail">Detail</button>
          <button className="btn action__remove">Remove</button>
        </div>
      </div>

      {/* disable */}
      <div className="form__update">
        <Form />
      </div>
    </div>
  );
};

export default TodoItem;
