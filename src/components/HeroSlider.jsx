// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Apple_logo from "../assets/Apple-01.jpg";
import iphoneImage from "../assets/iphone14-rbg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ImageSlider.css";

const heroInfo = [
  {
    src: Apple_logo,
    logoText: "iphone 14 Series",
    mainText: "Up to 10% off Voucher",
    linkText: "Shop Now (1st SLIDE)",
    heroImage: iphoneImage,
  },
  {
    src: Apple_logo,
    logoText: "iphone 14 Series",
    mainText: "Up to 10% off Voucher",
    linkText: "what's the delay (2nd SLIDE)",
    heroImage: iphoneImage,
  },
  {
    src: Apple_logo,
    logoText: "iphone 14 Series",
    mainText: "Up to 10% off Voucher",
    linkText: "Hurry up (3rd SLIDE)",
    heroImage: iphoneImage,
  },
];
const HeroSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 0,
    slidesToScroll: 1,
  };
  // const settings = {
  //   dots: true,
  // };
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex(currentIndex + 1);
  const previous = () => setCurrentIndex(currentIndex - 1);

  return (
    <>
      {/* <div className="image-slider-container">
        <Slider {...settings}>
          {heroInfo.map((info, index) => (
            <img src={info.heroImage} key={index} />
          ))}
        </Slider>
      </div> */}

      <div className="flex justify-center items-center overflow-x-auto relative group font-inter mt-14">
        {heroInfo.map((info, index) => (
          <div
            key={index}
            className={`flex sm:flex-row flex-col justify-center items-center bg-black text-white md:w-[900px] w-full h-max md:p-5 p-2 md:m-10 m-3 duration-500  ${
              index === currentIndex ? "flex" : "hidden"
            }`}
          >
            {/* PRODUCT AND DISCOUNT INFO */}
            <div className="flex flex-wrap md:items-center gap-6 w-2/5">
              {/* Apple Logo and name */}
              <div className="md:flex block gap-3 items-center text-lg md:text-base text-center">
                <div className="md:w-[59px] md:h-[59px]">
                  <img
                    src={Apple_logo}
                    alt="Apple Logo"
                    className="h-full w-full "
                  />
                </div>
                <span className="">{info.logoText}</span>
              </div>

              {/* Discount/Voucher offer text */}
              <span className="lg:text-5xl sm:text-2xl md:text-base font-semibold md:w-[294px] w-full">
                {info.mainText}
              </span>

              {/* Shop now link */}
              <div className="flex flex-row items-center gap-4 md:text-base text-xs text-center">
                <p className="underline">{info.linkText}</p>
                <FaArrowRightLong className="h-8" />
              </div>
            </div>

            {/* PRODUCT IMAGE */}
            <div>
              {/* Image */}
              <div className="w-full m-auto">
                {/* <div className="w-3/4 m-auto"> */}
                <img src={iphoneImage} className="w-full" />
              </div>

              {/* Navigation icons for sliding to the next page */}
              <div
                className="hidden group-hover:block absolute top-52 left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
                // onClick={previous}
              >
                <BsChevronCompactLeft size={30} />
              </div>
              <div
                className="hidden group-hover:block absolute top-52 right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
                // onClick={next}
              >
                <BsChevronCompactRight size={30} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSlider;
