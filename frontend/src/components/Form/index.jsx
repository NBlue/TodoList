import React from "react";
import "./style.css";
import { useForm } from "react-hook-form";

const Form = ({ onSubmit }) => {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      dueDate: "",
      piority: "",
    },
  });

  return (
    <form className="form">
      <div className="form__controller">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Add new task..."
          className="form__controller-input"
        />
      </div>
      <div className="form__controller">
        <label htmlFor="description" className="form__controller-label">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="form__controller-input"
          rows="4"
        ></textarea>
      </div>
      <div className="wraper">
        <div className="form__controller">
          <label htmlFor="dueDate" className="form__controller-label">
            Due Date
          </label>

          <input
            type="date"
            name="dueDate"
            id="dueDate"
            className="form__controller-input"
          />
        </div>
        <div className="form__controller">
          <label htmlFor="piority" className="form__controller-label">
            Piority
          </label>

          <select
            name="piority"
            id="piority"
            className="form__controller-input"
          >
            <option value="High">High</option>
            <option selected value="Nomal">
              Nomal
            </option>
            <option value="Low">Mercedes</option>
          </select>
        </div>
      </div>
      <button className="submit-btn">Add/Update</button>
    </form>
  );
};

export default Form;
