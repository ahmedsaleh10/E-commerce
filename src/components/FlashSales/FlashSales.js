import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import data from "../../data";
import ProductCard from "../ProductCard";
import { Box } from "@mui/material";
import Subheader from '../SubHeader/Subheader'
import Sectionheader from '../SectionHeader/Sectionheader'

const FlashSales = () => {
  return (
    <Box>
      <Subheader title={'Today’s'}/>  
      <Sectionheader title={'Flash Sales'}/>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((product, index) => {
          return (
            <SwiperSlide>
              <ProductCard
                product={product}
                oldPrice={200}
                salePercentage={3 * (index + 1)}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default FlashSales;
