import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({className, title, message, link = {}}) => {
  return (

    <div className={`inline-block rounded-lg w-content bg-blue-100 border border-blue-500 text-blue-700 my-4 px-4 py-3 ${className}`} role="alert">
        <div className="m-auto">
            <p className="font-bold">{title}</p>
            <div className="flex gap-1">
              <p className="text-sm">{message}.</p>
              <Link to={link.href} className="text-sm underline">{link.title}</Link>
            </div>
        </div>
    </div>

  )
}

export default Banner