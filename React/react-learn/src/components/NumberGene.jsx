import React, { Component } from 'react';

class NumberGene extends Component {
  render() {
    return (
      <div className='DivNumberGene'>
        <div className="numGene flex">
          <div className="numGene flex">
            {this.props.numsMap}
          </div>
        </div>
      </div>
    )
  }
}

export default NumberGene