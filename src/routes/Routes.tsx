import React from 'react'
import Loading from '../components/Loading'
import { useAuth } from '../context/AuthContext'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'

const Router = React.memo(() => {
  const { currentUser, loading } = useAuth()

  if (loading) {
    return <Loading />
  }

  if (!currentUser) {
    return <PublicRouter />
  }

  return <PrivateRouter role={currentUser.role} />
})

export default Router
