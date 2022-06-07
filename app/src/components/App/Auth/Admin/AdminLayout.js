import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminHeader from '../../Shared/Header/AdminHeader';


const AdminLayout = () => {

  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  )
}

export default AdminLayout