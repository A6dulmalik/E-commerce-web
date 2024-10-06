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
    // <>
    //   {/* CATEGORY */}
    //   <div className="flex flex-col md:flex-row justify-between border">
    //     <ul className="border w-full md:w-56 pt-6">
    //       {categories.map((category) => (
    //         <li className="pt-3 text-lg" key={category}>
    //           {category}
    //         </li>
    //       ))}
    //     </ul>

    //     {/* HERO SECTION */}
    //     <div className="flex flex-col md:flex-row flex-wrap justify-between border bg-black text-white w-full py-10 px-5 md:px-20 m-5 md:m-10">
    //       {heroInfo.map((info) => (
    //         <div
    //           key={info.mainText}
    //           className="flex flex-col md:flex-row gap-10 w-full md:w-2/5 mb-10 md:mb-0"
    //         >
    //           <div className="flex gap-5 items-center text-lg">
    //             <div className="bg-black">
    //               <img
    //                 src={Apple_logo}
    //                 alt="Apple Logo"
    //                 className="w-10 h-10"
    //               />
    //             </div>
    //             <span>{info.logoText}</span>
    //           </div>
    //           <span className="text-3xl md:text-5xl font-bold border border-white p-2">
    //             {info.mainText}
    //           </span>
    //           <div className="flex flex-row items-center gap-4">
    //             <p className="underline">{info.linkText}</p>
    //             <FaArrowRightLong className="h-8" />
    //           </div>
    //         </div>
    //       ))}
    //       <div className="w-full md:w-1/2 h-full">
    //         <img src={iphoneImage} alt="iPhone" className="w-full h-auto" />
    //       </div>
    //     </div>
    //   </div>
    // </>

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
