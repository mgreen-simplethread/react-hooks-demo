import React, { useContext } from 'react';
import { useAppContext } from '../AppContext';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

export default function TodoList() {
  const {
    state: { tasks },
    dispatch,
  } = useAppContext();

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
