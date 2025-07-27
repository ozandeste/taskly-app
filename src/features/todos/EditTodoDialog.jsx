import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useTodos } from "../../hooks/useTodos";

export default function EditTodoDialog({ todo }) {
  const { dispatch } = useTodos();
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    if (!text.trim()) return;
    dispatch({ type: "UPDATE_TODO", payload: { id: todo.id, text } });
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-blue-600 hover:text-blue-800">Edit</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-[90%] max-w-md">
          <Dialog.Title className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            Edit Task
          </Dialog.Title>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Update your task..."
            additionalClass="dark:text-white"
          />
          <div className="mt-4 flex justify-end gap-2">
            <Dialog.Close asChild>
              <Button className="bg-gray-400 hover:bg-gray-500">Cancel</Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button onClick={handleSave}>Save</Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
