import React from 'react'
import Iframe from 'react-iframe'
import { Helmet } from 'react-helmet-async'
import Box from '@mui/material/Box'

const Manager = React.memo(() => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Helmet>
        <title>Manage</title>
      </Helmet>
      <Box sx={{ height: 'calc(100vh - 70px)' }}>
        <Iframe
          url="https://airtable.com/shro8PepwpUJHoKRU/tblphyAO7TEBERDwT"
          width="100%"
          height="100%"
          id="sales"
          position="relative"
          allowFullScreen={true}
          className="iframe"
        />
      </Box>
    </Box>
  )
})

export default Manager
