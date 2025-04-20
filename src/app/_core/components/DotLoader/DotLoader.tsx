// DotLoader.jsx
import React from 'react';
// import './DotLoader.css';

const DotLoader = ({bgColor = "white"}) => {
  return (
    <div className="dot-loader">
      <span style={{backgroundColor:bgColor}}></span>
      <span style={{backgroundColor:bgColor}}></span>
      <span style={{backgroundColor:bgColor}}></span>
    </div>
  );
};

export default DotLoader;
