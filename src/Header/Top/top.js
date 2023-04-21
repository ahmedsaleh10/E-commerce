import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';


function Top() {
    return (
        <Box  sx={{height: 48,backgroundColor: 'black',color:'#FAFAFA' }} >
            <Stack direction="row" >
                <Typography mt={1.2} ml={43}  fontWeight={400} fontSize={14} variant="subtitle1" gutterBottom>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                </Typography>

                <Typography mt={1.2} ml={1} fontWeight={600} fontSize={14} variant="subtitle1" gutterBottom>
                    ShopNow
                </Typography>

                <Typography mt={1.2} ml={23} fontWeight={400} fontSize={14} variant="subtitle1" gutterBottom>
                    English
                </Typography>

                <IconButton mt={1.2} ml={0.5} sx={{color:'#FAFAFA'}}>
                    <KeyboardArrowDownIcon />
                    </IconButton>


            </Stack>
             
        </Box>
       
    )
}

export default Top
