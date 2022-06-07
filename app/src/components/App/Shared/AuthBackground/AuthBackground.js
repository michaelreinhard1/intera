import React from 'react'
import './AuthBackground.scss';

const AuthBackground = ({children}) => {
  return (
    <div className="AuthBackground">
        <div className="AuthBackground__BackgroundColor"></div>
            {children}
    </div>
  )
}

export default AuthBackground