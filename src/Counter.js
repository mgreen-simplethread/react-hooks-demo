import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function Counter() {
  const {
    state: { counter },
    dispatch,
  } = useContext(AppContext);

  const inc = () => dispatch({ type: 'COUNTER_INC' });
  const dec = () => dispatch({ type: 'COUNTER_DEC' });

  return (
    <div className="counter">
      <p>You clicked the button {counter} times</p>
      <button onClick={inc}>++</button>
      <button onClick={dec}>--</button>
    </div>
  );
}
