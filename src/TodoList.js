import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from './AppContext';

export default function TodoList() {
  const {
    state: { tasks },
    dispatch,
  } = useContext(AppContext);

  const [task, setTask] = useState('');

  const addTask = (evt) => {
    evt.preventDefault();
    dispatch({ type: 'TASK_ADD', task });
    setTask('');
  };
  const removeTask = (index) => () => dispatch({ type: 'TASK_REMOVE', index });
  const handleChange = (evt) => {
    console.debug('Task change: %s', evt.target.value);
    setTask(evt.target.value);
  };

  return (
    <div className="tasks">
      <ul className="tasks__list">
        {!tasks.length
          ? 'No tasks yet!'
          : tasks.map((task, idx) => (
              <li className="task" key={`task-${idx}`}>
                <span className="task__body">{task}</span> <button onClick={removeTask(idx)}>[remove]</button>
              </li>
            ))}
      </ul>
      <form className="task-form" onSubmit={addTask}>
        <p className="task-form__field">
          <label htmlFor="task-input">Task:</label>{' '}
          <input id="task-input" placeholder="Buy milk" value={task} onChange={handleChange} />
        </p>
        <input type="submit" value="Add Task" />
      </form>
    </div>
  );
}
