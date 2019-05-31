import React from 'react';
import { useAppContext } from '../../AppContext';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

export default function TodoList() {
  console.debug('render TodoList');
  const {
    state: { tasks },
    actions: { addTask, removeTask },
  } = useAppContext();

  return (
    <section className="tasks col">
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </section>
  );
}
