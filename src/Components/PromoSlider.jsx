import React from "react";

function PromoSlider() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-12 pt-12 pb-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold leading-tight">
              Boost up your
              <br />  
              Gaming experience.
            </h1>
          </div>
          <div className="md:w-1/3 mt-4 md:mt-0">
            <p className="text-sm text-gray-400">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer
            </p>
          </div>
        </div>

        <div className="relative mt-4">
          <div className="relative h-[500px] w-full overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url('/PromoProduct/PromoSlider.jpeg')`
              }}
            >
              <div className="text-center text-white">
                <h2 className="text-5xl font-bold mb-6">
                  Boost up your <br /> Audio experience.
                </h2>
                <button className="bg-transparent border border-white text-white px-8 py-2 rounded-full hover:bg-white/10 transition">
                  Learn more
                </button>
              </div>
            </div>

            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
          <div className="absolute bottom-4 left-1/3 -translate-x-1/2 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoSlider;
