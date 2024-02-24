import React, { useState } from "react";
import { Todo } from "../../types";
import { ReactComponent as CloseLineIcon } from "../../assets/close-line.svg";
import styles from "./TodoItem.module.css";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={styles.todo}
      key={todo.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.main}>
        <div className={styles.checkboxWrapper}>
          <div className={styles.round}>
            <input
              onChange={() => onToggle(todo.id)}
              type="checkbox"
              checked={todo.completed}
              id={`todoCheckbox-${todo.id}`}
            />
            <label htmlFor={`todoCheckbox-${todo.id}`}></label>
          </div>
        </div>

        <span
          className={styles.todoLabel}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      </div>

      {isHovered && (
        <CloseLineIcon
          className={styles.deleteIcon}
          onClick={() => onDelete(todo.id)}
        />
      )}
    </li>
  );
};
