import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

function ProtectedAdmin() {
  const {isLogged} = useContext(AuthContext);
  return (
    <>
      {
        isLogged ?
        <Outlet /> :
        <Navigate to="/" />
      }
    </>
  )
}

export default ProtectedAdmin