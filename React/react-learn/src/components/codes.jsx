import React, { useState } from 'react';

function StateObject() {
  const [state, setState] = useState({ age: 19, siblingsNum: 4 });
  const handleClick = val =>
    setState({
      ...state,
      [val]: state[val] + 1
    });
  const { age, siblingsNum } = state;

  return (
    <div>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleClick.bind(null, 'age')}>Get older!</button>
        <button onClick={handleClick.bind(null, 'siblingsNum')}>
          More siblings!
        </button>
      </div>
    </div>
  );
}

export default StateObject;



When using `useState` hook with arrays, it's important to note that the state array is replaced, not merged. Here's an example:
 array is replaced, not merged. Here's an example:

Example 3: Array state
```jsx
import React, { useState } from 'react';

function StateArray() {
  const [items, setItems] = useState(['item1', 'item2']);
  const addItem = () =>
    setItems([...items, `item${items.length + 1}`]);

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

export default StateArray;


import React, { useState } from 'react';

function StateArray() {
  const [items, setItems] = useState(['item1
Here are three examples of using `useEffect` hook in web apps:

Example 1: Fetching data
```jsx
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
     ', 'item2']);
  const addItem = () =>
    setItems([...items, `item${items.length + 1}`]);

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

export default StateArray;


Example2: Subscribing to events
```jsx
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

export default ScrollBox;



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

export default Timer;



import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] =useState([]);

  function addItem(text) {
    setItems([...items, { text }]);
  }

  function removeItem(index) {
    setItems(items.filter((item, i) => i !== index));
  }

  return (
    <div>
      <form>
        <input type="text" />
        <button type="button" onClick={e => {
          e.preventDefault();
          const input = document.querySelector('input[type="text"]');
          addItem(input.value);
          input.value = '';
        }}>Add</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.text}
            <button type="button" onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;



import React, { useState } from 'react';

function ImageGallery() {
  const [images, setImages] = useState([
    { src: 'https://picsum.photos/id/1015/400/300', alt: 'Image 1' },
    { src: 'https://picsum.photos/id/1016/400/300', alt: 'Image 2' },
    { src: 'https://picsum.photos/id/1018/400/300', alt: 'Image 3' },
  ]);

  const [currentImage, setCurrentImage] = useState(0);

  function prevImage() {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  }

  function nextImage() {
    setCurrentImage((currentImage + 1) % images.length);
  }

  return (
    <div>
      <button onClick={prevImage}>Previous</button>
      <img src={images[currentImage].src}alt={images[currentImage].alt} />
      <button onClick={nextImage}>Next</button>
    </div>
  );
}

export default ImageGallery;






import React, { useState } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  function getWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
      .then(response => response.json())
      .then(data => setWeather(data));
  }

  return (
    <div>
      <input type="text" value={city} onChange={e => setCity(e.target.value)} />
      <button onClick={getWeather}>Get Weather</button>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}K</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;






import React, { useState } from 'react';

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login() {
    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function AuthConsumer() {
  const { isAuthenticated, login, logout } = React.useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

const AuthContext = React.createContext();

export { AuthProvider, AuthConsumer };





import React, { useState } from 'react';

function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
  }

  function removeItem(index) {
    setItems(items.filter((item, i) => i !== index));
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

function CartConsumer() {
  const { items, addItem, removeItem } = React.useContext(CartContext);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem({ name: 'New Item' })}>Add Item</button>
    </div>
  );
}

const CartContext = React.createContext();

export { CartProvider, CartConsumer };





import React, { useState } from 'react';

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    setTodos([...todos, { text }]);
  }

  function removeTodo(index) {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

function TodoConsumer() {
  const { todos, addTodo, removeTodo } = React.useContext(TodoContext);

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="text" ref={inputRef} />
      <button onClick={() => addTodo(inputRef.current.value)}>Add Todo</button>
    </div>
  );
}

const TodoContext = React.createContext();
const inputRef = React.createRef();

export { TodoProvider, TodoConsumer };




import React, { useState } from 'react';

function MessageProvider({ children }) {
  const [messages, setMessages] = useState([]);

  function addMessage(text) {
    setMessages([...messages, { text }]);
  }

  function removeMessage(index) {
    setMessages(messages.filter((message, i) => i !== index));
  }

  return (
    <MessageContext.Provider value={{ messages, addMessage, removeMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

function MessageConsumer() {
  const { messages, addMessage, removeMessage } = React.useContext(MessageContext);

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {message.text}
            <button onClick={() => removeMessage(index)}>Remove</button>
          </li>
       ))}
      </ul>
      <input type="text" ref={inputRef} />
      <button onClick={() => addMessage(inputRef.current.value)}>Add Message</button>
    </div>
  );
}

const MessageContext = React.createContext();
const inputRef = React.createRef();

export { MessageProvider, MessageConsumer };




import React, { useState } from 'react';

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  function addProduct(name, price) {
    setProducts([...products, { name, price }]);
  }

  function removeProduct(index) {
    setProducts(products.filter((product, i) => i !== index));
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

function ProductConsumer() {
  const { products, addProduct, removeProduct } = React.useContext(ProductContext);

  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
            <button onClick={() => removeProduct(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="text" ref={nameRef} />
      <input type="number" ref={priceRef} />
      <button onClick={() => addProduct(nameRef.current.value, priceRef.current.value)}>Add Product</button>
    </div>
  );
}

const ProductContext = React.createContext();
const nameRef = React.createRef();
const priceRef = React.createRef();

export { ProductProvider, ProductConsumer };
