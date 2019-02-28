import React from 'react';
import Counter from './Counter';
import TodoList from './TodoList';
import IPAddress from './IPAddress';

// import './App.css';

export default function App() {
  return (
    <main className="App">
      <Counter />
      <TodoList />
      <IPAddress />
    </main>
  );
}
