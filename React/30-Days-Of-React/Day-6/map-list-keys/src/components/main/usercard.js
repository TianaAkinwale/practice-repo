import React, { Component } from 'react'
import TiaImg from '../image.js'

//usercard component
class UserCard extends Component {
    render() {
      const userCardElements = this.props.userCardElements
    /*const {author, role, skillsHeading, dateJoined} = userCardElements
    const {firstname, lastname} = author*/
  
    //2nd destructuring method- single line method
    const {
      author: {firstname, lastname},
      role, 
      skillsHeading, 
      dateJoined
    } = userCardElements
    
    //3rd destructuring method- bracket method
    /*const UserCard = ({
      userCardElements: {
        author: {firstname, lastname},
        role, 
        skillsHeading, 
        dateJoined
      }
    }) => { return (...)}*/
  
    return (
      <div className="DivUserCard">
        <TiaImg />
        <h3>{firstname} {lastname}</h3>
        <p>{role}</p>
        <h3>{skillsHeading}</h3>
        <div className="skills flex">
          <p className="skills flex">{this.props.skillsMap}</p>
        </div>
        <p>{dateJoined}</p>
      </div>
    )
   }
  }
  
  // const UserCard = (props) => {
  //   const userCardElements = props.userCardElements
  //   /*const {author, role, skillsHeading, dateJoined} = userCardElements
  //   const {firstname, lastname} = author*/
  
  //   //2nd destructuring method- single line method
  //   const {
  //     author: {firstname, lastname},
  //     role, 
  //     skillsHeading, 
  //     dateJoined
  //   } = userCardElements
    
  //   //3rd destructuring method- bracket method
  //   /*const UserCard = ({
  //     userCardElements: {
  //       author: {firstname, lastname},
  //       role, 
  //       skillsHeading, 
  //       dateJoined
  //     }
  //   }) => { return (...)}*/
  
  //   return (
  //     <div className="DivUserCard">
  //       <TiaImg />
  //       <h3>{firstname} {lastname}</h3>
  //       <p>{role}</p>
  //       <h3>{skillsHeading}</h3>
  //       <div className="skills flex">
  //         <p className="skills flex">{props.skillsMap}</p>
  //       </div>
  //       <p>{dateJoined}</p>
  //     </div>
  //   )
  // }
  
  //HexaColor component
  
  export default UserCard