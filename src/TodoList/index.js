import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

export default function TodoList() {
  const {
    state: { tasks },
    dispatch,
  } = useContext(AppContext);

  const addTask = (task) => {
    dispatch({ type: 'TASK_ADD', task });
  };
  const removeTask = (index) => () => dispatch({ type: 'TASK_REMOVE', index });

  return (
    <section className="tasks col">
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </section>
  );
}
