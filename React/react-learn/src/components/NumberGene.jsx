import React from 'react';

const NumberGene = () => {
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

export default NumberGene