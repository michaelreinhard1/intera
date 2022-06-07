import React from 'react'
import { Outlet } from 'react-router-dom';
import AgentHeader from '../../Header/AgentHeader';


const AgentLayout = () => {

  return (
    <>
      <AgentHeader />
      <Outlet />
    </>
  )
}

export default AgentLayout