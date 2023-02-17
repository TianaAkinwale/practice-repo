// importing the react and react-dom package and style file
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app.js'

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);