import React, { Component } from 'react'
import UserCard from './main/usercard.js'
import HexaColors from './main/hexacolors.js'
import SignUp from './main/signup.js'

class App extends Component {
    render() {
      //for array as i don't know how to put it in the object in the app component yet.
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Git', 'VSCode', 'Github']
    const skillsMap = skills.map(skill => <p className='skills'>{skill}</p>)
  
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
  
    //hexacolor functions
    const colorFunction1 = () => {
      let nums = '1234567890abcdef'
      let color = ''
      for (let i = 0; i < 6; i++) {
        let numsrand = Math.floor(Math.random() * nums.length)
        color += nums[numsrand]
      }
      return '#' + color
    }
  
    const colorFunction2 = () => {
      let nums = '1234567890abcdef'
      let color = ''
      for (let i = 0; i < 6; i++) {
        let numsrand = Math.floor(Math.random() * nums.length)
        color += nums[numsrand]
      }
      return '#' + color
    }
  
    const colorFunction3 = () => {
      let nums = '1234567890abcdef'
      let color = ''
      for (let i = 0; i < 6; i++) {
        let numsrand = Math.floor(Math.random() * nums.length)
        color += nums[numsrand]
      }
      return '#' + color
    }
  
    const colorFunction4 = () => {
      let nums = '1234567890abcdef'
      let color = ''
      for (let i = 0; i < 6; i++) {
        let numsrand = Math.floor(Math.random() * nums.length)
        color += nums[numsrand]
      }
      return '#' + color
    }
  
    const colorFunction5 = () => {
      let nums = '1234567890abcdef'
      let color = ''
      for (let i = 0; i < 6; i++) {
        let numsrand = Math.floor(Math.random() * nums.length)
        color += nums[numsrand]
      }
      return '#' + color
    }
  
    //color style
    const hexaColor1 = {
      padding: '10px 20px',
      background: colorFunction1(),
      border: 'none',
      borderRadius: 5,
    }
  
    const hexaColor2 = {
      padding: '10px 20px',
      background: colorFunction1(),
      border: 'none',
      borderRadius: 5,
    }
  
    const hexaColor3 = {
      padding: '10px 20px',
      background: colorFunction1(),
      border: 'none',
      borderRadius: 5,
    }
  
    const hexaColor4 = {
      padding: '10px 20px',
      background: colorFunction1(),
      border: 'none',
      borderRadius: 5,
    }
  
    const hexaColor5 = {
      padding: '10px 20px',
      background: colorFunction1(),
      border: 'none',
      borderRadius: 5,
    }
    
    //sign up elements put in objects
    const signUpElements = {
      subscribe: 'SUBSCRIBE',
      signUp: 'Sign up with your email address to receive news and updates',
      signupbtn: 'Subscribe'
    }
  
    return (
      <div>
        <UserCard 
        skills={skills}
        skillsMap={skillsMap}
        userCardElements={userCardElements}
        />
        <HexaColors 
        colorFunction1={colorFunction1()}
        hexaColor1={hexaColor1}
        colorFunction2={colorFunction2()}
        hexaColor2={hexaColor2}
        colorFunction3={colorFunction3()}
        hexaColor3={hexaColor3}
        colorFunction4={colorFunction4()}
        hexaColor4={hexaColor4}
        colorFunction5={colorFunction5()}
        hexaColor5={hexaColor5}
        />
        <SignUp 
        signUpElements={signUpElements}
        />
      </div>
    )
    }
  }
  // const App = () => {
  //   //for array as i don't know how to put it in the object in the app component yet.
  //   const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Git', 'VSCode', 'Github']
  //   const skillsMap = skills.map(skill => <p className='skills'>{skill}</p>)
  
  //   //other elements put in object form
  //   const userCardElements = {
  //     author: {
  //       firstname: 'IYANUOLUWA',
  //       lastname: 'AKINWALE'
  //     },
  //     role: 'Software Engineer, Nigeria',
  //     skillsHeading: 'Skills',
  //     dateJoined: new Date().getFullYear()
  //   }
  
  //   //hexacolor functions
  //   const colorFunction1 = () => {
  //     let nums = '1234567890abcdef'
  //     let color = ''
  //     for (let i = 0; i < 6; i++) {
  //       let numsrand = Math.floor(Math.random() * nums.length)
  //       color += nums[numsrand]
  //     }
  //     return '#' + color
  //   }
  
  //   const colorFunction2 = () => {
  //     let nums = '1234567890abcdef'
  //     let color = ''
  //     for (let i = 0; i < 6; i++) {
  //       let numsrand = Math.floor(Math.random() * nums.length)
  //       color += nums[numsrand]
  //     }
  //     return '#' + color
  //   }
  
  //   const colorFunction3 = () => {
  //     let nums = '1234567890abcdef'
  //     let color = ''
  //     for (let i = 0; i < 6; i++) {
  //       let numsrand = Math.floor(Math.random() * nums.length)
  //       color += nums[numsrand]
  //     }
  //     return '#' + color
  //   }
  
  //   const colorFunction4 = () => {
  //     let nums = '1234567890abcdef'
  //     let color = ''
  //     for (let i = 0; i < 6; i++) {
  //       let numsrand = Math.floor(Math.random() * nums.length)
  //       color += nums[numsrand]
  //     }
  //     return '#' + color
  //   }
  
  //   const colorFunction5 = () => {
  //     let nums = '1234567890abcdef'
  //     let color = ''
  //     for (let i = 0; i < 6; i++) {
  //       let numsrand = Math.floor(Math.random() * nums.length)
  //       color += nums[numsrand]
  //     }
  //     return '#' + color
  //   }
  
  //   //color style
  //   const hexaColor1 = {
  //     padding: '10px 20px',
  //     background: colorFunction1(),
  //     border: 'none',
  //     borderRadius: 5,
  //   }
  
  //   const hexaColor2 = {
  //     padding: '10px 20px',
  //     background: colorFunction1(),
  //     border: 'none',
  //     borderRadius: 5,
  //   }
  
  //   const hexaColor3 = {
  //     padding: '10px 20px',
  //     background: colorFunction1(),
  //     border: 'none',
  //     borderRadius: 5,
  //   }
  
  //   const hexaColor4 = {
  //     padding: '10px 20px',
  //     background: colorFunction1(),
  //     border: 'none',
  //     borderRadius: 5,
  //   }
  
  //   const hexaColor5 = {
  //     padding: '10px 20px',
  //     background: colorFunction1(),
  //     border: 'none',
  //     borderRadius: 5,
  //   }
    
  //   //sign up elements put in objects
  //   const signUpElements = {
  //     subscribe: 'SUBSCRIBE',
  //     signUp: 'Sign up with your email address to receive news and updates',
  //     signupbtn: 'Subscribe'
  //   }
  
  //   return (
  //     <div>
  //       <UserCard 
  //       skills={skills}
  //       skillsMap={skillsMap}
  //       userCardElements={userCardElements}
  //       />
  //       <HexaColors 
  //       colorFunction1={colorFunction1()}
  //       hexaColor1={hexaColor1}
  //       colorFunction2={colorFunction2()}
  //       hexaColor2={hexaColor2}
  //       colorFunction3={colorFunction3()}
  //       hexaColor3={hexaColor3}
  //       colorFunction4={colorFunction4()}
  //       hexaColor4={hexaColor4}
  //       colorFunction5={colorFunction5()}
  //       hexaColor5={hexaColor5}
  //       />
  //       <SignUp 
  //       signUpElements={signUpElements}
  //       />
  //     </div>
  //   )
  // }

  export default App