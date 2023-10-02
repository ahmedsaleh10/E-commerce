import React from "react";
import Header from "../components/Header/header";
import SliderSection from "../components/SliderSection/SliderSection";
import NewArrival from "../components/NewArrival/NewArrival";
import Music from "../components/Music/Music";
import Footer from "../components/footer/Footer";
import FlashSales from "../components/FlashSales/FlashSales"
import OurProduct from "../components/OurProduct/OurProduct"
import Features from "../components/Features/Features"
import Category from '../components/categories/index';
import BestSales from "../components/BestSales/BestSales";

const HomePage = () => {
  return (
    <>
      <SliderSection />
      <FlashSales/>
      <Category />
      <BestSales/>
      <Music />
      <OurProduct/>
      <NewArrival />
      <Features/>
    </>
  );
};

export default HomePage;
