import { useState } from "react";
import { useTodoDataMutate } from "../../hooks/UseTodoMutate";
import { TodoData } from "../../interface/TodoData";
import "./modal.css"

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: unknown): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) =>
          updateValue(
            event.target.type === "number"
              ? Number(event.target.value)
              : event.target.value
          )
        }
      />
    </>
  );
};

interface CreateModalProps {
  onClose: () => void; 
}

export function CreateModal({ onClose }: CreateModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const { mutate } = useTodoDataMutate();

  const submit = () => {
    const todoData: Omit<TodoData, "id"> = {
      title,
      description,
      completed,
    };
    mutate(todoData, {
      onSuccess: () => {
        onClose(); 
      },
    }); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Add a new task</h2>
        <form className="input-container">
          <Input label="Title" value={title} updateValue={setTitle} />
          <Input
            label="Description"
            value={description}
            updateValue={setDescription}
          />
          <label>
            Completed
            <input
              type="checkbox"
              checked={completed}
              onChange={(event) => setCompleted(event.target.checked)}
            />
          </label>
          <button type="button" onClick={submit} className="b-success">Add</button>
          <button type="button" className="cancel" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
