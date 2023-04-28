import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(prevCount => prevCount + 15);
  };

  const decreaseCount = () => {
    setCount(prevCount => prevCount - 6);
  };

  return (
    <div>  
      <div>Count = {count}</div>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrement</button>
    </div>  
  );
};

export default Counter;
