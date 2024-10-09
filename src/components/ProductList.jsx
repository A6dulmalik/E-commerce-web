// import React from 'react'
import { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart, FaStar } from "react-icons/fa6";
// import { Navigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  // Use useEffect to fetch the data when the component mounts

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      console.log(data.title); // Accessing the title of each object
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []); // Empty dependency array ensures it runs once on mount

  //   const filterProduct(e) => {
  //     const categoryList = data.filter((cat)=> cat.category === e);
  //     setFilter(categoryList);
  //   }

  return (
    <div className="bg-white w-full">
      <div className="mt-5 grid grid-cols-4 gap-4 max-w-full">
        {loading ? (
          <p>LOADING...</p>
        ) : (
          products.map((product) => (
            <div
              to={`/products`}
              key={product.id}
              className=" w-[200px] h-[300px] "
            >
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
          ))
        )}
      </div>

      {/* PRODUCTS */}
      {/* <div className="mt-14">
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
      </div> */}
    </div>
  );
};

export default ProductList;
