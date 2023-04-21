import React from 'react'
import { Box, Typography } from '@mui/material'

const Subheader = ({title}) => {
  return (
    <Box sx={{display:'flex', alignItems:'center'}}>

        <Box sx={{backgroundColor: '#DB4444', borderRadius: '4px', display: 'inline-block', height: '40px', width: '20px'}}/>
        <Typography children={title} variant='span' sx={{fontFamily:'Poppins', fontWeight:'600',fontSize:'1rem',lineHeight: '20px' ,color: '#DB4444', marginLeft: '1em'}}/>

    </Box>
    
  )
}

export default Subheader