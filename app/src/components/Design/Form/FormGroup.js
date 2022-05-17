import React from 'react'

const FormGroup = ({children}) => {
  return (
    <div className="flex items-center text-lg mb-6 md:mb-8">
    <div className='w-full'>
        {{children}}
    </div>
  </div>
  )
}

export default FormGroup