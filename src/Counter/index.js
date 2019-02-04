import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me ++</button>
    </div>
  );
}
