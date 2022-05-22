import React from 'react'
import Container from '../Container/Container'

const Banner = ({className, message}) => {
  return (

    <div className={`bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 ${className}`} role="alert">
        <div className="w-4/6 m-auto">
            <p className="font-bold">Informational message</p>
            <p className="text-sm">{message}</p>
        </div>
    </div>

  )
}

export default Banner