// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Apple_logo from "../assets/Apple-01.jpg";
import iphoneImage from "../assets/iphone14-rbg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

const heroInfo = [
  {
    src: { Apple_logo },
    logoText: "iphone 14 Series",
    mainText: "Up to 10% off Voucher",
    linkText: "Shop Now",
    heroImage: { iphoneImage },
  },
  {
    src: { Apple_logo },
    logoText: "iphone 14 Series",
    mainText: "Up to 10% off Voucher",
    linkText: "what's the delay",
    heroImage: { iphoneImage },
  },
  {
    src: { Apple_logo },
    logoText: "iphone 14 Series",
    mainText: "Up to 10% off Voucher",
    linkText: "Hurry up",
    heroImage: { iphoneImage },
  },
];
const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex(currentIndex + 1) % heroInfo.length;

  return (
    <div className="flex overflow-x-auto- relative group">
      {heroInfo.map((info, index) => (
        <div
          key={index}
          className={`flex flex-wrap justify-between bg-black text-white w-[940px] h-max py-10 px-20 m-10 duration-500  ${
            index === currentIndex ? "flex" : "hidden"
          }`}
        >
          <div className="flex flex-wrap flex-col gap-10 w-2/5">
            <div className="flex gap-3 items-center text-lg">
              <div className="w-[59px] h-[59px]">
                <img
                  src={Apple_logo}
                  alt="Apple Logo"
                  className="h-full w-full "
                />
              </div>
              <span className="">{info.logoText}</span>
            </div>
            <span className="text-5xl font-bold border border-white  ">
              {info.mainText}
            </span>
            <div className="flex flex-row items-center gap-4">
              <p className="underline">{info.linkText}</p>
              <FaArrowRightLong className="h-8" />
            </div>
          </div>
          <div className="w-1/2 h-full">
            <img src={iphoneImage} />
          </div>
          <div className="hidden group-hover:block absolute top-52 left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft size={30} />
          </div>
          <div
            className="hidden group-hover:block absolute top-52  right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            onClick={next}
          >
            <BsChevronCompactRight size={30} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
