import React from "react";
import Header from "../Header/header";
import { Container } from "@mui/material";
import SliderSection from "../components/SliderSection/SliderSection";
import Footer from "../components/Footer/Footer";
import NewArrival from "../components/NewArrival/NewArrival";
import Category from "../components/Categories";
import Music from "../components/Music/Music";

const HomePage = () => {
  return (
    <>
      <Header />
      <SliderSection />
      <Category />
      <Music />
      <NewArrival />
      <Footer />
    </>
  );
};

export default HomePage;
