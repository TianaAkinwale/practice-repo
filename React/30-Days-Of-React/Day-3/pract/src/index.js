// importing the react and react-dom package and style file

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tiana from './images/slack-dp.jpeg'

const rootElement = document.getElementById('root');

const user = (
    <div>
        <img src={Tiana} alt='Tiana Akinwale'/>
    </div>
)

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
// JSX element main
const main = (
    <main>
        <div className='second'>
            {user}
            <h3>{author.firstName} {author.lastName}</h3>
            <p>{role}</p>
            <h3>{skillTe}</h3>
            <div className='skills flex'>
                <p className="skills flex">{skillsT}</p>
            </div>
        </div>
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
    </main>
)

const copyRight = 'Copyright 2020'

/*component structure
const FunComp () => {
    return (

    )
}

element structure
const element = (

)*/

// JSX element, footer
const footer = (
    <footer>
        <div className='footer-wrapper'>
            <p>{copyRight}</p>
        </div>
    </footer>
)

// JSX element, app, a container or a parent
const app = (
    <div className='app'>
        {main}
        {footer}
    </div>
)

// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)