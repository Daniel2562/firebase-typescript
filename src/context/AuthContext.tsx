import React from 'react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth, fetchRole } from '../services/firebase'
import { User } from '../types/user'

interface AuthContextInterface {
  loading: boolean
  currentUser?: User
  logout: () => void
}

const initialState = {} as AuthContextInterface

const AuthContext = createContext<AuthContextInterface>(initialState)

export const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const role = await fetchRole(currentUser.uid)
        setCurrentUser({
          displayName: currentUser.displayName,
          email: currentUser.email,
          emailVerified: currentUser.emailVerified,
          isAnonymous: currentUser.isAnonymous,
          photoURL: currentUser.photoURL,
          uid: currentUser.uid,
          role
        })
      } else {
        setCurrentUser(undefined)
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const logout = React.useCallback(async () => {
    setCurrentUser(undefined)
    await signOut(auth)
  }, [])

  const contextValue = useMemo(
    () => ({ currentUser, loading, logout }),
    [currentUser, loading, logout]
  )

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider
