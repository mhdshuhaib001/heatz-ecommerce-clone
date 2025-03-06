import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "../SectionHeader";

const VideoSlider = ({ videos, title, description }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.5;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full bg-black py-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeader title={title} description={description} />
      </div>

      <div className="relative flex items-center w-full">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="absolute left-2 sm:left-4 z-10 p-2 rounded-full shadow-md bg-gray-800/50 hover:bg-gray-700"
          onClick={() => scroll("left")}
        >
          <ChevronLeft size={24} className="text-white" />
        </motion.button>

        <div className="relative w-full overflow-hidden">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto px-4 sm:px-6 scrollbar-hide snap-x scroll-smooth gap-2 sm:gap-3"
          >
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="w-[38vh] h-[60vh] snap-center shadow-lg transition-all duration-300 flex-shrink-0"
              >
                <div className="bg-gray-800 w-full h-full flex items-center justify-center overflow-hidden">
                  <video
                    src={video}
                    muted
                    loop
                    autoPlay
                      loading="lazy"
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="absolute right-2 sm:right-4 z-10 p-2 rounded-full shadow-md bg-gray-800/50 hover:bg-gray-700"
          onClick={() => scroll("right")}
        >
          <ChevronRight size={24} className="text-white" />
        </motion.button>
      </div>
    </div>
  );
};

export default VideoSlider;