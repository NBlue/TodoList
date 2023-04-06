import React from "react";
import "./style.css";
import Form from "../../components/Form";

const NewTask = () => {
  const handleFormSubmit = (value) => {
    console.log("Form submit: ", value);
  };
  return (
    <div className="newtask">
      <h3 className="title">New Task</h3>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default NewTask;
