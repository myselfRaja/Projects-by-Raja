// src/Task.jsx
import React from 'react';

const Task = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className="task">
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => onToggleComplete(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
