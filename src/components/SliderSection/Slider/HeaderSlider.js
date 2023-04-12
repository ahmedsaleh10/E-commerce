import React from 'react'
import SliderContent from './SliderContent/SliderContent'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from '@mui/material';
import './HeaderSlider.css'
const HeaderSlider = () => {

  const settings = {
    dotsClass:"slick-dots custom-dots",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    
    return (
      <Box style={{width:'76.3%', height:'fit-content'}}>
          <Slider {...settings} >
            
            <SliderContent type={'iPhone 14 Series'} header={'Up to 10% off Voucher'}/> 
            <SliderContent type={'iPhone 14 Series'} header={'Up to 10% off Voucher'}/>
            <SliderContent type={'iPhone 14 Series'} header={'Up to 10% off Voucher'}/>
            <SliderContent type={'iPhone 14 Series'} header={'Up to 10% off Voucher'}/>
            <SliderContent type={'iPhone 14 Series'} header={'Up to 10% off Voucher'}/>            
          </Slider>
        </Box>
      );
  
}

export default HeaderSlider