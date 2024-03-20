import {Routes, Route} from 'react-router-dom'
import UserCard from './components/usercard'
import HexaColors from './components/hexacolors'
import SignUp from './components/signup'
import LogIn from './components/login'
import Counter from './components/counter'
import EventWorld from './components/eventsWorld'
import NumberGene from './components/NumberGene'

const App = () => {
 /*props in app is ony for props ill use universally.
  move these to separate files */  

  //hexacolor props
  const colorFunction = () => {
    let nums = '1234567890abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let numsrand = Math.floor(Math.random() * nums.length)
      color += nums[numsrand]
    }
    return '#' + color
  }

  //put each number(for numgene) or color function in an array via a loop
  const hexFuncArr = []
  for (let i = 1; i <= 6; i++) {
    hexFuncArr.push(colorFunction())
  }
  const hexMap = hexFuncArr.map((num) => (
    <p key={num} style={{ backgroundColor: num }}>{num}</p>
  ))
  /* <button id="hexabtn" onClick={this.changeMess}>Click Me</button> */

  //number generator prop
  const nums = []
  for (let i = 1; i <= 32; i++) {
    nums.push(i)
  }
  const numsMap = nums.map((num) => (
    <p key={num} 
      className='rounded-[8px] w-[100px] h-[40px] my-2 text-center' 
      style = {
        { backgroundColor: (num % 2 === 0) ? 'green' : (num % 3 === 0) ? 'purple' : 'orange' }
    }>
      {num}
    </p>
  ))  
  
  return (
    <Routes>
      <Route index element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />   
      <Route path="usercard" element={<UserCard />} />    
      <Route path="hexacolor" element={<HexaColors hexMap={hexMap}/>} />    
      <Route path="numgene" element={<NumberGene numsMap={numsMap}/>} />    
      <Route path="Counter" element={<Counter />} />    
      <Route path="eventsWorld" element={<EventWorld />} />    
    </Routes>    
  )
}

export default App