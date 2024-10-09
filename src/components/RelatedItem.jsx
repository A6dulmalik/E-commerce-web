import coat from "../assets/coat.jpg";
import dufflebag from "../assets/duffle-bag.jpg";
import cpucooler from "../assets/cpu-cooler.jpg";
import bookshelf from "../assets/bookshelf.jpg";

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

import { FaRegEye, FaRegHeart, FaStar } from "react-icons/fa";

function BestSellingProducts() {
  return (
    <div>
      {/* BEST SELLING PRODUCTS */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 font-inter">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-3 bg-[#DB4444] rounded-sm " />
              <p className="text-sm text-[#DB4444] font-semibold">
                Related Item
              </p>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="mt-5 grid grid-flow-col gap-5 max-w-full h-full w-full">
          {bestSelling.map((best, index) => (
            <div key={index} className=" w-full h- ">
              <div className="relative group border rounded-lg w-[250px]">
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
    </div>
  );
}

export default BestSellingProducts;
