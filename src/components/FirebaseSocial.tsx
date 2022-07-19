import React from 'react'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery, Button, Stack } from '@mui/material'

import Google from '../assets/icons/google.svg'

interface Props {
  googleHandler: () => void
}

export const FirebaseSocial = React.memo(({ googleHandler }: Props) => {
  const theme = useTheme()
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Stack
      direction="row"
      spacing={matchDownSM ? 1 : 2}
      justifyContent={matchDownSM ? 'space-around' : 'space-between'}
      sx={{
        '& .MuiButton-startIcon': {
          mr: matchDownSM ? 0 : 1,
          ml: matchDownSM ? 0 : -0.5
        }
      }}
    >
      <Button
        variant="outlined"
        color="secondary"
        fullWidth={!matchDownSM}
        startIcon={<img src={Google} alt="Google" />}
        onClick={googleHandler}
      >
        {!matchDownSM && 'Google'}
      </Button>
    </Stack>
  )
})
