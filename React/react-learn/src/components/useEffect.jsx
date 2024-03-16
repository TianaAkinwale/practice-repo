/* Here are three examples of using `useEffect` hook in web apps:
Example 1: Fetching data
```jsx */
import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(user => setUser(user));
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

/* Example2: Subscribing to events
```jsx */
import React, { useState, useEffect } from 'react';

function ScrollBox() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <p>Scroll Top: {scrollTop}</p>
    </div>
  );
}

/* export default ScrollBox;
 */


import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>Time: {time}</p>
    </div>
  );
}

/* export default Timer;
 */