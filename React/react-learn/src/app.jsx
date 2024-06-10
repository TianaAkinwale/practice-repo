import {Routes, Route} from 'react-router-dom'
import UserCard from './components/usercard'
import HexaColors from './components/hexacolors'
import SignUp from './components/signup'
import LogIn from './components/login'
import Counter from './components/counter'
import EventWorld from './components/eventsWorld'
import NumberGene from './components/NumberGene'
import { createContext, useState } from 'react';


export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }
  return (
    <Routes>
      <Route index element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
      <Route path="usercard" element={
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <UserCard />
        </ThemeContext.Provider>
        } />
      <Route path="hexacolor" element={<HexaColors />} />
      <Route path="numgene" element={<NumberGene />} />
      <Route path="Counter" element={<Counter />} />
      <Route path="eventsWorld" element={<EventWorld />} />
    </Routes>
  )
}

export default App
