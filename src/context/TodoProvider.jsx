import { useEffect, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { initialState, todoReducer } from "./todoReducer";
import { TodoContext } from "./TodoContext";

export const TodoProvider = ({ children }) => {
  const [persistedTodos, setPersistedTodos] = useLocalStorage("todos", []);
  const [state, dispatch] = useReducer(todoReducer, {
    ...initialState,
    todos: persistedTodos,
  });

  useEffect(() => {
    setPersistedTodos(state.todos);
  }, [state.todos, setPersistedTodos]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};