export default function Input({ value, onChange, placeholder, additionalClass,...props }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
      className={`w-full border border-gray-300 rounded px-3 py-2 
        focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${additionalClass}`}
    />
  );
}
