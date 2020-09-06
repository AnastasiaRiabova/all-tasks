import React from 'react';
// import Counter from './Counter';

const Controls = ({ increment, decrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={increment}>
      incre
    </button>
    <button type="button" onClick={decrement}>
      decr
    </button>
  </div>
);

export default Controls;
