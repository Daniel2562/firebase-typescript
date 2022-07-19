import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import AuthContextProvider from './context/AuthContext'
import Router from './routes/Routes'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import ThemeProvider from './theme/ThemeProvider'

const App = React.memo(() => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <HelmetProvider>
        <BrowserRouter>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <AuthContextProvider>
              <Router />
            </AuthContextProvider>
          </LocalizationProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  )
})

export default App
