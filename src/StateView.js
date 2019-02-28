import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function StateView() {
  let { state } = useContext(AppContext);
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
