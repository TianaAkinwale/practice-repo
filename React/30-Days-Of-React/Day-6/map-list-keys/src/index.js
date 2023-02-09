import React from 'react'
import ReactDOM from 'react-dom'
import logo from './react-logo.png'

const Logo = () => {
    return (
        <div>
            <img src={logo} alt='React Logo'/>
        </div>
    )
}

const Main = (props) => {
    const objs = props.objs
    const {heading, a, b, c, d, e} = objs
    return (
        <div>
            <Logo />
            <h1>{heading}</h1>
            <ul>
                <li>{a}</li>
                <li>{b}</li>
                <li>{c}</li>
                <li>{d}</li>
                <li>{e}</li>
            </ul>
        </div>
    )
}
const App = () => {
    const objs = {
        heading: 'Fun facts about React',
        a: 'Was first released in 2013',
        b: 'Was originally created b Jordan Walke',
        c: 'Has well over 100k stars on Github',
        d: 'Is maintained by Facebook',
        e: 'Powers thousands of enterprise apps, including mobile apps'
    }
    
    return (
     <Main 
     objs={objs}
     />   
    )
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);