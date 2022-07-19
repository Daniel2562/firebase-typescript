import React from 'react'
import {
  Divider,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword
} from 'firebase/auth'
import * as Yup from 'yup'
import { Formik } from 'formik'

import { FirebaseSocial } from '../components/FirebaseSocial'
import { app } from '../services/firebase'

const provider = new GoogleAuthProvider()
const authentication = getAuth(app)

export const LoginForm = React.memo(() => {
  const [showPassword, setShowPassword] = React.useState(false)

  const toggleShowPassword = React.useCallback(() => {
    setShowPassword(!showPassword)
  }, [showPassword])

  const handleGoogleProvider = React.useCallback(
    (setErrors: any, setStatus: any) => {
      signInWithPopup(authentication, provider)
        .then(() => {
          setStatus({ success: false })
        })
        .catch((error) => {
          setErrors({ submit: error.message })
        })
    },
    []
  )

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          signInWithEmailAndPassword(
            authentication,
            values.email,
            values.password
          )
            .then(() => {
              setStatus({ success: false })
              setSubmitting(false)
            })
            .catch((error) => {
              setStatus({ success: false })
              setErrors({ submit: error.message })
              setSubmitting(false)
            })
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
          setErrors,
          setStatus
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-login">Email Address</InputLabel>
                  <OutlinedInput
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-email-login"
                    >
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-login">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="-password-login"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={toggleShowPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Enter password"
                  />
                  {touched.password && errors.password && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>
                    {errors.submit as string}
                  </FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <LoadingButton
                  disableElevation
                  loading={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Login
                </LoadingButton>
              </Grid>
              <Grid item xs={12}>
                <Divider>
                  <Typography variant="caption"> Login with</Typography>
                </Divider>
              </Grid>
              <Grid item xs={12}>
                <FirebaseSocial
                  googleHandler={() =>
                    handleGoogleProvider(setErrors, setStatus)
                  }
                />
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  )
})
