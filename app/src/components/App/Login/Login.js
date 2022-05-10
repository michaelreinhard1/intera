import React from 'react'
import './Login.scss';
import Input from '../../Design/Input/Input';
import Button from '../../Design/Button/Button';
import useMutation from '../../../core/hooks/useMutation';
import { useState } from "react";
import Container from '../../Design/Container/Container';
import Logo from  '../../../assets/icons/Logo.svg';
import Icon from  '../../../assets/icons/Icon.svg';
import Error from '../../Design/Error/Error';
import {Link} from 'react-router-dom';

const Login = ({ onLogin }) => {

  const { isLoading, error, mutate } = useMutation();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      data,
      onSuccess: (data) => {
        onLogin(data);
      },
    });
  };

  return (

    <div className="Login">
      <div className="Login__BackgroundColor"></div>
          <Container className={"h-screen overflow-hidden flex items-center justify-center sm:w-full"}>
          <div className="relative bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl rounded-xl">
            <div className="bg-white absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-6">
              <img className='Logo' src={Icon} alt="Logo"/>
            </div>
            <form onSubmit={handleSubmit} className="p-12 pt-20 md:p-18 rounded-xl flex flex-col">
              <div className="flex items-center text-lg mb-6 md:mb-8">
                <div className='w-full'>
                  <label htmlFor="email" className='w-full'>Email</label>
                  <Input className="border mt-3 rounded-lg pl-6 md:py-2 focus:outline-none w-full"  placeholder='Email' name="email" value={data.email} onChange={handleChange} />
                </div>
              </div>
              <div className="flex items-center text-lg mb-6">
                <div className='w-full'>
                  <label htmlFor="password" className='w-full'>Pasword</label>
                  <Input className="border mt-3 rounded-lg pl-6 md:py-2 focus:outline-none w-full"  placeholder='Password' name="password" value={data.password} onChange={handleChange} />
                  <Link className='my-5 px-2 inline-block text-sm text-blue-600 no-underline hover:underline' to={'/forgot-password'}>
                    Forgot password?
                  </Link>
                </div>
              </div>
              <Button className="w-2/4 m-auto lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition duration-200" type="submit" disabled={isLoading}>
                Login
              </Button>
            </form>
          </div>
          </Container>
        </div>


  
  )
}

export default Login