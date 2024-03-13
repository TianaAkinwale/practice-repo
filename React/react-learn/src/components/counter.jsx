import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increaseCount = () => {
    setCount(prevCount => prevCount + 15);
    setMessage({value: 'you increased count?!'})
  };

  const decreaseCount = () => {
    setCount(prevCount => prevCount - 6);
  };

  return (
    <div>  
      <div>Count = {count}</div>
      <button onClick={increaseCount}>Increment</button>
      <p onClick={increaseCount}>{message.value}</p>
      <button onClick={decreaseCount}>Decrement</button>
    </div>  
  );
};

export default Counter;
