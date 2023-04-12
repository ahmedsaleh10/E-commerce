import { Box, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';

const SliderContent = ({type,header,linkto}) => {

  return (
    <Stack flexDirection={"row"} sx={ {height:'auto'}} >
        <Box sx={{backgroundColor:'black' ,paddingLeft:'4em'}}>

            <Stack flexDirection={'row'} alignItems={'center'} sx={{paddingTop:'1.2em'}}>
                <AppleIcon sx={{color:'white' ,fontSize:'50px'}} />
                <Typography bool='true' children={type} sx={{fontSize:'1rem', fontFamily:'Poppins',lineHeight:'1.5em', color:'#FAFAFA', paddingBottom:'2.125em', paddingTop:'2.5em'}}/>
            </Stack>
           
            <Typography bool='true' children={header} sx={{fontSize:'3rem', fontFamily:'Inter',lineHeight:'1.25em'  , color:'#FAFAFA', fontWeight:'600', paddingBottom:'0.45em',display:'inline-block',width:'88%' }}/>
            <Link href={linkto} sx={{color:'#FAFAFA',fontFamily:'Poppins', borderBottom:'1px solid #FAFAFA', display:'inline-block'}}> Shop now </Link>
        </Box>
        <Box sx={{backgroundColor:'black'}}>
            <img src='./images/iphone.jpg' height={'100%'}/>
        </Box>
    </Stack>
  )
}

export default SliderContent