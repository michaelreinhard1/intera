import React from 'react'

const Form = ({children, onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className="pt-0  rounded-xl flex flex-col">
      {children}
    </form>
)
}

export default Form