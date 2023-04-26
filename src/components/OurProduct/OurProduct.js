import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import './styles.css'
import { Grid, Navigation } from "swiper";
import { Box, Stack,Button } from "@mui/material";
import Subheader from "../SubHeader/Subheader";
import Sectionheader from "../SectionHeader/Sectionheader";
import ProductCard from "../ProductCard";
import data from "../../data";
import { SwiperNavButtons } from "./SwiperButtons";

const OurProduct = () => {
  return (
    <Box ml={16.875} mb={17.5} mr={13.125} overflow={'hidden'}>
      <Subheader title={"Our Products"} />
      <Sectionheader title={"Explore Our Products"} />
      <Swiper
        slidesPerView={4}
        loop={true}
        grid={{
          rows: 2,
          
        }}
        navigation={false}
        
        modules={[Grid, Navigation]}
        className="mySwiper"
      >
        <Stack flexDirection={'row'} rowGap={5}>
            {
                data.map((product,index)=>{
                    return(
                        
                        <SwiperSlide key={index}>
                        <ProductCard  product={data[index]} options={true&& index>=10}  />
                        </SwiperSlide> 
                        
                    )
                })
            }
       
        </Stack>
        <SwiperNavButtons/>
      </Swiper>
      <Box textAlign={'center'} >
        <Button sx={{backgroundColor:'#DB4444', padding:'1rem 3rem', color:'white', fontFamily:'Poppins',textTransform:'none',"&:hover":{backgroundColor:'#DB4444',color:'white'}}}>View All Products </Button>
      </Box>
    </Box>
  );
};

export default OurProduct;
