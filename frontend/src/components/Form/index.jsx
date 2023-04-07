import React, { useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import Loading from "../Loading";
import todoApi from "../../api/todoApi";
import { sortByDueDate } from "../../utils/sortByDueDate";

const Form = ({
  type = "add",
  todo,
  todos,
  setTodos,
  setOpenNewTaskMobile,
}) => {
  const [loading, setLoading] = useState(false);

  // Config react hook form
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: type === "add" ? "" : todo.title,
      description: type === "add" ? "" : todo.description,
      dueDate:
        type === "add" ? new Date().toISOString().substr(0, 10) : todo.dueDate,
      piority: type === "add" ? "Normal" : todo.piority,
    },
  });

  const addTodo = async (data) => {
    try {
      setLoading(true);

      const res = await todoApi.addTodo(data);
      if (res.success) {
        const updateTodos = sortByDueDate([...todos, res.todo]);
        setTodos(updateTodos);
        setOpenNewTaskMobile(false);
      } else console.log(res);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      return error;
    }
  };

  const updateTodo = async (data, id) => {
    try {
      setLoading(true);

      const res = await todoApi.updateTodo(data, id);
      if (res.success) {
        const filterTodos = todos.filter((todo) => todo._id !== id);
        const updateTodos = sortByDueDate([...filterTodos, res.todo]);
        setTodos(updateTodos);
        setValue("title", data.title);
        setValue("description", data.description);
      } else console.log(res);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      return error;
    }
  };

  // Handle onSubmit
  const onSubmit = (data) => {
    const validateData = {
      ...data,
      title: data.title.trim(),
      description: data.description.trim(),
    };
    if (type === "add") {
      addTodo(validateData);
      reset();
    }
    if (type === "update") {
      updateTodo(validateData, todo._id);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__controller">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Add new task..."
          className="form__controller-input"
          {...register("title", { required: true })}
        />
        {errors.title && <span className="error">The title is required!</span>}
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
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && (
          <span className="error">The description is required!</span>
        )}
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
            min={new Date().toISOString().split("T")[0]}
            {...register("dueDate", { required: true })}
          />
          {errors.dueDate && (
            <span className="error">The date is required!</span>
          )}
        </div>
        <div className="form__controller">
          <label htmlFor="piority" className="form__controller-label">
            Piority
          </label>

          <select
            name="piority"
            id="piority"
            className="form__controller-input"
            defaultValue="Normal"
            {...register("piority", { required: true })}
          >
            <option value="High">High</option>
            <option value="Normal">Nomal</option>
            <option value="Low">Low</option>
          </select>
          {errors.piority && (
            <span className="error">The piority is required!</span>
          )}
        </div>
      </div>
      <button className="submit-btn">
        {loading && <Loading typeBtn />}
        {type === "add" ? "Add" : "Update"}
      </button>
    </form>
  );
};

export default Form;
