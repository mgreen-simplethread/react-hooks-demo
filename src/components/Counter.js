import React from 'react';
import { useAppContext } from '../AppContext';

export default function Counter() {
  console.debug('render Counter');

  const {
    state: { counter },
    actions: { incrementCounter, decrementCounter },
  } = useAppContext();

  return (
    <section className="counter col">
      <p>You clicked the button {counter} times</p>
      <button onClick={incrementCounter}>++</button>
      <button onClick={decrementCounter}>--</button>
    </section>
  );
}
