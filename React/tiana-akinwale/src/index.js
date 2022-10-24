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
const skillTe = 'Skills'
const skillsT = skills.map(skill => <p className='skills'>{skill}</p>)

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
    <div className='DivUserCard'><TianaImage />
      <h3>{author.firstName} {author.lastName}</h3>
      <p>{role}</p>
      <h3>{skillTe}</h3>
      <div className='skills flex'>
          <p className="skills flex">{skillsT}</p>
      </div>
    </div>
  )
}

// Hexadecimal color generator component
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}
/*
const pp = [hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor()]
const t = pp.map(p => <p className='hexaPara'>{p}</p>)
//const hexaPara = hexaColor()*/
const hexaParaStyle = {
  padding: '10px 20px',
  background: hexaColor(),
  border: 'none',
  borderRadius: 5,
}
const hexabtn = 'Click Me'
const DivHexaColor = () => {
  return (
    <div className='DivHexaColor'>
      <p className='hexaPara' style={hexaParaStyle}>{hexaColor()}</p>
      <p className='hexaPara' style={hexaParaStyle}>{hexaColor()}</p>
      <p className='hexaPara' style={hexaParaStyle}>{hexaColor()}</p>
      <p className='hexaPara' style={hexaParaStyle}>{hexaColor()}</p>
      <p className='hexaPara' style={hexaParaStyle}>{hexaColor()}</p>
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
ReactDOM.render(app, rootElement);
