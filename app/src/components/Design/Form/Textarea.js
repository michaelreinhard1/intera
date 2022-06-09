import React from 'react'
import PropTypes from "prop-types";

const Textarea = ({name, value, onChange, disabled, placeholder, error}) => {
  return (
      <>
    <textarea
    className="border mt-3 rounded-lg pl-6 md:py-2 focus:outline-none w-full"
    id={name}
    name={name}
    value={value}
    onChange={onChange}
    disabled={disabled}
    placeholder={placeholder}
    />
    {error && <div className="text-red-500">{error}</div>}
    </>
  )
}

// PropTypes
Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

export default Textarea