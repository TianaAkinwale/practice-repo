// importing the react and react-dom package and style file
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TianaImage from './images/slack-dp.jpeg'

//Image component
const TiaImg = () => {
  return (
    <div>
      <img src={TianaImage} alt='Tiana Akinwale' id="usercardimg"/>
    </div>
    )
}

//usercard component
/*const UserCard = (props) => {
  return (
    <div className="DivUserCard">
      <TiaImg />
      <h3>{props.userCardElements.author.firstname} {props.userCardElements.author.lastname}</h3>
      <p>{props.userCardElements.role}</p>
      <h3>{props.userCardElements.skillsHeading}</h3>
      <div className="skills flex">
        <p className="skills flex">{props.skillsMap}</p>
      </div>
      <p>{props.userCardElements.dateJoined}</p>
    </div>
  )
}*/

//usercard component destructured
const UserCard = (props) => {
  const userCardElements = props.userCardElements
  /*const {author, role, skillsHeading, dateJoined} = userCardElements
  const {firstname, lastname} = author*/

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
  }) => { return (...)}*/

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
}

//HexaColor component
const HexaColors = (props) => {
  return (
    <div className="DivHexaColor">
      <p style={props.hexaColor1}>{props.colorFunction1}</p>
      <p style={props.hexaColor2}>{props.colorFunction2}</p>
      <p style={props.hexaColor3}>{props.colorFunction3}</p>
      <p style={props.hexaColor4}>{props.colorFunction4}</p>
      <p style={props.hexaColor5}>{props.colorFunction5}</p>
    </div>
    //add buttons to each for onclick
  )
}

//Sign up component
const SignUp = (props) => {
  const signUpElements = props.signUpElements
  const {subscribe, signUp, signupbtn} = signUpElements
  
  return (
    <div className='DivSignUp'>
      <h1 className="subs">{subscribe}</h1>
      <p className="subs">{signUp}</p>
      <form>
        <input type="text" placeholder="First Name" required/>
        <input type="text" placeholder="Last Name"/>
        <input type="email" placeholder="Email" required/><br/>
        <button id='signupbtn'>{signupbtn}</button>
      </form> 
    </div>
  )
}

//props put in App(parent component) as objects.
const App = () => {
  //for array as i don't know how to put it in the object yet.
  const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Git', 'VSCode', 'Github']
  const skillsMap = skills.map(skill => <p className='skills'>{skill}</p>)

  //other elements put in object form
  const userCardElements = {
    author: {
      firstname: 'IYANUOLUWA',
      lastname: 'AKINWALE'
    },
    role: 'Software Engineer, Nigeria',
    skillsHeading: 'Skills',
    dateJoined: new Date().getFullYear()
  }

  //hexacolor functions
  const colorFunction1 = () => {
    let nums = '1234567890abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let numsrand = Math.floor(Math.random() * nums.length)
      color += nums[numsrand]
    }
    return '#' + color
  }

  const colorFunction2 = () => {
    let nums = '1234567890abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let numsrand = Math.floor(Math.random() * nums.length)
      color += nums[numsrand]
    }
    return '#' + color
  }

  const colorFunction3 = () => {
    let nums = '1234567890abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let numsrand = Math.floor(Math.random() * nums.length)
      color += nums[numsrand]
    }
    return '#' + color
  }

  const colorFunction4 = () => {
    let nums = '1234567890abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let numsrand = Math.floor(Math.random() * nums.length)
      color += nums[numsrand]
    }
    return '#' + color
  }

  const colorFunction5 = () => {
    let nums = '1234567890abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let numsrand = Math.floor(Math.random() * nums.length)
      color += nums[numsrand]
    }
    return '#' + color
  }

  //color style
  const hexaColor1 = {
    padding: '10px 20px',
    background: colorFunction1(),
    border: 'none',
    borderRadius: 5,
  }

  const hexaColor2 = {
    padding: '10px 20px',
    background: colorFunction1(),
    border: 'none',
    borderRadius: 5,
  }

  const hexaColor3 = {
    padding: '10px 20px',
    background: colorFunction1(),
    border: 'none',
    borderRadius: 5,
  }

  const hexaColor4 = {
    padding: '10px 20px',
    background: colorFunction1(),
    border: 'none',
    borderRadius: 5,
  }

  const hexaColor5 = {
    padding: '10px 20px',
    background: colorFunction1(),
    border: 'none',
    borderRadius: 5,
  }
  
  //sign up elements put in objects
  const signUpElements = {
    subscribe: 'SUBSCRIBE',
    signUp: 'Sign up with your email address to receive news and updates',
    signupbtn: 'Subscribe'
  }

  return (
    <div>
      <UserCard 
      skills={skills}
      skillsMap={skillsMap}
      userCardElements={userCardElements}
      />
      <HexaColors 
      colorFunction1={colorFunction1()}
      hexaColor1={hexaColor1}
      colorFunction2={colorFunction2()}
      hexaColor2={hexaColor2}
      colorFunction3={colorFunction3()}
      hexaColor3={hexaColor3}
      colorFunction4={colorFunction4()}
      hexaColor4={hexaColor4}
      colorFunction5={colorFunction5()}
      hexaColor5={hexaColor5}
      />
      <SignUp 
      signUpElements={signUpElements}
      />
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

//props put in App(parent component) in their strings
/*const App = () => {
  //elements used in usercard component
  const author = {
    firstname: 'IYANUOLUWA',
    lastname: 'AKINWALE'
  }

  const role = 'Software Engineer, Nigeria'
  const skillsHeading = 'Skills'
  const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Git', 'VSCode', 'Github']
  const skillsMap = skills.map((skill) => <p>{skill}</p>)
  const dateJoined = new Date().getFullYear()

  //returning the elements
  return (
    <div>
      <UserCard 
      author={author}
      role={role}
      skillsHeading={skillsHeading}
      skills={skills}
      skillsMap={skillsMap}
      dateJoined={dateJoined}
      />
    </div>
  )
}*/