import { useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function TodoForm() {
  const [text, setText] = useState("");
  const { dispatch } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch({
      type: "ADD_TODO",
      payload: { id: Date.now(), text, completed: false },
    });

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
