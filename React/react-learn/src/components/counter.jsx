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

/* difference inthis
a - prevstate for multiple state with event
const handleInputChange = (e) => {
    setFormData(prevState => ({
      ...prevState, //so the other values we are not updating does not get lost
      name: e.target.value //or string,
    }));
  };

and this
b - no prevstate for multiple state with event
const nameHandler = (e) => {
    setFormData({ 
        ...formData,
         name: e.target.value });
  };
 
  The first code snippet uses the `prevState` parameter in the `setFormData` function.
 This parameter allows you to update the state based on the previous state. It also 
 uses the spread operator to create a new object with all the properties of the 
 previous state and updates the value of the property with the specified `name` 
 using the value from the input `e.target.value`.

The second code snippet directly creates a new object with the spread operator 
and updates only the `name` property with the input value. It does not use the
 `prevState` parameter.

The main difference between the two is that the first one is more flexible and 
can be used to update any property in the state object dynamically, while the
 second one is specific to updating only the `name` property. */


 /* prevstate for single state with event
 const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(prevState => e.target.value //or prevState + 1 //prevstate + 1 //instead of spread operator);
  };
  
  
  no prevstate in single state with event handler
  const handleNameChange = (e) => {
    setName(e.target.value //or string);
  };*/
