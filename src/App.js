import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task1", status: false },
    { id: 2, name: "Task2", status: false },
    { id: 3, name: "Task3", status: false },
    { id: 4, name: "Task4", status: false },
  ]);

  const addTask = (id) => {
    console.log(id);
    const newTask = { id: id, name: `Task${id}`, status: false };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    console.log(updatedTasks);
    setTasks(updatedTasks);
  };
  const addStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <div>
      <h1>Task List</h1>
      <div>
        <button onClick={() => addTask(tasks[tasks.length - 1].id + 1)}>
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <input type="checkbox" onClick={() => addStatus(task.id)} />
            <button onClick={() => deleteTask(task.id)} className="delete-btn">
              Delete
            </button>
            {task.status && <p>Task is completed</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
