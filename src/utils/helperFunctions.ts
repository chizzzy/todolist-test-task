import { FILTERS } from "./constants";
import { Filter, Todo } from "../types";

export const filterTodos = (todos: Todo[], filter: Filter) =>
  todos.filter((todo) => {
    if (filter === FILTERS.ALL) {
      return true;
    }
    if (filter === FILTERS.ACTIVE) {
      return !todo.completed;
    }
    if (filter === FILTERS.COMPLETED) {
      return todo.completed;
    }
    return false;
  });
