import React from 'react';
import { useAppContext } from './AppContext';

export default function StateView() {
  let { state } = useAppContext();
  let json = JSON.stringify(state, undefined, 2);

  return (
    <section className="state-view">
      <h2>Application State</h2>
      <pre>
        <code>{json}</code>
      </pre>
    </section>
  );
}
