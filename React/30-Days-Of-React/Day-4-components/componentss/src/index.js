// importing the react and react-dom package and style file

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tiana from './images/slack-dp.jpeg'

const rootElement = document.getElementById('root');

const author = {
    firstName: 'IYANUOLUWA',
    lastName: 'AKINWALE'
}
const role = 'Software Engineer, Nigeria'
const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Git', 'VSCode', 'Github']
const skillText = 'Skills'
const skillsMap = skills.map(skill => <p className='skills'>{skill}</p>)

//Image component
const TianaImage = () => {
  return (
    <div>
        <img src={Tiana} alt='Tiana Akinwale' id='usercardimg'/>
    </div>
  )
}

//User Card component
const DivUserCard = () => {
  return (
    <div className='DivUserCard'>
      <TianaImage />
      <h3>{author.firstName} {author.lastName}</h3>
      <p>{role}</p>
      <h3>{skillText}</h3>
      <div className='skills flex'>
        <p className="skills flex">{skillsMap}</p>
      </div>
    </div>
  )
}

// Hexadecimal color generator component
//random color functions for each box
const hexaColor1 = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const hexaColor2 = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const hexaColor3 = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const hexaColor4 = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const hexaColor5 = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

//col0r style
const hexaParaStyle1 = {
  padding: '10px 20px',
  background: hexaColor1(),
  border: 'none',
  borderRadius: 5,
}

const hexaParaStyle2 = {
  padding: '10px 20px',
  background: hexaColor1(),
  border: 'none',
  borderRadius: 5,
}

const hexaParaStyle3 = {
  padding: '10px 20px',
  background: hexaColor1(),
  border: 'none',
  borderRadius: 5,
}

const hexaParaStyle4 = {
  padding: '10px 20px',
  background: hexaColor1(),
  border: 'none',
  borderRadius: 5,
}

const hexaParaStyle5 = {
  padding: '10px 20px',
  background: hexaColor1(),
  border: 'none',
  borderRadius: 5,
}

const hexabtn = 'Click Me'

//hexcolor main component
const DivHexaColor = () => {
  return (
    <div className='DivHexaColor'>
      <p className='hexaPara' style={hexaParaStyle1}>{hexaColor1()}</p>
      <p className='hexaPara' style={hexaParaStyle2}>{hexaColor2()}</p>
      <p className='hexaPara' style={hexaParaStyle3}>{hexaColor3()}</p>
      <p className='hexaPara' style={hexaParaStyle4}>{hexaColor4()}</p>
      <p className='hexaPara' style={hexaParaStyle5}>{hexaColor5()}</p>
      <button id='hexabtn'>{hexabtn}</button>
    </div>
  )
}

const subscribe = 'SUBSCRIBE'
const signUp = 'Sign up with your email address to receive news and updates'
const signupbtn = 'Subscribe'

//Sign Up component
const DivSignUp = () => {
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
// JSX element main
const main = (
    <main>
      <DivUserCard/>
      <DivHexaColor />
      <DivSignUp />
    </main>
)

//main's component
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