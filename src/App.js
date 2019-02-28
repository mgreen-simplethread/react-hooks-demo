import React from 'react';
import Counter from './Counter';
import TodoList from './TodoList';
import IPAddress from './IPAddress';
import StateView from './StateView';

import './App.css';

export default function App() {
  return (
    <React.Fragment>
      <header>
        <h1>Buncha Components Using App State</h1>
      </header>
      <main className="app">
        <Counter />
        <TodoList />
        <IPAddress />
        <StateView />
      </main>
    </React.Fragment>
  );
}
