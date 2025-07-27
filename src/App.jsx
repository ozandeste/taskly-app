import TodoForm from "./features/todos/TodoForm";
import TodoList from "./features/todos/TodoList";
import TodoControls from "./features/todos/TodoControls";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black dark:text-white flex flex-col items-center p-10">
      <ThemeToggle />
      <h1 className="text-4xl font-bold mb-6">Taskly</h1>
      <div className="w-full max-w-md">
        <TodoForm />
        <TodoControls />
        <TodoList />
      </div>
    </div>
  );
}