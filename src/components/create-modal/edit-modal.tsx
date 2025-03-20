import { useState } from "react";
import "./modal.css";

interface EditModalProps {
  task: { id: string; title: string; description: string; completed: boolean };
  onClose: () => void;
  onEdit: (id: string, updatedData: { title?: string; description?: string; completed?: boolean }) => void;
}

export function EditModal({ task, onClose, onEdit }: EditModalProps) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [completed, setCompleted] = useState(task.completed);

  const handleSubmit = () => {
    onEdit(task.id, { title, description, completed }); 
    onClose(); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Edit Task</h2>
        <form className="input-container">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>
            Completed
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          </label>
          <button type="button" className="b-success" onClick={handleSubmit}>
            Save
          </button>
          <button type="button" className="cancel" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}