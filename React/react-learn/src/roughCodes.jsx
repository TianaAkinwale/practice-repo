/* export default function App() {
  const [text, setText] = React.useState('Invalid message');
  const [input, setInput] = React.useState('');

  const inputHandler = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length < 3) {
      // Update state to say "Invalid"
      setText('Invalid message');
    } else {
      // Update state to say "Valid"
      setText('Valid message');
    }
  };

  return (
    <form>
      <label>Your message</label>
      <input type="text" onChange={inputHandler} />
      <p>{text}</p>
    </form>
  );
}
 */

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

  
  /** @type {import('tailwindcss').Config} */
/* export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

 tailwind.config.js
module.exports = {
 purge: ['./index.html', './src/**//*.jsx'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

postcss
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
} 

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}*/


/* @import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities'; */

/* @tailwind base;
@tailwind components;
@tailwind utilities; */