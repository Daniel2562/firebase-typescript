import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '@mui/material'
import { PropsWithChildren } from 'react'
import ReactLoading from 'react-loading'

const useStyles = makeStyles((theme: Theme) => ({
  fullScreen: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: 1000000,
    height: '100vh',
    width: '100vw',
    background: 'rgba(0,0,0,0.25)',
    left: 0,
    top: 0
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: 1000000,
    height: '100%',
    width: '100%',
    background: 'rgba(0,0,0,0.25)',
    left: 0,
    top: 0
  }
}))

interface LoadingProps {
  isSuspenseFallback?: boolean
  loadingMessage?: string
}

export default function Loading(props: PropsWithChildren<LoadingProps>) {
  const classes = useStyles()
  return (
    <>
      <div
        className={
          props.isSuspenseFallback ? classes.fullScreen : classes.container
        }
      >
        <ReactLoading type="spin" color="#3D55DB" height={50} width={50} />
      </div>
      {props.children}
    </>
  )
}
