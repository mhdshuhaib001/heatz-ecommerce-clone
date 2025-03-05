import React from "react";
import PropTypes from "prop-types";

function Advertisement({ 
  imageSource = "/PromoProduct/PromoSlider.jpeg", 
  videoSource = "/Animation/Hero-Video.mp4",
  spacing = "py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8",
  className = ""
}) {
  return (
    <div className={`bg-black ${spacing} ${className}`}>
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-4 sm:gap-5 rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 relative overflow-hidden">
          <div className="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] w-full relative">
            <img
              src={imageSource}
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] w-full relative bg-gray-800">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={videoSource} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

Advertisement.propTypes = {
  imageSource: PropTypes.string,
  videoSource: PropTypes.string,
  spacing: PropTypes.string,
  className: PropTypes.string
};

export default Advertisement;