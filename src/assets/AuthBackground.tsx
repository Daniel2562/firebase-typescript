import { Box, CardMedia } from '@mui/material'
import Icon from './images/Loop_DarkBlueBG.png'

const AuthBackground = () => {
  return (
    <Box
      sx={{ position: 'absolute', filter: 'blur(18px)', zIndex: -1, bottom: 0 }}
    >
      <CardMedia
        component="img"
        image={Icon}
        sx={{ width: '100vh', marginLeft: -30 }}
      />
    </Box>
  )
}

export default AuthBackground
