// import React from 'react'
import { useState, useEffect } from "react";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiMobile4, CiMonitor } from "react-icons/ci";
import { FaHeadphones, FaRegEye } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaRegHeart, FaStar } from "react-icons/fa6";
import { TbDeviceGamepad, TbTruckDelivery } from "react-icons/tb";
import coat from "../assets/coat.jpg";
import dufflebag from "../assets/duffle-bag.jpg";
import cpucooler from "../assets/cpu-cooler.jpg";
import bookshelf from "../assets/bookshelf.jpg";
import speaker from "../assets/speaker.jpg";
import ps5 from "../assets/ps5.jpg";
import wCollection from "../assets/womensCollection.jpg";
import speakers from "../assets/speakers.jpg";
import perfume from "../assets/perfume.jpg";
import { RiCustomerServiceFill, RiShieldCheckLine } from "react-icons/ri";

const bestSelling = [
  { image: coat, title: "The north coat", price: 260, rating: 5 },
  {
    image: dufflebag,
    title: "Gucci duffle bag",
    price: 960,
    rating: 4,
  },
  {
    image: cpucooler,
    title: "RGB liquid CPU cooler",
    price: 160,
    rating: 4,
  },
  {
    image: bookshelf,
    title: "Small Bookshelf",
    price: 360,
    rating: 5,
  },
];

const categories = [
  { icon: <CiMobile4 />, label: "Phone" },
  { icon: <CiMonitor />, label: "Computers" },
  { icon: <BsSmartwatch />, label: "SmartWatch" },
  { icon: <CiCamera />, label: "Camera" },
  { icon: <FaHeadphones />, label: "HeadPhones" },
  { icon: <TbDeviceGamepad />, label: "Gaming" },
];
const ProductList = () => {
  const [products, setProducts] = useState([]);
  //   const [filter, setFilter] = useState(products);
  //   const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      console.log(data.title); // Accessing the title of each object
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Use useEffect to fetch the data when the component mounts
  useEffect(() => {
    getProducts();
  }, []); // Empty dependency array ensures it runs once on mount

  //   const filterProduct(e) => {
  //     const categoryList = data.filter((cat)=> cat.category === e);
  //     setFilter(categoryList);
  //   }

  return (
    <div className="bg-white w-full">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-b">
        {/* SALES INFO AND NAVIGATION ARROW */}
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-3 bg-[#DB4444] rounded-sm " />
              <p className="text-sm text-[#DB4444] font-semibold">Today`s</p>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
              Flash Sales
            </h2>
          </div>
          <div className="flex gap-5">
            <div className="hidden text-xl font-semibold bg-gray-100 p-2 rounded-full text-black hover:text-slate-500 sm:block">
              <FaArrowLeft />
            </div>
            <div className="hidden text-xl font-semibold bg-gray-100 p-2 rounded-full text-black hover:text-slate-500 sm:block">
              <FaArrowRight />
            </div>
          </div>
        </div>
        {/* PRODUCTS LIST */}
        <div className="mt-5 grid grid-flow-col gap-4 max-w-full overflow-x-auto">
          {products.map((product) => (
            <div key={product.id} className=" w-[200px] h-[300px] ">
              <div className="relative group h-48 w-full border rounded-lg">
                <div className="absolute right-3 top-3 bg-gray-200 rounded-xl p-1">
                  <FaRegHeart className=" " />
                </div>
                <div className="absolute right-3 top-10 bg-gray-200 rounded-xl p-1">
                  <FaRegEye className="  " />
                </div>
                <img
                  alt={product.title.substring(0)}
                  src={product.image}
                  className="h-36 w-full object-contain object-center mt-5"
                />
                <button className="absolute bottom-0 rounded-b-lg w-full bg-black  text-white text-center p-1 hidden group-hover:block">
                  Add To Cart
                </button>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.title.substring(0, 12)}
                </a>
              </h3>
              <p className="mt-1 text-sm text-[#DB4444]">${product.price}</p>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating, index) => (
                  <FaStar
                    fill={
                      product.rating.rate > rating ? "#FFAD33" : "lightgray"
                    }
                    key={index}
                    aria-hidden="true"
                    className="h-4 w-4 flex-shrink-0 "
                  />
                ))}
                <p className=" ml-3">({product.rating.rate})</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center w-full mt-12">
          <button
            type="button"
            className="rounded-sm bg-[#DB4444] hover:bg-[#da5a5a] px-10 py-3 text-sm  text-white shadow-md  hover:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            View All Products
          </button>
        </div>
      </div>
      <hr />
      {/* CATEGORY SECTION */}
      <div className="my-8">
        {/* SALES INFO AND NAVIGATION ARROW */}
        <div className="sm:flex sm:items-baseline sm:justify-between ">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-3 bg-[#DB4444] rounded-sm " />
              <p className="text-sm text-[#DB4444] font-semibold">Categories</p>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
              Browse By Category
            </h2>
          </div>
          <div className="flex gap-5">
            <div className="hidden text-xl font-semibold bg-gray-100 p-2 rounded-full text-black hover:text-slate-500 sm:block">
              <FaArrowLeft />
            </div>
            <div className="hidden text-xl font-semibold bg-gray-100 p-2 rounded-full text-black hover:text-slate-500 sm:block">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className=" grid grid-flow-col gap-10 ">
          {categories.map((category, index) => (
            <div
              key={index}
              className=" w-[158px] h-[135px] text-center border rounded-md my-16 hover:bg-gray-100"
            >
              <div className="font-light text-6xl px-12 py-5 ">
                {category.icon}
              </div>
              <span>{category.label}</span>
            </div>
          ))}
        </div>
      </div>
      <hr />
      {/* BEST SELLING PRODUCTS */}
      <div className="mt-14">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-3 bg-[#DB4444] rounded-sm " />
              <p className="text-sm text-[#DB4444] font-semibold">This Month</p>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Best Selling Products
            </h2>
          </div>
          <button
            type="button"
            className="rounded-sm bg-[#DB4444] hover:bg-[#da5a5a] px-10 py-2 text-sm  text-white shadow-md  hover:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            View All
          </button>
        </div>
        {/* PRODUCTS */}
        <div className="mt-5 grid grid-flow-col gap-5 max-w-full overflow-x-auto">
          {bestSelling.map((best, index) => (
            <div key={index} className=" w-[280px] h-[300px] ">
              <div className="relative group h-48 w-full border rounded-lg">
                <div className="absolute right-3 top-3 bg-gray-200 rounded-xl p-1">
                  <FaRegHeart className=" " />
                </div>
                <div className="absolute right-3 top-10 bg-gray-200 rounded-xl p-1">
                  <FaRegEye className="  " />
                </div>
                <img
                  alt={best.title.substring(0)}
                  src={best.image}
                  className="h-40 w-full object-contain object-center mt-5 p-2"
                />
                <button className="absolute bottom-0 rounded-b-lg w-full bg-black  text-white text-center p-1 hidden group-hover:block">
                  Add To Cart
                </button>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                <a>
                  <span className="absolute inset-0" />
                  {best.title}
                </a>
              </h3>
              <p className="mt-1 text-sm text-[#DB4444]">${best.price}</p>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating, index) => (
                  <FaStar
                    fill={best.rating > rating ? "#FFAD33" : "lightgray"}
                    key={index}
                    aria-hidden="true"
                    className="h-4 w-4 flex-shrink-0 "
                  />
                ))}
                <p className=" ml-3">({best.rating})</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MUSIC SPEAKER SECTION */}
      <div className="flex justify-between bg-black w-full h-[380px] my-16 p-14">
        <div className="w-1/2">
          <p className="text-[#47B486] text-xl ">Categories</p>
          <span className=" text-white text-6xl">
            Enhance Your Music <br />
            Experience
          </span>
        </div>
        <div className="w-1/2 h-[300px]">
          <img src={speaker} className="  w-full h-full" />
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="mt-14">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-3 bg-[#DB4444] rounded-sm " />
              <p className="text-sm text-[#DB4444] font-semibold">This Month</p>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Best Selling Products
            </h2>
          </div>
          <button
            type="button"
            className="rounded-sm bg-[#DB4444] hover:bg-[#da5a5a] px-10 py-2 text-sm  text-white shadow-md  hover:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            View All
          </button>
        </div>

        {/* Products list */}
        <div className="grid grid-flow-col grid-rows-5 gap-5 mt-5">
          {products.map((product, index) => (
            <div key={index} className=" w-[260px] h-[300px] ">
              <div className="relative group h-48 w-full border rounded-lg">
                <div className="absolute right-3 top-3 bg-gray-200 rounded-xl p-1">
                  <FaRegHeart className=" " />
                </div>
                <div className="absolute right-3 top-10 bg-gray-200 rounded-xl p-1">
                  <FaRegEye className="  " />
                </div>
                <img
                  alt={product.title.substring(0)}
                  src={product.image}
                  className="h-40 w-full object-contain object-center mt-5 p-2"
                />
                <button className="absolute bottom-0 rounded-b-lg w-full bg-black  text-white text-center p-1 hidden group-hover:block">
                  Add To Cart
                </button>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                <a>
                  <span className="absolute inset-0" />
                  {product.title.substring(0, 12)}
                </a>
              </h3>
              <div className="flex gap-2">
                <p className="mt-1 text-sm text-[#DB4444]">${product.price}</p>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating, index) => (
                    <FaStar
                      fill={
                        product.rating.rate > rating ? "#FFAD33" : "lightgray"
                      }
                      key={index}
                      aria-hidden="true"
                      className="h-4 w-4 flex-shrink-0 "
                    />
                  ))}
                </div>
                <p className="">({product.rating.rate})</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center w-full mt-6">
          <button
            type="button"
            className="rounded-sm bg-[#DB4444] hover:bg-[#da5a5a] px-10 py-3 text-sm  text-white shadow-md  hover:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            View All Products
          </button>
        </div>
      </div>

      {/* NEW ARRIVAL */}
      <div className="mt-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-3 bg-[#DB4444] rounded-sm " />
            <p className="text-sm text-[#DB4444] font-semibold">Featured</p>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-12">
            New Arrival
          </h2>
        </div>
        <div className="flex justify-between">
          <img src={ps5} />
          <div className="flex flex-col justify-between">
            <img src={wCollection} />
            <div className="flex justify-between">
              <img src={speakers} />
              <img src={perfume} />
            </div>
          </div>
        </div>
      </div>

      {/* DELIVERY CUSTOMER AND GUARANTEE SECTION*/}
      <div className="flex justify-evenly items-center my-28">
        {/* Delivery */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center rounded-3xl w-12 h-12 bg-slate-400">
            <div className="flex items-center justify-center bg-black rounded-3xl h-4/5 w-4/5">
              <TbTruckDelivery className="stroke-white  text-2xl h" />
            </div>
          </div>
          <p className="font-bold">FREE AND FAST DELIVERY</p>
          <span>Free delivery for all orders over $140</span>
        </div>

        {/* Customer Service */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center rounded-3xl w-12 h-12 bg-slate-400">
            <div className="flex items-center justify-center bg-black rounded-3xl h-4/5 w-4/5">
              <RiCustomerServiceFill className="fill-white text-2xl h" />
            </div>
          </div>
          <p className="font-bold">24/7 CUSTOMER SERVICE</p>
          <span>Friendly 24/7 customer support</span>
        </div>

        {/* Money Back */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center rounded-3xl w-12 h-12 bg-slate-400">
            <div className="flex items-center justify-center bg-black rounded-3xl h-4/5 w-4/5">
              <RiShieldCheckLine className="fill-white text-2xl h" />
            </div>
          </div>
          <p className="font-bold">MONEY BACK GUARANTEE</p>
          <span>We return money within 30 days</span>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
