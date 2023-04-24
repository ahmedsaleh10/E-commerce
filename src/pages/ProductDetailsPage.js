import React from "react";
import Header from "../components/Header/header";
import ProductDetails from "../components/Productdetails/ProductDetails";
import Footer from "../components/Footer/Footer";
import data from "../data"
import ProductCard from "../components/ProductCard";
const ProductDetailsPage = () => {

  return (
    <>
      <Header />
      <ProductDetails />
      <Footer />
    </>
  );
  
};

export default ProductDetailsPage;
