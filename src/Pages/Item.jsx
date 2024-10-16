// import React from "react";

import {
  Radio,
  RadioGroup,
  // Tab,
  // TabGroup,
  // TabList,
  // TabPanel,
  // TabPanels,
} from "@headlessui/react";
import { useContext, useEffect, useState } from "react";
import { FaHeart, FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { FaRegHeart, FaRotate } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
// import { FaH, FaHeartCircleExclamation } from "react-icons/fa6";
import { NavLink, useParams } from "react-router-dom";
import RelatedItem from "../components/RelatedItem";
import AppContext from "../components/Context/AppContext";

function Item() {
  const [products, setProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState(["XS", "S", "M", "L", "XL"]);
  const { wishlist, handleWishlist } = useContext(AppContext);
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
      <div className="mx-auto max-w-7xl px-4 md:grid md:grid-cols-2 lg:gap-x-16 items-center font-inter mt-48 lg:mt-36">
        <RadioGroup className="flex flex-col-reverse lg:flex-row gap-20">
          <div className="grid grid-cols-2 lg:grid-cols-1 w-fit items-center gap-16">
            <Radio className="w-28 h-fit border-2  border-blue-500 ">
              <img src={products.image} alt={products.title} />
            </Radio>
            <Radio className="w-28 h-fit border-2 p-2">
              <img src={products.image} alt={products.title} />
            </Radio>
          </div>
          <Radio className=" md:w-96 p-5">
            <img src={products.image} alt={products.title} />
          </Radio>
        </RadioGroup>

        {/* PRODUCT INFO / OPTIONS */}
        <div className="mt-10 px-2 sm:mt-16 sm:px-4 lg:mt-0">
          <h1 className="sm:text-xl text-base font-semibold sm:font-bold tracking-tight text-gray-900">
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
              <p className="text-base sm:text-xl font-semibold tracking-tight text-gray-900">
                ${products.price}
              </p>
            </div>

            <div className="mt-2">
              <h3 className="sr-only">Description</h3>

              <div
                dangerouslySetInnerHTML={{ __html: products.description }}
                className="sm:space-y-3 text-sm sm:text-sm text-gray-700"
              />
            </div>
          </div>

          <hr className="mt-4" />

          {/* Colors */}
          <form className="mt-4">
            <div className="flex items-center gap-4">
              <h3 className="sm:text-xl text-black font-semibold">Colors:</h3>

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
                      className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full sm:p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1`}
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
          <div className="mt-3 flex items-center sm:gap-4">
            <h2 className="text-base sm:text-xl font-semibold text-gray-900">
              Size:
            </h2>

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
                    className="flex items-center justify-center rounded-md border border-gray-200 bg-white h-6 sm:h-10 w-6 md:w-10 text-xs sm:text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 data-[checked]:border-transparent data-[checked]:bg-indigo-600 data-[checked]:text-white data-[focus]:ring-2 data-[focus]:ring-indigo-500 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-700 sm:flex-1"
                  >
                    {size}
                  </Radio>
                </RadioGroup>
              ))}
            </fieldset>
          </div>

          {/* Quantity and buy button */}
          <div className="mt-5 flex justify-between">
            <div className="flex items-center gap-2 sm:gap-5 border rounded px-3 ">
              <button className="">
                <FaPlus className="text-xs sm:text-base" />
              </button>
              <div className="sm:text-xl border-x-2">
                <span className="px-10">{count}</span>
              </div>
              <button className="">
                <FaMinus className="text-xs sm:text-base" />
              </button>
            </div>
            <NavLink
              to="cart"
              className="bg-[#DB4444] w-3/6 text-center text-white flex justify-center items-center rounded"
            >
              Buy Now
            </NavLink>

            <button
              type="button"
              className=" flex items-center justify-center rounded-md px-2 py-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 border "
              onClick={() => handleWishlist(products)}
            >
              {wishlist.some((item) => item.id === products.id) ? (
                <FaHeart className="text-red-500" /> // Filled heart for wishlist
              ) : (
                <FaRegHeart className="text-gray-500" /> // Outlined heart if not in wishlist
              )}
            </button>
          </div>

          {/* Delivery and Return Info */}
          <div className="w-full border rounded border-gray-400 mt-6 font-inter">
            {/* free delivery */}
            <div className="flex justify-start items-center gap-8 border-b border-gray-400 px-8 py-2">
              <TbTruckDelivery className="text-7xl sm:text-[40px]" />
              <div className="">
                <p className="font-bold mb- sm:text-base text-sm">
                  Free Delivery
                </p>
                <p className="sm:text-base text-xs">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            {/* Return Delivery */}
            <div className="flex justify-start items-center gap-8 mx-8 py-2">
              <FaRotate className="text-5xl sm:text-[30px]" />
              <div className="">
                <p className="font-bold mb- sm:text-base text-sm">
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
