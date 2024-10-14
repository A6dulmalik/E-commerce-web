// import React from "react";
// import PropTypes from "prop-types";
import { useContext } from "react";
import ProductList from "../components/ProductList";
import AppContext from "../components/Context/AppContext";

const Products = () => {
  const { wishlist, handleWishlist } = useContext(AppContext);
  return (
    <div className="mt-36 mx-auto max-w-7xl px-4">
      <ProductList handleWishlist={handleWishlist} wishlist={wishlist} />
    </div>
  );
};

// Products.propTypes = {
//   wishlist: PropTypes.array.isRequired,
//   handleWishlist: PropTypes.func.isRequired,
// };
export default Products;
