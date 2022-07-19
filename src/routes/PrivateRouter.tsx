import React, { Suspense, lazy } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Loading from '../components/Loading'
import { useAuth } from '../context/AuthContext'
import { SidebarProvider } from '../context/SidebarContext'
import { Roles } from '../types/user'

const SidebarLayout = lazy(() => import('../layouts'))

const Sales = lazy(() => import('../pages/members/Sales'))
const ErrorReport = lazy(() => import('../pages/members/ErrorReport'))
const Manager = lazy(() => import('../pages/members/Manager'))
const RequestEvent = lazy(() => import('../pages/users/BookDemo'))
const Schedule = lazy(() => import('../pages/users/Schedule'))

interface Props {
  role: Roles
}

const PrivateRouter = React.memo(({ role }: Props) => {
  const { loading } = useAuth()

  if (loading) {
    return <Loading />
  }

  if (role === Roles.USER) {
    return (
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<RequestEvent />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Suspense>
    )
  }

  return (
    <SidebarProvider>
      <Suspense>
        <SidebarLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/sales" />} />
            <Route path="sales" element={<Sales />} />
            <Route path="report" element={<ErrorReport />} />
            <Route path="manage" element={<Manager />} />
            <Route path="*" element={<Navigate to="/sales" />} />
          </Routes>
        </SidebarLayout>
      </Suspense>
    </SidebarProvider>
  )
})

export default PrivateRouter
