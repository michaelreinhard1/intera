import React from 'react'
import PropTypes from "prop-types";

const Succes = ({message}) => {
  return (
    <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
        <span className="font-medium">Success!</span> {message}
    </div>

  )
}
// PropTypes
Succes.propTypes = {
  message: PropTypes.string,
};


export default Succes