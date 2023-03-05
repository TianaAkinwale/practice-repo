// importing the react and react-dom package and style file
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app.js'

/* const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement); */

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)