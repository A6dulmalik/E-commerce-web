// import React from 'react'

import HeroSlider from "./HeroSlider";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const Hero = () => {
  return (
    <>
      {/* CATEGORY */}
      <div className=" lg:flex justify-between h-max w-full ">
        <div>
          <ul className="md:border-r lg:w-56 w-full pt-6 lg:block grid grid-cols-3 place-items-center">
            {categories.map((category, index) => (
              <li className="pt-3 md:text-lg text-sm" key={index}>
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
