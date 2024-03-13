import REeact, { useState } from 'react'

const Test = () => {
    const [value, setValue] = useState({
    firstName: '',
    message: '',
    key: '',
  })
  const handleClick = (e) => {
    // e gives an event object
    // check the value of e using console.log(e)
    setValue({
      message: 'Welcome to the world of events',
    })
  }
  // triggered whenever the mouse moves
  const handleMouseMove = (e) => {
    setValue({ message: 'mouse is moving' })
  }
  // to get value when an input field changes a value
  const handleChange = (e) => {
    setValue({
      firstName: e.target.value,
      message: e.target.value,
    })
  }

  // to get keyboard key code when an input field is pressed
  // it works with input and textarea
  const handleKeyPress = (e) => {
    setValue({
      message:
        `${e.target.value} has been pressed and the keycode is` + e.charCode,
    })
  }
  // Blurring happens when a mouse leave an input field
  const handleBlur = (e) => {
    setValue({ message: 'Input field has been blurred' })
  }
  // This event triggers during a text copy
  const handleCopy = (e) => {
    setValue({
      message: 'Using 30 Days Of React for commercial purpose is not allowed',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
    setValue({
      firstName: '',
      lastName: '',
      mail: '',
    });
    // Do something with the form data
  }

    return (
      <div>
        <h1>Welcome to the World of Events</h1>

        <button onClick={handleClick}>Click Me</button>
        <button onMouseMove={handleMouseMove}>Move mouse on me</button>
        <p onCopy={handleCopy}>
          Check copy right permission by copying this text
        </p>

        <p>{value.message}</p>
        <label htmlFor=''> Test for onKeyPress Event: </label>
        <input type='text' onKeyPress={handleKeyPress} />
        <br />

        <label htmlFor=''> Test for onBlur Event: </label>
        <input type='text' onBlur={handleBlur} />

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name: </label>
            <input
              onChange={handleChange}
              name='firstName'
              value={value.message}
            />
          </div>

          {/* <div>
            <input type='submit' value='Submit' />
          </div> */}
        </form>
      </div>
    )
  }

export default Test