import React from "react";
import Header from "../components/Header/header";
import ProductDetails from "../components/Productdetails/ProductDetails";
import Footer from "../components/footer/Footer";
import data from "../data"
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
const ProductDetailsPage = () => {
  const { productId } = useParams();
  return (
    <>
      <ProductDetails id={productId} key={productId} />
    </>
  );
  
};

export default ProductDetailsPage;
