import { Box } from '@mui/material'
import React from 'react'
import Iframe from 'react-iframe'
import { Helmet } from 'react-helmet-async'

const Schedule = React.memo(() => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Helmet>
        <title>Schedule</title>
      </Helmet>
      <Iframe
        url="https://usemotion.com/meet/anand/loop"
        width="100%"
        height="100%"
        id="schedule"
        position="relative"
        allowFullScreen={true}
      />
    </Box>
  )
})

export default Schedule
