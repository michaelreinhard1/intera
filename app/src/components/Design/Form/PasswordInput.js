import {useState} from 'react'
import * as MaterialDesign from "react-icons/md";
import PropTypes from "prop-types";

const PasswordInput = ({onChange, value, error}) => {
    const [isVisable, setIsVisable] = useState(false)

    const handleClick = () => {
        setIsVisable(!isVisable)
    }

  return (
    <>
    <div className="flex relative mt-3 ">
        <input type={isVisable ? 'text' : 'password' } required className='border rounded-lg pl-6 md:py-2 py-3 focus:outline-none w-full' placeholder='Password' name="password" value={value} onChange={onChange} />
        <button type='button' className={'absolute top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2 '} onClick={handleClick}>
          {
            isVisable ? <MaterialDesign.MdVisibilityOff /> :  <MaterialDesign.MdVisibility />
          }
        </button>
    </div>
    {error && <div className="text-red-500">{error}</div>}
    </>
  )
}

// PropTypes
PasswordInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default PasswordInput