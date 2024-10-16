// import React from "react";
// import speaker from "../assets/speaker.jpg";
import speaker from "../assets/Frame 1350.png";

const MusicExp = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between bg-black text-white mt-8 py-12 px-6 lg:px-12">
      {/* Left Side: Text & Countdown */}
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
        <p className="text-[#00FF66] text-sm">Categories</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          Enhance Your <br className="hidden sm:block" /> Music Experience
        </h1>

        {/* Countdown Timer */}
        <div className="flex justify-center lg:justify-start space-x-4 text-center mt-8">
          <div className="bg-white text-black rounded-full sm:w-20 w-14 sm:h-20 h-14 px-3 py-3 sm:px-4 sm:py-2">
            <p className="text-xs sm:text-xl font-bold">23</p>
            <p className="text-xs sm:text-sm text-center">Hours</p>
          </div>
          <div className="bg-white text-black rounded-full sm:w-20 w-14 sm:h-20 h-14 px-3 py-3 sm:px-4 sm:py-2">
            <p className="text-xs sm:text-xl font-bold">05</p>
            <p className="text-xs sm:text-sm text-center">Days</p>
          </div>
          <div className="bg-white text-black rounded-full sm:w-20 w-14 sm:h-20 h-14 px-3 py-3 sm:px-4 sm:py-2">
            <p className="text-xs sm:text-xl font-bold">59</p>
            <p className="text-xs sm:text-sm text-center">Minutes</p>
          </div>
          <div className="bg-white text-black rounded-full sm:w-20 w-14 sm:h-20 h-14 px-3 py-3 sm:px-4 sm:py-2">
            <p className="text-xs sm:text-xl font-bold">35</p>
            <p className="text-xs sm:text-sm text-center">Seconds</p>
          </div>
        </div>

        {/* Buy Now Button */}
        <button className="mt-6 bg-[#00FF66] hover:bg-green-600 text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded">
          Buy Now!
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="mt-10 lg:mt-0 lg:w-1/2 w-full flex justify-center lg:justify-end">
        <img
          src={speaker} // Update with actual image path
          alt="JBL Speaker"
          className="object-contain w-80 md:w-96 lg:w-full"
        />
      </div>
    </div>
  );
};

export default MusicExp;
