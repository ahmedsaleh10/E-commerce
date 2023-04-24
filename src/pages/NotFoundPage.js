import React from "react";
import Header from "../components/Header/header";
import NotFound from "../components/Error404";
import Footer from "../components/footer/Footer";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <NotFound />
      <Footer />
    </>
  );
};

export default NotFoundPage;
