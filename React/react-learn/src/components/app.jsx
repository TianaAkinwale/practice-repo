import UserCard from './usercard'
import HexaColors from './hexacolors'
import SignUp from './signup'
import Counter from './counter'
import Test from './test'
import NumberGene from './NumberGene'

const App = () => {
 /*  props in app is ony for props ill use universally.
  move these to separate files */

  //other elements put in object form
  const userCardElements = {
    author: {
      firstname: 'IYANUOLUWA',
      lastname: 'AKINWALE'
    },
    role: 'Software Engineer, Nigeria',
    skillsHeading: 'Skills',
    dateJoined: new Date().getDay(),
  }

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

  //sign up elements put in objects
  const signUpElements = {
    subscribe: 'SUBSCRIBE',
    signUp: 'Sign up with your email address to receive news and updates',
    signupbtn: 'Subscribe'
  }
  
  return (
    <div>
      <Test />
      <Counter />
      <UserCard
        /* skillsMap={skillsMap} */
        userCardElements={userCardElements}
      />
      <HexaColors
        hexMap={hexMap}
      />
      <NumberGene
        numsMap={numsMap}
      />
      <SignUp
        signUpElements={signUpElements}
      />
      <Counter />      
      <Test />      
    </div>
  )
}

export default App