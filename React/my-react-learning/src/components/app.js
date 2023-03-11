import React, { Component } from 'react'
import UserCard from './usercard.js'
import HexaColors from './hexacolors.js'
import SignUp from './signup.js'
import Counter from './counter.js'
import NumberGene from './NumberGene.js'

class App extends Component {
    render() {
    //for array as i don't know how to put it in the object in the app component yet.
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Git', 'VSCode', 'Github']
    const skillsMap = skills.map((skill) => <p key={skill} className='skills'>{skill}</p>)
  
    //other elements put in object form
    const userCardElements = {
      author: {
        firstname: 'IYANUOLUWA',
        lastname: 'AKINWALE'
      },
      role: 'Software Engineer, Nigeria',
      skillsHeading: 'Skills',
      dateJoined: new Date().getFullYear()
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
    const hexFuncArr =  []
    for (let i = 1; i <= 6; i++) {
      hexFuncArr.push(colorFunction())
    }
    const hexMap = hexFuncArr.map((num) => (
        <p key={num} style={{backgroundColor: num}}>{num}</p>
    ))
     /* <button id="hexabtn" onClick={this.changeMess}>Click Me</button> */

    //number generator prop
    const nums = []
    for (let i = 1; i <= 32 ; i++) {
      nums.push(i)
    }
    const numsMap = nums.map((num) => (
     <p key={num} className='numGene' style={
     {backgroundColor: (num % 2 === 0) ? 'green' : (num % 3 === 0) ? 'yellow' : 'red'}
    }>{num}</p>
    ))

    //sign up elements put in objects
    const signUpElements = {
      subscribe: 'SUBSCRIBE',
      signUp: 'Sign up with your email address to receive news and updates',
      signupbtn: 'Subscribe'
    }
  
    return (
      <div>
        <UserCard 
        skillsMap={skillsMap}
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
      </div>
    )
    }
  }
  
  export default App