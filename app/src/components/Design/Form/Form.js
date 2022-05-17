import React from 'react'

const Form = ({children, onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className="p-12 pt-0 md:p-18 rounded-xl flex flex-col">
      {{children}}
    </form>
  )
}

export default Form