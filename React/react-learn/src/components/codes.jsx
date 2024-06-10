/* Here are three examples of using `useEffect` hook in web apps:
/* //declare promise
function getWeather() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Sunny')
        }, 100)
    })
}

function getWeatherIcon(weather) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            switch (weather) {
                case 'Sunny':
                    resolve('Sun')
                    break;
                case 'Cloudy':
                    resolve('Cloud')
                    break;
                case 'Rainy':
                    resolve('Rain')
                    break;

                default:
                    reject('NOT FOUND')
            }
        }, 100)
    })
}


//function for then, which takes 2 params, resolve and reject params
function onSuccess(data) {
    console.log(`success ${data}`)
}
function onError() {
    console.log(`error occured`)
}
function inTheEnd() {
    console.log(`finally func`)
}

getWeather()
.then(getWeatherIcon) //this receives the weather param bc what gets
//resolved as data in the first function gets pssed to this as param
//as they are chained promises
.then(onSuccess)
.catch(onError)
.finally(inTheEnd)
 */


/* function fetchData() {
    return new Promise(function(resolve, reject) {
        fetch('https://api.weather.gov/gridpoints/OKKX/35,35/forecast')
            .then(response => response.json())
            .then(data => resolve(data.properties.periods[1].shortForecasts))
})
}

function displayData(weather) {
    console.log(weather)
}
function onError() {
    console.log(`error ${err}`)
}

fetchData()
    .then(displayData)
    .catch(onError)
 */

/* import React, { useState } from 'react';

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

export default ImageGallery; */


/* import React, { useState } from 'react';

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
          input.value = ''}}>Add</button>
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

export default TodoList; */


/* import React, { useState } from 'react';

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
 */

/* import React, { useState } from 'react';

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

export { CartProvider, CartConsumer }; */


/* import React, { useState } from 'react';

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

export { MessageProvider, MessageConsumer }; */


/* import React, { useState } from 'react';

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

export { ProductProvider, ProductConsumer }; */
