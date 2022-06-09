import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

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
// PropTypes
Banner.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  link: PropTypes.object,
};
export default Banner