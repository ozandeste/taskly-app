import { useTodos } from "../../hooks/useTodos";

export default function TodoControls() {
  const { state, dispatch } = useTodos();

  return (
    <div className="flex flex-col gap-4 mb-6">
      {/* Search */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={state.searchQuery}
        onChange={(e) =>
          dispatch({ type: "SET_SEARCH", payload: e.target.value })
        }
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Filter Buttons */}
      <div className="flex gap-2 justify-center">
        {["all", "active", "completed"].map((filter) => (
          <button
            key={filter}
            onClick={() => dispatch({ type: "SET_FILTER", payload: filter })}
            className={`px-4 py-2 rounded ${
              state.filter === filter
                ? "bg-white text-black"
                : "bg-indigo-500 text-white hover:bg-indigo-800 transition duration-300 ease-in-out"
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
