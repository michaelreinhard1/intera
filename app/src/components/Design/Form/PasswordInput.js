import {useState} from 'react'
import * as MaterialDesign from "react-icons/md";

const PasswordInput = ({onChange, value}) => {
    const [isVisable, setIsVisable] = useState(false)

    const handleClick = () => {
        setIsVisable(!isVisable)
    }

  return (
    <div className="flex relative mt-3 ">
        <input type={isVisable ? 'text' : 'password' } required className='border rounded-lg pl-6 md:py-2 focus:outline-none w-full' placeholder='Password' name="password" value={value} onChange={onChange} />
        <button type='button' className={'absolute top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2 '} onClick={handleClick}>
          {
            isVisable ? <MaterialDesign.MdVisibilityOff /> :  <MaterialDesign.MdVisibility />
          }
        </button>
    </div>
  )
}

export default PasswordInput