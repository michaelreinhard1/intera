import React from 'react'
import Input from '../Input/Input'
import PropTypes from "prop-types";

const FormGroup = ({label, type, name, placeholder, value, onChange}) => {
  return (

      <div className=" text-lg mb-6 md:mb-8">
        <div className='w-full'>
          <label htmlFor="email" className='flex flex-col w-full'>{label}</label>

            {type === 'textarea' ? (
              <textarea
                className="border mt-3 rounded-lg pl-6 md:py-2 focus:outline-none w-full"
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
              />
          ) : (
          <Input type={type} className="border mt-3 rounded-lg pl-6 md:py-2 focus:outline-none w-full"  placeholder={placeholder} name={name} value={value} onChange={onChange} />

          )
}

        </div>
      </div>
  )
}
// PropTypes
FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormGroup