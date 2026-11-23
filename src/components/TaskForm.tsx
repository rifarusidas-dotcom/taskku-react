
import { useState } from "react";

export interface Task {
  id: number;
  title: string;
  course: string;
  deadline: string;
  completed: boolean;
}

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [deadline, setDeadline] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title.trim() || !course.trim() || !deadline) {
      return;
    }

    onAddTask({
      id: Date.now(),
      title,
      course,
      deadline,
      completed: false,
    });

    setTitle("");
    setCourse("");
    setDeadline("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Tambah Tugas Baru</h2>

      <input
        type="text"
        placeholder="Nama tugas"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Nama mata kuliah"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
      />

      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />

      <button type="submit">+ Tambahkan Tugas</button>
    </form>
  );
}

export default TaskForm;
