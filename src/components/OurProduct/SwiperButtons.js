import React from 'react';
import { useSwiper } from 'swiper/react';
import "./styles.css"
export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button  className="swiper-nav-prev" onClick={() => swiper.slidePrev()}></button>
      <button className="swiper-nav-next" onClick={() => swiper.slideNext()}></button>
    </div>
  );
};