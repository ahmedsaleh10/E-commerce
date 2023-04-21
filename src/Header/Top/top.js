import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';


function Top() {
    return (

        <Box sx={{backgroundColor:'black'}} >
            <Box mr={'8.4375rem'} sx={{height: 48,color:'#FAFAFA' }} >
            <Stack direction="row" justifyContent={'flex-end'} >
                <Typography mt={1.2} ml={43}  fontWeight={400} fontSize={14} variant="span" >
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                </Typography>

                <Typography mt={1.2} ml={1} fontWeight={600} fontSize={14} variant="span" >
                    ShopNow
                </Typography>

                <Typography mt={1.2} ml={30} fontWeight={400} fontSize={14} variant="span" >
                    English
                </Typography>

                <IconButton mt={1.2} ml={0.5}  sx={{color:'#FAFAFA',paddingRight:'0px'}}>
                    <KeyboardArrowDownIcon  />
                    </IconButton>
            </Stack>
             
        </Box>
        </Box>
        
       
    )
}

export default Top
