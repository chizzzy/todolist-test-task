import React from "react";
import { Filter } from "../../types";
import styles from "./FilterButton.module.css";

interface FilterButtonProps {
  filter: Filter;
  activeFilter: Filter;
  setFilter: (filter: Filter) => void;
  text: string;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  filter,
  activeFilter,
  setFilter,
  text,
}) => {
  return (
    <button
      className={`${styles.filterButton} ${
        filter === activeFilter ? styles.active : ""
      }`}
      onClick={() => setFilter(filter)}
    >
      {text}
    </button>
  );
};
