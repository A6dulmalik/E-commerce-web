// import React from "react";

import {
  Radio,
  RadioGroup,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { FaHeart, FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
// import { FaH, FaHeartCircleExclamation } from "react-icons/fa6";
import { NavLink, useParams } from "react-router-dom";
import RelatedItem from "../components/RelatedItem";

function Item() {
  const [products, setProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState(["XS", "S", "M", "L", "XL"]);
  //   const [count, setCount] = useState(1);
  const count = 1;
  //   const [filter, setFilter] = useState(products);
  //   const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getProducts = async () => {
    try {
      //   setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      //   const data = await res.json();

      //   console.log(data); // Accessing the  of each object
      setProducts(await res.json());
      //   setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Use useEffect to fetch the data when the component mounts
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {/* Image gallery */}
      <div className="lg:grid lg:grid-cols-2  lg:gap-x-8 font-inter mt-36">
        <TabGroup className="grid grid-cols-2">
          {/* Image selector */}
          <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <TabList className="grid grid-rows-4 gap-6">
              <Tab
                //   key={index}
                className="group relative flex flex-col h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
              >
                <span className="sr-only">{products.image}</span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    alt=""
                    src={products.image}
                    className="h-full w-1/2 object-cover object-center"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
                />
              </Tab>
              <Tab
                //   key={index}
                className="group relative flex flex-col h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
              >
                <span className="sr-only">{products.image}</span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    alt=""
                    src={products.image}
                    className="h-full w-1/2 object-cover object-center"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
                />
              </Tab>
            </TabList>
          </div>

          <TabPanels className="aspect-h-1 aspect-w-1 w-full">
            <TabPanel>
              <img
                alt={products.title}
                src={products.image}
                className="h-full w-1/3 object-cover object-center sm:rounded-lg"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>

        {/* PRODUCT INFO / OPTIONS */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-4 lg:mt-0 border">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            {products.title}
          </h1>

          {/* Reviews */}
          <div className="mt-3">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <FaStar
                    key={rating}
                    aria-hidden="true"
                    fill={
                      products.rating?.rate > rating ? "#FFAD33" : "lightgray"
                    }
                  />
                ))}
                {/* ({`${products.rating.count} Reviews `}) */}
                <span className="ml-3">|</span>
                <p className="ml-3 text-[#00FF66]">In Stock</p>
              </div>
              <p className="sr-only">{} out of 5 stars</p>
            </div>

            {/* Product Price */}
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-xl font-semibold tracking-tight text-gray-900">
                ${products.price}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                dangerouslySetInnerHTML={{ __html: products.description }}
                className="space-y-6 text-base text-gray-700"
              />
            </div>
          </div>

          <hr className="mt-8" />

          {/* Colors */}
          <form className="mt-6">
            <div className="flex items-center gap-4">
              <h3 className="text-xl text-black font-semibold">Colors:</h3>

              <fieldset aria-label="Choose a color" className="mt-2">
                <RadioGroup
                  value={products.color}
                  onChange={products.color}
                  className="flex items-center space-x-3"
                >
                  {["#A0BCE0", "#E07575"].map((color, index) => (
                    <Radio
                      key={index}
                      value={color}
                      aria-label={color}
                      style={{ backgroundColor: color }}
                      className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1`}
                    >
                      <span
                        aria-hidden="true"
                        className="h-4 w-4 rounded-full border border-black border-opacity-10"
                      />
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>
          </form>

          {/* Size picker */}
          <div className="mt-8 flex items-center gap-4">
            <h2 className="text-xl font-medium text-gray-900">Size:</h2>

            <fieldset aria-label="Choose a size" className="mt-2 flex">
              {selectedSize.map((size, index) => (
                <RadioGroup
                  key={index}
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mx-2 sm:grid-cols-6"
                >
                  <Radio
                    key={size.name}
                    value={size}
                    disabled={!size.inStock}
                    className="flex items-center justify-center rounded-md border border-gray-200 bg-white h-10 w-10 text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 data-[checked]:border-transparent data-[checked]:bg-indigo-600 data-[checked]:text-white data-[focus]:ring-2 data-[focus]:ring-indigo-500 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-700 sm:flex-1"
                  >
                    {size}
                  </Radio>
                </RadioGroup>
              ))}
            </fieldset>
          </div>

          {/* Quantity and buy button */}
          <div className="mt-10 flex justify-between">
            <div className="flex items-center border rounded gap-9 h-11 w-40">
              <button className="">
                <FaPlus />
              </button>
              <div className="text-2xl h-full w-12 border-x-2">
                <span className="ml-3 ">{count}</span>
              </div>
              <button className="">
                <FaMinus className="" />
              </button>
            </div>
            <NavLink
              to="cart"
              className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-[#DB4444] text-base font-medium text-white hover:bg-[#b13737] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
            >
              Buy Now
            </NavLink>

            <button
              type="button"
              className=" flex items-center justify-center rounded-md px-2 py-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 border "
            >
              <FaHeart aria-hidden="true" className="h-6 w-6 flex-shrink-0" />
            </button>
          </div>

          {/* Delivery and Return Info */}
          <div className="sm:w-[578px] h-48 border rounded border-black mt-11 font-inter">
            {/* free delivery */}
            <div className="flex justify-start items-center gap-8 h-1/2 border-b border-black px-8">
              <TbTruckDelivery className="text-7xl sm:text-[60px]" />
              <div className="">
                <p className="font-bold mb-2 sm:text-base text-sm">
                  Free Delivery
                </p>
                <p className="sm:text-base text-xs">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            {/* Return Delivery */}
            <div className="flex justify-start items-center gap-8 mt-8 mx-8">
              <FaRotate className="text-5xl sm:text-[60px]" />
              <div className="">
                <p className="font-bold mb-2 sm:text-base text-sm">
                  Return Delivery
                </p>
                <p className="sm:text-base text-xs">
                  Free 30 Days Delivery Returns. <span>Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SIMILAR PRODUCTS */}
        <RelatedItem />
      </div>
    </>
  );
}

export default Item;
