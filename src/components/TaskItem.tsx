
import type { Task } from "./TaskForm";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
}

function TaskItem({ task, onToggle, onDelete, onEdit }: TaskItemProps) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-details">
        <h3>{task.title}</h3>
        <p>{task.course}</p>
        <small>Deadline: {task.deadline}</small>
        <span className="task-status">
          {task.completed ? "Selesai" : "Belum Selesai"}
        </span>
      </div>

      <div className="task-actions">
        <button onClick={() => onEdit(task)}>
          Edit
        </button>

        <button onClick={() => onToggle(task.id)}>
          {task.completed ? "Batalkan" : "Selesaikan"}
        </button>

        <button onClick={() => onDelete(task.id)}>
          Hapus
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
