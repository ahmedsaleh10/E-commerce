import React from "react";
import Header from "../components/Header/header";
import SliderSection from "../components/SliderSection/SliderSection";
import NewArrival from "../components/NewArrival/NewArrival";
import Music from "../components/Music/Music";
import Footer from "../components/Footer/Footer";
import FlashSales from "../components/FlashSales/FlashSales"
import OurProduct from "../components/OurProduct/OurProduct"
import Features from "../components/Features/Features"
import Category from '../components/Categories/index';
import BestSales from "../components/BestSales/BestSales";

const HomePage = () => {
  return (
    <>
      <Header />
      <SliderSection />
      <FlashSales/>
      <Category />
      <BestSales/>
      <Music />
      <OurProduct/>
      <NewArrival />
      <Features/>
      <Footer/>
    </>
  );
};

export default HomePage;
