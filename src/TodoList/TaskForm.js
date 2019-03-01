import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Here we're using component level state to keep track of the user's text entry and sending it back up to our context
// when they submit.
export default function TaskForm({ addTask }) {
  let [task, setTask] = useState('');
  let handleChange = ({ target: { value } }) => setTask(value);
  let handleSubmit = (evt) => {
    evt.preventDefault();
    if (!task.length) return;
    addTask(task);
    setTask('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <p className="task-form__field">
        <label htmlFor="task-input">Task:</label>{' '}
        <input id="task-input" placeholder="Buy milk" value={task} onChange={handleChange} />
      </p>
      <input type="submit" value="Add Task" disabled={!task.length} />
    </form>
  );
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};
