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
      <div className="lg:flex items-center w-full font-inter">
        <div className="">
          <ul className="md:border-r lg:w-56 w-full lg:block grid grid-cols-3 place-items-start  ">
            {categories.map((category, index) => (
              <li
                className="max-w-lg md:text-base md:mt-4 text-xs font-[500] m-2  rounded-md "
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
