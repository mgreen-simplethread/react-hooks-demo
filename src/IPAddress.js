import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function IPAddress() {
  const {
    dispatch,
    state: { ipAddress, loading },
    actions: { fetchIP },
  } = useContext(AppContext);

  const address = ipAddress.length ? ipAddress : 'unknown';

  return (
    <section className="ip-address">
      <h2>Your IP Address:</h2>
      <p className="ip-address__result">
        <em>{loading ? 'Loading...' : address}</em>
      </p>
      <button disabled={loading} onClick={fetchIP}>
        Get My IP Address
      </button>
      <button onClick={() => dispatch({ type: 'IP_RESET' })}>Clear IP</button>
    </section>
  );
}
