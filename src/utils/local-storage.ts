const AUTH_TOKEN_KEY = 'auth-token'

export const saveAuthToken = (authToken: string | null) => {
  if (authToken) {
    localStorage.setItem(AUTH_TOKEN_KEY, authToken)
  }
}

export const getAuthToken = (): string => {
  const authToken = localStorage.getItem(AUTH_TOKEN_KEY)

  if (authToken && authToken !== '') return authToken

  return ''
}
