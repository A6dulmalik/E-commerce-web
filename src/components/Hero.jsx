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
      <div className="flex justify-between h-max w-full">
        <div>
          <ul className="border-r w-56 pt-6 ">
            {categories.map((category, index) => (
              <li className="pt-3 text-lg" key={index}>
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
