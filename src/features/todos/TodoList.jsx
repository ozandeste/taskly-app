import { useTodos } from "../../hooks/useTodos";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { state } = useTodos();

  const filteredTodos = state.todos
    .filter((todo) => {
      if (state.filter === "active") return !todo.completed;
      if (state.filter === "completed") return todo.completed;
      return true;
    })
    .filter((todo) =>
      todo.text.toLowerCase().includes(state.searchQuery.toLowerCase())
    );

  if (filteredTodos.length === 0) {
    return <p className="text-gray-500">No tasks found.</p>;
  }

  return (
    <ul className="space-y-2">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
