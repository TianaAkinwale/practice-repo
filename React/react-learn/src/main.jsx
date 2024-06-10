// importing the react and react-dom package and style file
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './app.jsx'
import { ThemeProvider } from './context';

/* const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement); */

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)
