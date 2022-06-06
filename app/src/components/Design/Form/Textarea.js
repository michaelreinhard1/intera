import React from 'react'

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

export default Textarea