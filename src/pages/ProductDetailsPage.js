import React from "react";
import Header from "../components/Header/header";
import ProductDetails from "../components/Productdetails/ProductDetails";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";
const ProductDetailsPage = () => {
  const { productId } = useParams();
  return (
    <>
      <Header />
      <ProductDetails id={productId} key={productId} />
      <Footer />
    </>
  );
  
};

export default ProductDetailsPage;
