// import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { FaHeart, FaRegEye } from "react-icons/fa";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import AppContext from "./Context/AppContext";

const ProductList = () => {
  const { wishlist, handleWishlist } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []); // Run once on component mount

  return (
    <div className="bg-white w-full">
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 place-items-center max-w-full">
        {loading ? (
          <p>LOADING...</p>
        ) : (
          products.map((product) => {
            // Check if the current product is in the wishlist
            // const isInWishlist = wishlist?.some(
            //   (item) => item.id === product.id
            // );
            return (
              <div
                key={product.id}
                className="sm:w-[200px] w-[160px] sm:h-[300px]"
              >
                <div className="relative group h-48 w-full border rounded-lg">
                  <button
                    className="absolute right-3 top-3 rounded-xl p-1"
                    onClick={() => handleWishlist(product)} // Pass the entire product, not just the ID
                  >
                    {/* Check if the specific product is in the wishlist */}
                    {wishlist.some((item) => item.id === product.id) ? (
                      <FaHeart className="text-red-500" /> // Filled heart for wishlist
                    ) : (
                      <FaRegHeart className="text-gray-500" /> // Outlined heart if not in wishlist
                    )}
                  </button>

                  <div className="absolute right-3 top-10 bg-gray-200 rounded-xl p-1">
                    <FaRegEye />
                  </div>

                  <img
                    alt={product.title}
                    src={product.image}
                    className="h-36 w-full object-contain object-center mt-5"
                  />

                  <NavLink
                    to={`/item/${product.id}`}
                    className="absolute bottom-0 rounded-b-lg w-full bg-black text-white text-center p-1 hidden group-hover:block"
                  >
                    View Details
                  </NavLink>
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
          })
        )}
      </div>
    </div>
  );
};

// ProductList.propTypes = {
//   wishlist: PropTypes.array.isRequired,
//   handleWishlist: PropTypes.func.isRequired,
// };
export default ProductList;
