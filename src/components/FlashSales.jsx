import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRegEye,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function FlashSales() {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      // setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      console.log(data); // Accessing the title of each object
      setProducts(data);
      // setLoading(false);
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
      {/* FLASH SALES */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-b font-inter">
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
        {/* View products */}
        <div className="text-center w-full mt-12">
          <NavLink
            to="/products"
            type="button"
            className="rounded-sm bg-[#DB4444] hover:bg-[#da5a5a] px-10 py-3 text-sm  text-white shadow-md  hover:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            View All Products
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default FlashSales;
