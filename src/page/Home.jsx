import React from "react";
import NavBar from "../Components/NavBar";
import Hearo from "../Components/Hearo";
import PromoSlider from "../Components/PromoSlider";
import Footer from "../Components/Footer";
import ProductShowCase from "../Components/ProductShowCase";
import ProductSlider from "../Components/ProductSlider";

function Home() {
  return (
    <div className="">
      <NavBar />
      <Hearo />
      <PromoSlider />
      <ProductSlider/>
      <ProductShowCase/>
      <Footer />
    </div>
  );
}

export default Home;
