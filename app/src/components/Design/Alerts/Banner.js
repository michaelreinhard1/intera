import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({className, message, link = {}}) => {
  return (

    <div className={`bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 ${className}`} role="alert">
        <div className="max-w-[1440px] m-auto">
            <p className="font-bold">Informational message</p>
            <div className="flex gap-1">
              <p className="text-sm">{message}</p>
              <Link to={link.href} className="text-sm underline">{link.title}</Link>
            </div>
        </div>
    </div>

  )
}

export default Banner