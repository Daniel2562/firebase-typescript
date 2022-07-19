import { Button, Container, Grid, Typography } from '@mui/material'

import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
)

function Hero() {
  const navigate = useNavigate()

  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            You've been successfully added to the waitlist.
          </TypographyH1>
          <Button
            size="large"
            variant="contained"
            onClick={() => navigate('/schedule')}
          >
            Book a demo for early access
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hero
