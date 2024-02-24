import { filterTodos } from "./helperFunctions";
import { FILTERS } from "./constants";

describe("filterTodos function", () => {
  test("filters todos for ALL filter", () => {
    const todos = [
      { id: "1", text: "Task 1", completed: true },
      { id: "2", text: "Task 2", completed: false },
    ];
    const filteredTodos = filterTodos(todos, FILTERS.ALL);
    expect(filteredTodos).toEqual(todos);
  });

  test("filters todos for ACTIVE filter", () => {
    const todos = [
      { id: "1", text: "Task 1", completed: true },
      { id: "2", text: "Task 2", completed: false },
    ];
    const filteredTodos = filterTodos(todos, FILTERS.ACTIVE);
    expect(filteredTodos).toEqual([
      { id: "2", text: "Task 2", completed: false },
    ]);
  });

  test("filters todos for COMPLETED filter", () => {
    const todos = [
      { id: "1", text: "Task 1", completed: true },
      { id: "2", text: "Task 2", completed: false },
    ];
    const filteredTodos = filterTodos(todos, FILTERS.COMPLETED);
    expect(filteredTodos).toEqual([
      { id: "1", text: "Task 1", completed: true },
    ]);
  });
});
