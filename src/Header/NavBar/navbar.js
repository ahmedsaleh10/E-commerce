import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import './style.css'
function NavBar() {
    return (
        <Box sx ={{ height:'94',borderBottom:'1px solid rgba(0, 0, 0, .3)' }} >
            <Stack direction={'row'} >
           <Typography ml={17} mt={8} fontSize={24} fontWeight={700}  gutterBottom >
                 Exclusive
            </Typography> 
           
            <Stack height={30} mt={8.5} ml={18} direction={'row'}   >
                <Button    sx={{color:'black' ,pr:'35px'}}  variant="text" size='small'>Home</Button>
                <Button    sx={{color:'black' ,pr:'35px'}} variant="text" size='small'>Contact</Button>
                <Button   sx={{color:'black' ,pr:'35px'}}  variant="text" size='small'>About</Button>
                <Button   sx={{color:'black' ,pr:'35px' }}  variant="text" size='small'>Sign Up</Button>
            </Stack>
            <Box height={38} ml={5}  mt={8} width={243} sx={{backgroundColor:'rgba(245, 245, 245, 1)',color:'grey'}}>
               <Stack direction={'row'}>
                    <Typography  pt={1} pl={1} gutterBottom >
                    What are you looking for?
                    </Typography> 

                    <IconButton  aria-label="delete">
                    <SearchIcon />
                    </IconButton>

                   

                    
               </Stack>
                                
            </Box>

            <IconButton sx={{mt:'55px',ml:'15px'}}>
                    <FavoriteBorderIcon />
                    </IconButton>

                    <IconButton sx={{mt:'55px',ml:'3px'}}>
                    <ShoppingCartIcon />
                    </IconButton>
               
           
           </Stack>
        </Box>
    )
}

export default NavBar


