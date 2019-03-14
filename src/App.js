import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import IPAddress from './components/IPAddress';
import StateView from './components/StateView';

import './App.css';

export default function App() {
  return (
    <>
      <header>
        <h1>Buncha Components Using App State</h1>
      </header>
      <main className="app">
        <Counter />
        <TodoList />
        <IPAddress />
        <StateView />
      </main>
    </>
  );
}
