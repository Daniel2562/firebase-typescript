import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { AuthWrapper } from '../../components/AuthWrapper'
import { LoginForm } from '../../forms/LoginForm'

const Login = React.memo(() => {
  return (
    <AuthWrapper>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography variant="h3">Login</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <LoginForm />
        </Grid>
      </Grid>
    </AuthWrapper>
  )
})

export default Login
