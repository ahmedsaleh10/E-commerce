import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import './style.css'
function NavBar() {
  return (
    <Box sx={{ borderBottom: "1px solid rgba(0, 0, 0, .3)",}}>
         <Box
      margin={"0rem 8.4375rem"}
      sx={{paddingTop:'3rem',paddingBottom:'1rem' }}
    >
      <Stack direction={"row"} justifyContent={'space-between'}>
        <Typography
          fontSize={24}
          fontWeight={700}
          fontFamily={"Inter"}
          gutterBottom
        >
          Exclusive
        </Typography>

        <Stack ml={18} direction={"row"}>
          <Button
            sx={{ color: "black", pr: "35px", fontFamily: "Poppins" }}
            variant="text"
            size="small"
          >
            Home
          </Button>
          <Button
            sx={{ color: "black", pr: "35px", fontFamily: "Poppins" }}
            variant="text"
            size="small"
          >
            Contact
          </Button>
          <Button
            sx={{ color: "black", pr: "35px", fontFamily: "Poppins" }}
            variant="text"
            size="small"
          >
            About
          </Button>
          <Button
            sx={{ color: "black", pr: "35px", fontFamily: "Poppins" }}
            variant="text"
            size="small"
          >
            Sign Up
          </Button>
        </Stack>
        
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
                backgroundColor:'#F5F5F5'
            }}
          >
            <Typography
              py={0.8}
              pl={"20px"}
              fontSize={"0.8rem"}
              fontFamily={"Poppins"}
            >
              What are you looking for?
            </Typography>

            <IconButton aria-label="delete">
              <SearchIcon sx={{ padding: "0px", paddingRight: "10px" }} />
            </IconButton>
          </Stack>
        

       <Box>
            <IconButton sx={{ ml: "15px" }}>
            <FavoriteBorderIcon />
            </IconButton>

            <IconButton sx={{ ml: "3px",pr:'0px' }}>
            <ShoppingCartIcon />
            </IconButton>
       </Box>
      </Stack>
    </Box>
    </Box>
   
  );
}

export default NavBar;
