import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increaseCount = () => {
    setCount(prevCount => prevCount + 15);
    setMessage({value: 'YAY! you increased count!'})
  };
  const decreaseCount = () => {
    setCount(prevCount => prevCount - 6);
    setMessage({value: 'oh no... you decreased count?!'})
  };
  const resetCount = () => {
    setCount(0);
    setMessage({value: 'HERE WE GOOO!'})
  };

  return (
    <div className="bg-blue-400 text-center my-[10px] p-[15px]">  
      <div className="bg-purple-500 p-[8px] m-1 rounded-[10px]">Count = {count}</div>
      <p className="bg-yellow-500 p-[8px] m-1 rounded-[10px]">{message.value}</p>
      <button className="bg-green-500 p-[8px] m-1 rounded-[10px]"
        onClick={increaseCount}>Increment</button>
      <button className="bg-red-500 p-[8px] m-1 rounded-[10px]"
        onClick={decreaseCount}>Decrement</button>
      <button className="bg-blue-700 p-[8px] m-1 rounded-[10px]"
        onClick={resetCount}>Reset</button>
    </div>  
  );
};

export default Counter;
