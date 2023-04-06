export const sortByDueDate = (todos) =>
  todos.sort((first, second) => {
    return new Date(first.dueDate) - new Date(second.dueDate);
  });
