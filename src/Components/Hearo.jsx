import React from "react";
import ProductNavbar from "./ProductNav";

function Hero() {
  return (
    <div className="relative w-full h-[110vh] flex flex-col justify-end items-center bg-black overflow-hidden">
      <video
        src="/Animation/Hero-Video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-[120vh] object-cover md:object-bottom"
      />

      <div className="absolute bottom-4 w-full z-10">
        <ProductNavbar />
      </div>
    </div>
  );
}

export default Hero;
