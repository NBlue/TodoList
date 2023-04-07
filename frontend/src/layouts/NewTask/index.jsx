import React from "react";
import "./style.css";
import Form from "../../components/Form";
import images from "../../images";

const NewTask = ({
  todos,
  setTodos,
  openNewTaskMobile,
  setOpenNewTaskMobile,
}) => {
  return (
    <div className={`newtask ${openNewTaskMobile && "open"}`}>
      <h3 className="title">New Task</h3>
      <button
        className="back__mobile"
        onClick={() => setOpenNewTaskMobile(false)}
      >
        <img src={images.backIcon} alt="back" className="back__mobile-icon" />
      </button>
      <Form
        todos={todos}
        setTodos={setTodos}
        setOpenNewTaskMobile={setOpenNewTaskMobile}
      />
    </div>
  );
};

export default NewTask;
