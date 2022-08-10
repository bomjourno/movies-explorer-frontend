import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute() {
  const { isAuthorized } = useSelector((state) => state.users);

  return isAuthorized ? <Outlet /> : <Navigate to='/' />;
}

export default ProtectedRoute;
