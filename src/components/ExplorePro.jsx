// import React from "react";
import { useEffect, useState } from "react";
import { FaRegEye, FaRegHeart, FaStar } from "react-icons/fa";

function ExplorePro() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      console.log(data.title); // Accessing the title of each object
      const limiteItems = data.slice(10, 18);
      setProducts(limiteItems);
    } catch (error) {
      console.log(error);
    }
  };

  // Use useEffect to fetch the data when the component mounts
  useEffect(() => {
    getProducts();
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-b font-inter">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-3 bg-[#DB4444] rounded-sm " />
              <p className="text-sm text-[#DB4444] font-semibold">This Month</p>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight  text-gray-900">
              Explore Our Products
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
        <div className="grid grid-cols-4 gap-5 mt-5">
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
    </>
  );
}

export default ExplorePro;
