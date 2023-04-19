import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box, Typography } from '@mui/material';

const RoadMap = ({name}) => {
  return (
    <Box>
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/"  sx={{fontFamily:'Poppins',fontSize:'14'}}>  Account </Link>
      <Link  underline="hover"   color="inherit" href='#'  sx={{fontFamily:'Poppins',fontSize:'14'}} >  Gamings  </Link>
      <Typography children={name} variant='span' color={"black"}  sx={{fontFamily:'Poppins',fontSize:'14'}}/>
    </Breadcrumbs>
  </Box>
  )
}

export default RoadMap