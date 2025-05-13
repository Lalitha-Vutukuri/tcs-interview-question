import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["Task1", "Task2", "Task3", "Task4"]);

  const addTask = () => {
    const newTask = `Task${tasks.length + 1}`;
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task List</h1>
      <div>
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
