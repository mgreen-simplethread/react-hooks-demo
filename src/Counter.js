import React from 'react';
import { useAppContext } from './AppContext';

export default function Counter() {
  const {
    state: { counter },
    dispatch,
  } = useAppContext();

  const inc = () => dispatch({ type: 'COUNTER_INC' });
  const dec = () => dispatch({ type: 'COUNTER_DEC' });

  return (
    <section className="counter col">
      <p>You clicked the button {counter} times</p>
      <button onClick={inc}>++</button>
      <button onClick={dec}>--</button>
    </section>
  );
}
