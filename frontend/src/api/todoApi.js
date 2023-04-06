import axiosClient from "./axiosClient";

const todoApi = {
  getAllTodo() {
    const url = "v1/todo";
    return axiosClient.get(url);
  },

  addTodo(data) {
    const url = "v1/todo";
    return axiosClient.post(url, data);
  },

  updateTodo(data, id) {
    const url = `v1/todo/${id}`;
    return axiosClient.put(url, data);
  },

  removeTodo(id) {
    const url = `v1/todo/${id}`;
    return axiosClient.delete(url);
  },
};
export default todoApi;
