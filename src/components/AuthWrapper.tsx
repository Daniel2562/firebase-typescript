import React from 'react'
import { Box, Grid, Card, CardContent } from '@mui/material'
import AuthBackground from '../assets/AuthBackground'

export const AuthWrapper = React.memo(
  ({ children }: { children: React.ReactNode }) => {
    return (
      <Box sx={{ height: '100vh' }}>
        <AuthBackground />
        <Grid
          container
          direction="column"
          justifyContent="flex-center"
          sx={{
            height: '100vh'
          }}
        >
          <Grid item xs={12}>
            <Grid
              item
              xs={12}
              container
              justifyContent="center"
              alignItems="center"
              sx={{
                minHeight: {
                  xs: 'calc(100vh - 134px)',
                  md: 'calc(100vh - 112px)'
                }
              }}
            >
              <Grid item>
                <Card
                  sx={{
                    maxWidth: { xs: 400, lg: 475 },
                    margin: { xs: 2.5, md: 3 },
                    '& > *': {
                      flexGrow: 1,
                      flexBasis: '50%'
                    }
                  }}
                >
                  <CardContent sx={{ padding: 4 }}>{children}</CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    )
  }
)
