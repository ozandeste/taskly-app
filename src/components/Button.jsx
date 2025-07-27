export default function Button({ children, type = "button", onClick, ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className={`bg-blue-600 text-white px-4 py-2 rounded 
        shadow hover:bg-blue-700 focus:outline-none 
        focus:ring-2 focus:ring-blue-400 transition-all`}
    >
      {children}
    </button>
  );
}
