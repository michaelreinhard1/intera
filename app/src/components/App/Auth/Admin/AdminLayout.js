import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../AuthContainer';


const Dashboard = () => {

  const { auth } = useAuthContext();

  if (!auth.user.role === "ADMIN") {
    return (
        <Navigate to='/' state={{ replace: true }} />
    );
  }else{
    return (
      <div>Dashboard</div>
    )
  }
}

export default Dashboard