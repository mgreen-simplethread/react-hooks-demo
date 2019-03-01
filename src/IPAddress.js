import React from 'react';
import { useAppContext } from './AppContext';

export default function IPAddress() {
  const {
    state: { ipAddress, loading },
    actions: { fetchIP, resetIP },
  } = useAppContext();

  const address = ipAddress.length ? ipAddress : 'unknown';

  return (
    <section className="ip-address col">
      <h2>Your IP Address:</h2>
      <p className="ip-address__result">
        <em>{loading ? 'Loading...' : address}</em>
      </p>
      <button disabled={loading} onClick={fetchIP}>
        Get My IP Address
      </button>
      <button onClick={resetIP}>Clear IP</button>
    </section>
  );
}
