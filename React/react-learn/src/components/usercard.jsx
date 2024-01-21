import React, { useState } from 'react';
/* import TiaImg from './image.jsx';
 */import TianaImage from '../images/slack-dp.jpeg'

// UserCard component
const UserCard = ({ userCardElements, skillsMap }/* or props */) => {
  const [noun, setNoun] = useState('Christianah');

  const changeMess = () => {
    setNoun('Kris');
  };

  const {
    author: { firstname, lastname },
    role,
    skillsHeading,
    dateJoined,
  } = userCardElements;

  return (
    <div id="divUserCard">
      <img src={TianaImage} alt='Tiana Akinwale' id="usercardimg"/>
      <h3>
        {firstname} {noun} {lastname}
      </h3>
      <button onClick={changeMess}>Click me to change name</button>

      //put link to settings page
      <button><a href="#settingsDiv">Click me to edit profile</a></button>

      <p>{role}</p>
      <h3>{skillsHeading}</h3>
      <div className="skills flex">
        <div className="skills flex">{skillsMap}</div>
      </div>
      <p>{dateJoined}</p>
    </div>
  );
};

export default UserCard;

  /* event binding...
        handling events
        ---4. class LoggingButton extends React.Component {
          // This syntax ensures `this` is bound within handleClick.
          handleClick = () => {
            console.log('this is:', this);
          };
          render() {
            return (
              <button onClick={this.handleClick}>
                Click me
              </button>
            );
          }
        }---
        1. binding in button
        <button onClick={this.changeMess.bind(this)}>Click me to change name</button>
        2. using arrow function and 3 binding in class constructor
        <button onClick={() => this.changeMess()}>Click me to change name</button>
        <button onClick={this.changeMess}>Click me to change name</button> */

   /* const UserCard = (props) => {
    const userCardElements = props.userCardElements
    const {author, role, skillsHeading, dateJoined} = userCardElements
    const {firstname, lastname} = author
  
    //2nd destructuring method- single line method
    const {
      author: {firstname, lastname},
      role, 
      skillsHeading, 
      dateJoined
    } = userCardElements
    
    //3rd destructuring method- bracket method
    /*const UserCard = ({
      userCardElements: {
        author: {firstname, lastname},
        role, 
        skillsHeading, 
        dateJoined
      }
    }) => { return (...)}
  
    return (
      <div className="DivUserCard">
        <TiaImg />
        <h3>{firstname} {lastname}</h3>
        <p>{role}</p>
        <h3>{skillsHeading}</h3>
        <div className="skills flex">
          <p className="skills flex">{props.skillsMap}</p>
        </div>
        <p>{dateJoined}</p>
      </div>
    )
  } */

  /* function passing in react
  function App() {
    const handleClick = () => {
      console.log('Button click ...');
    };
  
    return (
      <div>
        <button type="button" onClick={handleClick}>
          Event Handler
        </button>
      </div>
    );
  } */
