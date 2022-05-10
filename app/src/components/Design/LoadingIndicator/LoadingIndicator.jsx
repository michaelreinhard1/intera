import React from 'react';
import './LoadingIndicator.css';

const LoadingIndicator = () => {
  return (
    <div className="center">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingIndicator