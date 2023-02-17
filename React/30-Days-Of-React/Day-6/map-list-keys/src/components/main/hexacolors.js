import React, { Component } from 'react'

class HexaColors extends Component {
    render() {
      return (
        <div className="DivHexaColor">
          <p style={this.props.hexaColor1}>{this.props.colorFunction1}</p>
          <p style={this.props.hexaColor2}>{this.props.colorFunction2}</p>
          <p style={this.props.hexaColor3}>{this.props.colorFunction3}</p>
          <p style={this.props.hexaColor4}>{this.props.colorFunction4}</p>
          <p style={this.props.hexaColor5}>{this.props.colorFunction5}</p>
        </div>
        //add buttons to each for onclick
      )
    }
  }
  
  // const HexaColors = (props) => {
  //   return (
  //     <div className="DivHexaColor">
  //       <p style={props.hexaColor1}>{props.colorFunction1}</p>
  //       <p style={props.hexaColor2}>{props.colorFunction2}</p>
  //       <p style={props.hexaColor3}>{props.colorFunction3}</p>
  //       <p style={props.hexaColor4}>{props.colorFunction4}</p>
  //       <p style={props.hexaColor5}>{props.colorFunction5}</p>
  //     </div>
  //     //add buttons to each for onclick
  //   )
  // }

  export default HexaColors