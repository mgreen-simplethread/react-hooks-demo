import React from 'react';
import PropTypes from 'prop-types';

export default function TaskList({ tasks, removeTask }) {
  const items = Object.entries(tasks);

  return (
    <ul className="tasks__list">
      {items.length < 1
        ? 'No tasks yet!'
        : items.map(([id, task]) => (
            <li className="task" key={id}>
              <span className="task__body">{task}</span> <button onClick={() => removeTask(id)}>[remove]</button>
            </li>
          ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.objectOf(PropTypes.string),
  removeTask: PropTypes.func.isRequired,
};
