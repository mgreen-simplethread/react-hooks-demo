import React from 'react';
import { useAppContext } from '../AppContext';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { pluck } from '../util';

export default function TodoList() {
  const {
    state: { tasksById, tasks },
    actions: { addTask, removeTask },
  } = useAppContext();

  return (
    <section className="tasks col">
      <TaskForm addTask={addTask} />
      <TaskList tasks={Object.values(pluck(tasksById, tasks))} removeTask={removeTask} />
    </section>
  );
}
