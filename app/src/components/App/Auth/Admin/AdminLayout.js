import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../AuthContainer';
import AdminHeader from '../../Header/AdminHeader';


const AdminLayout = () => {

  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  )
}

export default AdminLayout