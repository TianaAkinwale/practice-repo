// importing the react and react-dom package and style file

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tiana from './images/slack-dp.jpeg'

const rootElement = document.getElementById('root');

const User = () => {
  return (
    <div>
        <img src={Tiana} alt='Tiana Akinwale'/>
    </div>
  )
}

const subscribe = 'SUBSCRIBE'
const signUp = 'Sign up with your email address to receive news and updates'
const button = 'Subscribe'

const author = {
    firstName: 'IYANUOLUWA',
    lastName: 'AKINWALE'
}
const role = 'Software Engineer, Nigeria'
const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Git', 'VSCode', 'Github']
const skillTe = 'Skills'
const skillsT = skills.map(skill => <p className='skills'>{skill}</p>)

//Div component
const DivSec = () => {
  return (
    <div className='second'><User />
      <h3>{author.firstName} {author.lastName}</h3>
      <p>{role}</p>
      <h3>{skillTe}</h3>
      <div className='skills flex'>
          <p className="skills flex">{skillsT}</p>
      </div>
    </div>
  )
}

//Div component
const DivFir = () => {
  return (
    <div className='first'>
      <h1 className="subs">{subscribe}</h1>
      <p className="subs">{signUp}</p>
      <form>
        <input type="text" placeholder="First Name" required/>
        <input type="text" placeholder="Last Name"/>
        <input type="email" placeholder="Email" required/><br/>
        <button>{button}</button>
      </form> 
    </div>
  )
}
// JSX element main
const main = (
    <main>
      <DivSec />
      <DivFir />
    </main>
)

const Main = () => {
  return main
}

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
    <footer>
        <div className='footer-wrapper'>
            <p>{copyRight}</p>
        </div>
    </footer>
)

const Footer = () => {
  return footer
}

// JSX element, app, a container or a parent
const app = (
    <div className='app'>
      <Main />
      <Footer />
    </div>
)

// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)