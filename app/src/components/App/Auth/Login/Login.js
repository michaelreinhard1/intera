import React from 'react'
import './Login.scss';
import Input from '../../../Design/Input/Input';
import Button from '../../../Design/Button/Button';
import useMutation from '../../../../core/hooks/useMutation';
import { useState } from "react";
import Container from '../../../Design/Container/Container';
import Logo from  '../../../../assets/icons/Logo.svg';
import Icon from  '../../../../assets/icons/Icon.svg';
import Error from '../../../Design/Alerts/Error';
import {Link, Navigate, useLocation } from 'react-router-dom';
import AuthBackground from '../../AuthBackground/AuthBackground';
import { useAuthContext } from '../../Auth/AuthProvider';

const Login = () => {

  const { login } = useAuthContext();

  const [data, setData] = useState({
      email: "",
      password: "",
  });

  const handleChange = (e) => {
      setData({
          ...data,
          [e.target.name]: e.target.value,
      });
  };

  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      data,
      onSuccess: (data) => {
              login(data);
            },
          });
  };

  return (

          <Container className={"h-screen overflow-hidden flex items-center justify-center"}>
          <div className="relative bg-white shadow-3xl rounded-xl sm:w-6/12  md:w-6/12 lg:w-6/12 xl:w-8/12 2xl:w-4/12">
            <div className="bg-white absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4">
              <img className='Logo' src={Icon} alt="Logo"/>
            </div>
            <h1 className='text-center font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600 py-20 pb-8'>Login</h1>
            <form onSubmit={handleSubmit} className="p-12 pt-0 md:p-18 rounded-xl flex flex-col">
              <div className="flex items-center text-lg mb-6 md:mb-8">
                <div className='w-full'>
                  <label htmlFor="email" className='w-full'>Email</label>
                  <Input type='email' className="border mt-3 rounded-lg pl-6 md:py-2 focus:outline-none w-full"  placeholder='Email' name="email" value={data.email} onChange={handleChange} />
                </div>
              </div>
              <div className="flex items-center text-lg">
                <div className='w-full'>
                  <label htmlFor="password" className='w-full'>Pasword</label>
                  <Input className="border mt-3 rounded-lg pl-6 md:py-2 focus:outline-none w-full" type={'password'} placeholder='Password' name="password" value={data.password} onChange={handleChange} />
                  <div className="flex justify-end">
                    <Link className='my-5 px-2 inline-block text-sm text-blue-600 no-underline' to={'/forgot-password'}>
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </div>
              {error && <Error message={error} />}
              <Button className={isLoading ? 'w-2/4 m-auto lg:inline-block py-2 px-6 bg-blue-500 text-white font-medium rounded-xl transition duration-200' : 'w-2/4 m-auto lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition duration-200'} type="submit" disabled={isLoading}>
                {/* If isloading is true  */}
                {isLoading ? 
                  <svg role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                : null}
                  Login
              </Button>

              <Link className='flex self-center gap-x-2 mt-5 px-2 inline-block text-sm  no-underline' to={'/account/register'}>
                      Don't have an account yet?<span className='text-blue-600'>Register here</span>
              </Link>
            </form>
          </div>
          </Container>
  )
}

export default Login