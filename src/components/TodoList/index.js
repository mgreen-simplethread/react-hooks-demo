import React from 'react';
import { useAppContext } from '../../AppContext';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

export default function TodoList() {
  const {
    state: { tasks },
    actions: { addTask, removeTask },
  } = useAppContext();

  return (
    <section className="tasks col">
      <TaskForm addTask={addTask} />
      <TaskList tasks={Object.values(tasks)} removeTask={removeTask} />
    </section>
  );
}
