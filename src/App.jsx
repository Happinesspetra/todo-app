import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-black" : "bg-gray-100 text-black"
      } min-h-screen flex items-center justify-center p-4`}
    >
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
        <button
          onClick={toggleTheme}
          className="mb-4 p-2 rounded-lg bg-blue-500 text-white w-full"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 p-2 border border-gray-300 rounded-l-lg outline-none"
          />
          <button
            onClick={addTask}
            className="p-2 bg-blue-500 text-white rounded-r-lg"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-2 rounded ${
                task.completed ? "bg-green-200" : "bg-gray-200"
              }`}
            >
              <span
                onClick={() => toggleTaskCompletion(index)}
                className={`flex-1 cursor-pointer ${
                  task.completed ? "line-through" : ""
                } ${darkMode ? "text-gray-800" : "text-black"}`}
              >
                {task.text}
              </span>
              <button onClick={() => deleteTask(index)} className="text-red-500">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
