import CustomCheckbox from "../../components/CustomCheckbox";
import { useTodos } from "../../hooks/useTodos";
import EditTodoDialog from "./EditTodoDialog";

export default function TodoItem({ todo }) {
  const { dispatch } = useTodos();

  return (
    <li className="flex items-center justify-between bg-white shadow p-3 rounded">
      <div className="flex items-center gap-3">
        <CustomCheckbox
          checked={todo.completed}
          onCheckedChange={() =>
            dispatch({ type: "TOGGLE_TODO", payload: todo.id })
          }
        />
        <span
          className={`text-black ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex gap-3">
        <EditTodoDialog todo={todo} />

        <button
          onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
