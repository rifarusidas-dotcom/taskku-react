
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import TaskForm from "./components/TaskForm";
import type { Task } from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import "./App.css";

function App() {
 
const [tasks, setTasks] = useState<Task[]>(() => {
  const savedTasks = localStorage.getItem("taskku-react-tasks");

  if (savedTasks) {
    try {
      return JSON.parse(savedTasks) as Task[];
    } catch {
      console.error("Data tugas tidak dapat dibaca.");
    }
  }

  return [
    {
      id: 1,
      title: "Membuat aplikasi React",
      course: "Pengembangan Aplikasi Web",
      deadline: "2026-11-25",
      completed: false,
    },
    {
      id: 2,
      title: "Mengerjakan laporan database",
      course: "Basis Data",
      deadline: "2026-11-27",
      completed: true,
    },
    {
      id: 3,
      title: "Membuat desain aplikasi mobile",
      course: "Pengembangan Aplikasi Mobile",
      deadline: "2026-11-29",
      completed: false,
    },
  ];
});

useEffect(() => {
  localStorage.setItem(
    "taskku-react-tasks",
    JSON.stringify(tasks)
  );
}, [tasks]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Semua");

  function handleAddTask(newTask: Task) {
    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  function handleToggleTask(id: number) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function handleDeleteTask(id: number) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }

function handleEditTask(task: Task) {
  const newTitle = window.prompt("Ubah nama tugas:", task.title);

  if (newTitle === null || !newTitle.trim()) return;

  const newCourse = window.prompt(
    "Ubah nama mata kuliah:",
    task.course
  );

  if (newCourse === null || !newCourse.trim()) return;

  const newDeadline = window.prompt(
    "Ubah deadline (YYYY-MM-DD):",
    task.deadline
  );

  if (newDeadline === null || !newDeadline.trim()) return;

  setTasks((previousTasks) =>
    previousTasks.map((item) =>
      item.id === task.id
        ? {
            ...item,
            title: newTitle.trim(),
            course: newCourse.trim(),
            deadline: newDeadline,
          }
        : item
    )
  );
}


  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.course.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "Semua" ||
      (filter === "Selesai" && task.completed) ||
      (filter === "Belum Selesai" && !task.completed);

    return matchesSearch && matchesFilter;
  });

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Header
          name="Rifa Rusida Sabila"
          nim="1247050025"
        />

        <section className="stats-container">
          <StatCard
            title="Total Tugas"
            value={totalTasks}
            icon="📚"
            color="purple"
          />

          <StatCard
            title="Belum Selesai"
            value={pendingTasks}
            icon="⏳"
            color="orange"
          />

          <StatCard
            title="Sudah Selesai"
            value={completedTasks}
            icon="✅"
            color="green"
          />
        </section>

        <TaskForm onAddTask={handleAddTask} />

        <section className="task-section">
          <h2>Kelola Tugasmu</h2>

          <FilterBar
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
          />

          <TaskList
            tasks={filteredTasks}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />
        </section>

        <footer className="footer" id="tentang">
          <p>
            © 2026 TaskKu React - Dibuat oleh Rifa Rusida Sabila
          </p>
          <p>Belajar lebih teratur, raih prestasi lebih baik! ✨</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
