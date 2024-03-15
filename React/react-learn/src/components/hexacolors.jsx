import React, {Component} from 'react'

class HexaColors extends Component {
  render () {
      return (
        <div className="bg-blue-400 m-[10px] p-[23px] rounded-[12px]
         shadow-md text-center text-[30px] text-black">
          {this.props.hexMap}
        </div>
        //add buttons to each for onclick
      )
    }
  }
  
export default HexaColors

  /* const HexaColors = (props) => {
     return (
       <div className="DivHexaColor">
         <p style={props.hexaColor1}>{props.colorFunction1}</p>
        <p style={props.hexaColor2}>{props.colorFunction2}</p>
        <p style={props.hexaColor3}>{props.colorFunction3}</p>
         <p style={props.hexaColor4}>{props.colorFunction4}</p>
  <p style={props.hexaColor5}>{props.colorFunction5}</p>
       </div>
   } */