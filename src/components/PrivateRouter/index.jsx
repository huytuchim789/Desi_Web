import React from 'react'

import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './authStore'

const PrivateRouter = ({ children }) => {
  const location = useLocation()
  const { auth, setAuth } = useAuth((state) => state)
  return (
    <>
      {auth ? (
        location.pathname === '/login' ? (
          <Navigate to="/" />
        ) : (
          children
        )
      ) : (
        <Navigate to="/login" />
      )}
    </>
  )
}

export default PrivateRouter
