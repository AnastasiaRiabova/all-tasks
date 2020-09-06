import React from 'react';
// import tasks from '../Tasks/tasks.json';

const TaskList = ({ alltasks, remove }) => (
  <ul>
    {alltasks.map(({ text, id }) => (
      <li key={id}>
        <p>{text}</p>
        <button type="button" onClick={() => remove(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default TaskList;
