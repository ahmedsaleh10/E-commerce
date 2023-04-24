import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import data from "../../data";
import ProductCard from "../ProductCard";
import { Box,Stack, Typography,Button } from "@mui/material";
import Subheader from '../SubHeader/Subheader'
import Sectionheader from '../SectionHeader/Sectionheader'
import TimeSales from './TimeSales/TimeSales'
import './styles.css'
const FlashSales = () => {
  return (
    <Box marginLeft={'8.4375rem'} mb={10} overflow={"hidden"}>
      <Subheader title={'Today’s'}/>  
      <Stack direction={'row'} alignItems={'flex-end'} marginBottom={'30px'} >
        <Box marginRight={'87px'} mt={4}>
            <Typography variant="span" children={'Flash Sales'} fontSize={'2.25rem'} fontFamily={'Inter'} fontWeight={700} />
        </Box>
        
        <TimeSales/>
      </Stack>
      
      <Swiper
        slidesPerView={4.5}
        spaceBetween={30}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((product, index) => {
          return (
            <SwiperSlide>
              <ProductCard
                product={product}
                salePercentage={3 * (index + 1)}
                oldPrice={(product.price *(3*(index+1)/100))+product.price}

              />
            </SwiperSlide>
          );
        })}
        
      </Swiper>
      <Box textAlign={'center'} mb={"60px"}>
        <Button sx={{backgroundColor:'#DB4444', padding:'1rem 3rem', color:'white', fontFamily:'Poppins',textTransform:'none',"&:hover":{backgroundColor:'#DB4444',color:'white'}}}>View All Products </Button>
      </Box>
      <Box mr={'8.4375rem'}>
        <hr/>
      </Box>
    </Box>
  );
};

export default FlashSales;
