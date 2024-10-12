// import React from 'react'

import HeroSlider from "./HeroSlider";

const categories = [
  "Medicine",
  "Electronics",
  "Baby’s & Toys",
  "Woman's Fashion",
  "Men's Fashion",
  "Home & Lifestyle",
  "Groceries & Pets",
  "Health & Beauty",
  "Sports & Outdoor",
];

const Hero = () => {
  return (
    <>
      {/* CATEGORY */}
      <div className=" lg:flex justify-between h-max w-full mt-20 font-inter">
        <div>
          <ul className="md:border-r lg:w-56 w-full pt-6 lg:block grid grid-cols-3 place-items-start  ">
            {categories.map((category, index) => (
              <li
                className="max-w-lg text-center md:text-lg text-xs font-[500] hover:bg-black bg-[#DB4444] px-[5px] py-[6px] m-2 rounded-md text-slate-200"
                key={index}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <HeroSlider />
      </div>
    </>
  );
};

export default Hero;
