import React, { Component } from 'react';

class NumberGene extends Component {
  render() {
    return (
      <div className='DivNumberGene'>
        <div className="skills flex">
          <div className="skills flex">
            {this.props.numsMap}
          </div>
        </div>
      </div>
    )
  }
}

export default NumberGene