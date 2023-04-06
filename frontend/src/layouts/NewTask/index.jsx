import React from "react";
import "./style.css";
import Form from "../../components/Form";

const NewTask = ({ todos, setTodos }) => {
  return (
    <div className="newtask">
      <h3 className="title">New Task</h3>
      <Form todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default NewTask;
