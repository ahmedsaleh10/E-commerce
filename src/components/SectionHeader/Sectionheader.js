import React from 'react'
import { Box } from '@mui/material'


const Sectionheader = ({title}) => {
  return (
    <Box sx={{
      fontFamily: 'Inter, sans-serif',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '2.25rem',
      letterSpacing:' 0.04em',
      marginTop: '20px',
      marginBottom: '60px',
      display:'inline-flex'
    }}
    >{title}</Box>
  )
}

export default Sectionheader