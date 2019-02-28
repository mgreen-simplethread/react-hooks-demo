import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

export default function TodoList() {
  const {
    state: { tasks },
    dispatch,
  } = useContext(AppContext);

  const [task, setTask] = useState('');

  const addTask = (task) => {
    dispatch({ type: 'TASK_ADD', task });
  };
  const removeTask = (index) => () => dispatch({ type: 'TASK_REMOVE', index });
  const handleChange = (evt) => {
    console.debug('Task change: %s', evt.target.value);
    setTask(evt.target.value);
  };

  return (
    <section className="tasks col">
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </section>
  );
}
