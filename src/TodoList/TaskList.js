import React from 'react';
import PropTypes from 'prop-types';

export default function TaskList({ tasks, removeTask }) {
  return (
    <ul className="tasks__list">
      {tasks.length < 1
        ? 'No tasks yet!'
        : tasks.map((task, idx) => (
            <li className="task" key={`task-${idx}`}>
              <span className="task__body">{task}</span> <button onClick={removeTask(idx)}>[remove]</button>
            </li>
          ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string),
  removeTask: PropTypes.func.isRequired,
};
