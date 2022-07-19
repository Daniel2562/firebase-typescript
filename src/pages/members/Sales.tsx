import React from 'react'
import Iframe from 'react-iframe'
import { Helmet } from 'react-helmet-async'
import Box from '@mui/material/Box'

const Sales = React.memo(() => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Helmet>
        <title>Sales & Orders</title>
      </Helmet>
      <Box sx={{ height: 'calc(100vh - 70px)' }}>
        <Iframe
          url="https://datastudio.google.com/embed/reporting/0fe2e816-a64b-46a6-b295-3259a6aa31b6/page/FNhwC"
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

export default Sales
