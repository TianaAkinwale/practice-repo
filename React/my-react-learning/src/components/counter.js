import React, { Component } from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
        count: 0
      }    
  }  
  increaseCount() {
    this.setState ({
        count: this.state.count + 15
    }, () => {
        //callback, what you wnt your code to do after main code runs
        console.log('Callback value', this.state.count)
    })
  }
  decreaseCount() {
    this.setState ({
        count: this.state.count - 6
    })
  }
  render() {
    return (
    <div>  
      <div>Count - {this.state.count}</div>
      <button onClick={() => this.increaseCount()}>Increment</button>
      <button onClick={() => this.decreaseCount()}>Decrement</button>
    </div>  
    )
  }
}

export default Counter