import React from "react";
import Header from "../components/Header/header";
import SliderSection from "../components/SliderSection/SliderSection";
import NewArrival from "../components/NewArrival/NewArrival";
import Category from "../components/categories/index";
import Music from "../components/Music/Music";
import Footer from "../components/footer/Footer";
import FlashSales from "../components/FlashSales/FlashSales"
import OurProduct from "../components/OurProduct/OurProduct"
import Features from "../components/Features/Features"

const HomePage = () => {
  return (
    <>
      <Header />
      <SliderSection />
      <FlashSales/>
      <Category />
      <Music />
      <OurProduct/>
      <NewArrival />
      <Features/>
      <Footer/>
    </>
  );
};

export default HomePage;
