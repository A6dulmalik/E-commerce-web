// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Apple_logo from "../assets/Apple-01.jpg";
import iphoneImage from "../assets/iphone14-rbg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../ImageSlider.css";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
// import { useNavigate } from "react-router-dom";

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
  // const navigate = useNavigate();

  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 1,
      autoplay: 1500, // Disable autoplay for testing
      breakpoints: {
        768: { perView: 1 }, // 1 slide on mobile
        1024: { perView: 1 }, // 1 slide on medium screens
      },
    });

    glide.mount();

    const handleResize = () => {
      glide.update(); // Update Glide on resize
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      glide.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 0,
  //   slidesToScroll: 1,
  // };
  // const settings = {
  //   dots: true,
  // };
  // const currentIndex = 0;

  // const next = () => setCurrentIndex(currentIndex + 1);
  // const previous = () => setCurrentIndex(currentIndex - 1);

  return (
    <>
      {/* <div className="image-slider-container">
        <Slider {...settings}>
          {heroInfo.map((info, index) => (
            <img src={info.heroImage} key={index} />
          ))}
        </Slider>
      </div> */}

      <div className="glide ">
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slide flex justify-center items-center overflow-x-auto relative group font-inter mt-14">
            {heroInfo.map((info, index) => (
              <div
                key={index}
                className={`glid__slide flex sm:flex-row flex-col justify-center items-center bg-black text-white md:w-[900px] w-full h-max md:p-5 p-2 md:m-10 m-3`}
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
                    {/* <BsChevronCompactLeft size={30} /> */}
                  </div>
                  <div
                    className="hidden group-hover:block absolute top-52 right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
                    // onClick={next}
                  >
                    {/* <BsChevronCompactRight size={30} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;

// const Carousel = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const glide = new Glide(".glide", {
//       type: "carousel",
//       startAt: 0,
//       perView: 1,
//       autoplay: false, // Disable autoplay for testing
//       breakpoints: {
//         768: { perView: 1 }, // 1 slide on mobile
//         1024: { perView: 1 }, // 1 slide on medium screens
//       },
//     });

//     glide.mount();

//     const handleResize = () => {
//       glide.update(); // Update Glide on resize
//     };

//     window.addEventListener("resize", handleResize);

//     // Cleanup on unmount
//     return () => {
//       glide.destroy();
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="px-5 md:px-0">
//       {/* Hero section */}
//       <div className="glide w-full h-auto md:bg-[#F5F5F5] bg-[#E4F2E7] rounded-3xl md:rounded-none mt-[10px] p-4 md:p-8 ">
//         <div className="glide__track" data-glide-el="track">
//           <div className="glide__slides">
//             {/* Slide 1 */}
//             <div className="glide__slide flex flex-row">
//               <div className="my-auto md:my-0 flex-grow font-custom mb-6 md:mb-0 text-start">
//                 <p className="w-full text-[10px] md:text-base mt-0 md:mt-20">
//                   Welcome to GreenShop
//                 </p>
//                 <div className="w-full md:w-[530px] h-auto">
//                   <p className="text-xl md:text-[70px] font-black leading-tight">
//                     LET’S MAKE A BETTER{" "}
//                     <span className="text-primary-color">PLANET</span>
//                   </p>
//                 </div>
//                 <div className="w-full md:w-[550px]">
//                   <p className="hidden md:block md:text-sm ">
//                     We are an online plant shop offering a wide range of cheap
//                     and trendy plants. Use our plants to create an unique Urban
//                     Jungle. Order your favorite plants!
//                   </p>
//                   <p className="block md:hidden text-[10px]">
//                     {" "}
//                     We are an online plant shop offering a wide range{" "}
//                   </p>
//                 </div>
//                 <button
//                   className="hidden md:block w-[140px] h-[40px] rounded-lg bg-primary-color text-white mt-[55px] font-custom font-bold text-base"
//                   onClick={() => {
//                     navigate("/shop");
//                   }}
//                 >
//                   SHOP NOW
//                 </button>
//                 <div
//                   className="flex md:hidden  flex-row mt-2"
//                   onClick={() => {
//                     navigate("/shop");
//                   }}
//                 >
//                   <span className="text-primary-color">SHOP NOW</span>
//                   <IoArrowForward size={20} color="#4BA358" />
//                 </div>
//               </div>
//               <div className="w-full md:w-[518px] relative flex justify-center md:justify-end">
//                 <img
//                   src={flowervase1}
//                   className="absolute bottom-2 -left-5 md:left-5 md:bottom-10 w-[100px] md:w-[135px] h-auto"
//                   alt="flower vase small"
//                 />
//                 <img
//                   src={flowervase1}
//                   className="w-[200px] md:w-[518px] h-auto"
//                   alt="flower vase large"
//                 />
//               </div>
//             </div>
//             {/* Slide 2 */}
//             <div className="glide__slide flex flex-row bg-[#F5F5F5] md:bg-[#E4F2E7]">
//               <div className="my-auto md:my-0 flex-grow font-custom mb-6 md:mb-0 text-start">
//                 <p className="w-full text-[10px] md:text-base mt-0 md:mt-20">
//                   Welcome to GreenShop
//                 </p>
//                 <div className="w-full md:w-[530px] h-auto">
//                   <p className="text-xl md:text-[70px] font-black leading-tight">
//                     LET’S MAKE A BETTER{" "}
//                     <span className="text-primary-color">PLANET</span>
//                    </p>
//                 </div>
//                 <div className="w-full md:w-[550px]">
//                   <p className="hidden md:block md:text-sm ">
//                     We are an online plant shop offering a wide range of cheap
//                     and trendy plants. Use our plants to create an unique Urban
//                     Jungle. Order your favorite plants!
//                   </p>
//                   <p className="block md:hidden text-[10px]">
//                     {" "}
//                     We are an online plant shop offering a wide range{" "}
//                   </p>
//                 </div>
//                 <button
//                   className="hidden md:block w-[140px] h-[40px] rounded-lg bg-primary-color text-white mt-[55px] font-custom font-bold text-base"
//                   onClick={() => {
//                     navigate("/shop");
//                   }}
//                 >
//                   SHOP NOW
//                 </button>
//                 <div
//                   className="flex md:hidden  flex-row mt-2"
//                   onClick={() => {
//                     navigate("/shop");
//                   }}
//                 >
//                   <span className="text-primary-color">SHOP NOW</span>
//                   <IoArrowForward size={20} color="#4BA358" />
//                 </div>
//               </div>
//               <div className="w-full md:w-[518px] relative flex justify-center md:justify-end">
//                 <img
//                   src={flowervase1}
//                   className="absolute bottom-2 -left-5 md:left-5 md:bottom-10 w-[100px] md:w-[135px] h-auto"
//                   alt="flower vase small"
//                 />
//                 <img
//                   src={flowervase1}
//                   className="w-[200px] md:w-[518px] h-auto"
//                   alt="flower vase large"
//                 />
//               </div>
//             </div>
//             {/* Slide 3 */}
//             <div className="glide__slide flex flex-row">
//               <div className="my-auto md:my-0 flex-grow font-custom mb-6 md:mb-0 text-start">
//                 <p className="w-full text-[10px] md:text-base mt-0 md:mt-20">
//                   Welcome to GreenShop
//                 </p>
//                 <div className="w-full md:w-[530px] h-auto">
//                   <p className="text-xl md:text-[70px] font-black leading-tight">
//                     LET’S MAKE A BETTER{" "}
//                     <span className="text-primary-color">PLANET</span>
//                   </p>
//                 </div>
//                 <div className="w-full md:w-[550px]">
//                   <p className="hidden md:block md:text-sm ">
//                     We are an online plant shop offering a wide range of cheap
//                     and trendy plants. Use our plants to create an unique Urban
//                     Jungle. Order your favorite plants!
//                   </p>
//                   <p className="block md:hidden text-[10px]">
//                     {" "}
//                     We are an online plant shop offering a wide range{" "}
//                   </p>
//                 </div>
//                 <button
//                   className="hidden md:block w-[140px] h-[40px] rounded-lg bg-primary-color text-white mt-[55px] font-custom font-bold text-base"
//                   onClick={() => {
//                     navigate("/shop");
//                   }}
//                 >
//                   SHOP NOW
//                 </button>
//                 <div
//                   className="flex md:hidden  flex-row mt-2"
//                   onClick={() => {
//                     navigate("/shop");
//                   }}
//                 >
//                   <span className="text-primary-color">SHOP NOW</span>
//                   <IoArrowForward size={20} color="#4BA358" />
//                 </div>
//               </div>
//               <div className="w-full md:w-[518px] relative flex justify-center md:justify-end">
//                 <img
//                   src={flowervase1}
//                   className="absolute bottom-2 -left-5 md:left-5 md:bottom-10 w-[100px] md:w-[135px] h-auto"
//                   alt="flower vase small"
//                 />
//                 <img
//                   src={flowervase1}
//                   className="w-[200px] md:w-[518px] h-auto"
//                   alt="flower vase large"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Carousel indicators */}
//         <div className="glide__bullets" data-glide-el="controls">
//           <button
//             className="glide_bullet glide_bullet--active"
//             data-glide-dir="=0"
//           ></button>
//           <button className="glide__bullet" data-glide-dir="=1"></button>
//           <button className="glide__bullet" data-glide-dir="=2"></button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
