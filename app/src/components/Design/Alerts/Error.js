import React from 'react'
import PropTypes from "prop-types";

const Error = ({message}) => {
  return (
    <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 w-fit mx-auto" role="alert">
      <span className="font-medium">Error!</span> {message}
    </div>
  )
}
// PropTypes
Error.propTypes = {
  message: PropTypes.string,
};

export default Error