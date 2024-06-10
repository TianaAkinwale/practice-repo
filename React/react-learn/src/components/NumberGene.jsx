// src/components/NumberGene.js
import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';

const NumberGene = () => {
  const [numsMap, setNumsMap] = useState([]);

  useEffect(() => {
    const generateNumbers = () => {
      const nums = [];
      for (let i = 1; i <= 32; i++) {
        nums.push(i);
      }
      return nums.map((num) => (
        <p key={num}
          className='rounded-[8px] w-[100px] h-[40px] my-2 text-center'
          style={{
            backgroundColor: (num % 2 === 0) ? 'green' : (num % 3 === 0) ? 'purple' : 'orange'
          }}>
          {num}
        </p>
      ));
    };

    setNumsMap(generateNumbers());
  }, []);

  return (
    <div>
      <NavBar />
      <div className='bg-blue-400 m-[10px] px-[10px] py-[20px] shadow-md text-[30px] text-center rounded-[15px]'>
        <div className="grid pt-[80px] grid-cols-4 ">
          {numsMap}
        </div>
      </div>
    </div>
  );
};

export default NumberGene;
