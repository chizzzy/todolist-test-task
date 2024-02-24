import { FILTERS } from "./utils";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type Filter = keyof typeof FILTERS;
