// src/components/HexaColors.js
import React, { useState, useEffect } from 'react';

const colorFunction = () => {
  let nums = '1234567890abcdef';
  let color = '';
  for (let i = 0; i < 6; i++) {
    let numsrand = Math.floor(Math.random() * nums.length);
    color += nums[numsrand];
  }
  return '#' + color;
};

const HexaColors = () => {
  const [hexMap, setHexMap] = useState([]);

  useEffect(() => {
    const generateHexColors = () => {
      const hexFuncArr = [];
      for (let i = 1; i <= 6; i++) {
        hexFuncArr.push(colorFunction());
      }
      return hexFuncArr.map((num) => (
        <p key={num} style={{ backgroundColor: num }}>{num}</p>
      ));
    };

    setHexMap(generateHexColors());
  }, []);

  return (
    <div className="bg-blue-400 m-[10px] p-[23px] rounded-[12px] shadow-md text-center text-[30px] text-black">
      {hexMap}
    </div>
  );
};

export default HexaColors;
