
import type { Task } from "./TaskForm";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
}

function TaskList({ tasks, onToggle, onDelete, onEdit }: TaskListProps) {
  return (
    <section className="task-list" id="daftar-tugas">
      <h2>Daftar Tugas Kuliah</h2>

      {tasks.length === 0 ? (
        <p className="empty-message">
          Belum ada tugas. Yuk, tambahkan tugas pertamamu!
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </section>
  );
}

export default TaskList;
