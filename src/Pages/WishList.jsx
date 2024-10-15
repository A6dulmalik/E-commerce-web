// import PropTypes from "prop-types";
import { useContext } from "react";
import AppContext from "../components/Context/AppContext";
import { FaHeart, FaRegEye, FaRegHeart, FaStar } from "react-icons/fa6";
// import { NavLink } from "react-router-dom";

function WishList() {
  const { wishlist, addToCart } = useContext(AppContext);
  return (
    <div className="p-4 sm:p-6 lg:p-10 sm:mt-36 mt-40 font-inter">
      <h1 className="text-base sm:text-2xl my-4">
        <span>Wishlist ({wishlist.length})</span>
      </h1>
      {wishlist.length === 0 ? (
        <p className="mt-5">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((product) => {
            // Check if the current product is in the wishlist
            // const isInWishlist = wishlist?.some(
            //   (item) => item.id === product.id
            // );
            return (
              <div
                key={product.id}
                className="sm:w-[200px] md:w-[160px] sm:h-[300px] w-full flex gap-4 sm:block "
              >
                <div className="relative group sm:h-48 sm:w-full w-32 border rounded-lg">
                  <button className="absolute right-1 sm:right-3 top-3 rounded-xl p-1">
                    {/* Check if the specific product is in the wishlist */}
                    {wishlist.some((item) => item.id === product.id) ? (
                      <FaHeart className="text-red-500" /> // Filled heart for wishlist
                    ) : (
                      <FaRegHeart className="text-gray-500" /> // Outlined heart if not in wishlist
                    )}
                  </button>

                  <div className="absolute sm:right-3 right-1 top-10 rounded-xl p-1">
                    <FaRegEye />
                  </div>

                  <img
                    alt={product.title}
                    src={product.image}
                    className="h-20 sm:h-36 sm:w-full w-1/2 m-auto object-contain object-center mt-5 sm:p-3"
                  />

                  <button
                    className="absolute bottom-0 rounded-b-lg w-full bg-black text-white text-center p-1 hidden group-hover:block"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>

                <div className="">
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {product.title.substring(0, 12)}
                  </h3>
                  <p className="mt-1 text-sm text-[#DB4444]">
                    ${product.price}
                  </p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating, index) => (
                      <FaStar
                        key={index}
                        fill={
                          product.rating.rate > rating ? "#FFAD33" : "lightgray"
                        }
                        className="h-4 w-4 flex-shrink-0"
                      />
                    ))}
                    <p className="ml-3">({product.rating.rate})</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// WishList.propTypes = {
//   wishlist: PropTypes.array.isRequired,
//   handleWishlist: PropTypes.func.isRequired,
// };

export default WishList;
