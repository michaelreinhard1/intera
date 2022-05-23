import { DotPulse } from '@uiball/loaders';
import React from 'react';
import './LoadingIndicator.css';

const LoadingIndicator = () => {
  return (
    <div className="z-50 absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2">
      <DotPulse size={50} color="#231F20" />
    </div>

  );
};

export default LoadingIndicator