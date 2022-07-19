import React, { Suspense, lazy } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

const Login = lazy(() => import('../pages/public/Login'))

const PublicRouter = React.memo(() => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  )
})

export default PublicRouter
