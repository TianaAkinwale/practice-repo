import React, { Component } from 'react'
import TianaImage from '../images/slack-dp.jpeg'

//image class component
class TiaImg extends Component {
  render() {
      return (
        <div>
          <img src={TianaImage} alt='Tiana Akinwale' id="usercardimg"/>
        </div>
      )
    } 
  }
  
  //Image component
  // const TiaImg = () => {
  //   return (
  //     <div>
  //       <img src={TianaImage} alt='Tiana Akinwale' id="usercardimg"/>
  //     </div>
  //     )
  // }

  export default TiaImg