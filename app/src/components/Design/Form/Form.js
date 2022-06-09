import React from 'react'
import PropTypes from "prop-types";

const Form = ({children, onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className="pt-0  rounded-xl flex flex-col">
      {children}
    </form>
)
}

// PropTypes
Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default Form