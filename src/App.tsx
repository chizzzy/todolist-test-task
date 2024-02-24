import React, { useState } from "react";
import { Filter, Todo } from "./types";
import styles from "./App.module.css";
import { v4 as uuidv4 } from "uuid";
import { FilterButton, TodoList } from "./components";
import { FILTERS } from "./utils";

const generateItemsLeftLabel = (todosToComplete: number) =>
  `${todosToComplete} item${todosToComplete === 1 ? "" : "s"} left!`;

const filterOptions = [
  {
    name: FILTERS.ALL,
    text: "All",
  },
  {
    name: FILTERS.ACTIVE,
    text: "Active",
  },
  {
    name: FILTERS.COMPLETED,
    text: "Completed",
  },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>(FILTERS.ALL);
  const [inputValue, setInputValue] = useState("");

  const todosToComplete = todos.filter((todo) => !todo.completed).length;
  const itemsLeftLabel = generateItemsLeftLabel(todosToComplete);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleAllTasksCompletion = () => {
    const allCompleted = todos.every((todo) => todo.completed);

    const updatedTodos = todos.map((todo) => ({
      ...todo,
      completed: !allCompleted,
    }));
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.length >= 2) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Todos</h1>
        <div className={styles.inputContainer}>
          {todos.length ? (
            <div className={styles.toggleAllContainer}>
              <input
                type="checkbox"
                id="arrowCheckbox"
                className={styles.toggleAllInput}
                onChange={toggleAllTasksCompletion}
              />
              <label
                htmlFor="arrowCheckbox"
                className={styles.toggleAllLabel}
              />
            </div>
          ) : null}
          <input
            className={styles.input}
            type="text"
            placeholder="What needs to be done?"
            onChange={handleInputChange}
            value={inputValue}
            onKeyDown={handleInputKeyDown}
          />
        </div>

        {todos.length ? (
          <>
            <TodoList
              todos={todos}
              filter={filter}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
            <div className={styles.footer}>
              <span>{itemsLeftLabel}</span>
              <div className={styles.filters}>
                {filterOptions.map((filterOption) => (
                  <FilterButton
                    filter={filterOption.name}
                    activeFilter={filter}
                    setFilter={setFilter}
                    text={filterOption.text}
                  />
                ))}
              </div>
              <button className={styles.clearButton} onClick={clearCompleted}>
                Clear completed
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default App;
