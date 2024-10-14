// import React from 'react'
// import PropTypes from "prop-types";
import BestSellingProducts from "../components/BestSellingProducts";
import BrowseByCategory from "../components/BrowseByCategory";
import FlashSales from "../components/FlashSales";
import Hero from "../components/Hero";
import MusicExp from "../components/MusicExp";
import ExplorePro from "../components/ExplorePro";
import NewArrival from "../components/NewArrival";
import ServiceSection from "../components/ServiceSection";
import { useContext } from "react";
import AppContext from "../components/Context/AppContext";
// import ProductList from "../components/ProductList";

const Home = () => {
  const { wishlist, handleWishlist, cart, addToCart } = useContext(AppContext);
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-16 lg:px-8 border-b font-inter">
      <Hero />
      <FlashSales
        wishlist={wishlist}
        handleWishlist={handleWishlist}
        cart={cart}
        addToCart={addToCart}
      />
      <BrowseByCategory />
      <BestSellingProducts />
      <MusicExp />
      <ExplorePro />
      <NewArrival />
      <ServiceSection />
      {/* <ProductList /> */}
    </div>
  );
};

// Home.propTypes = {
//   wishlist: PropTypes.array.isRequired,
//   handleWishlist: PropTypes.func.isRequired,
//   cart: PropTypes.array.isRequired,
//   addToCart: PropTypes.func.isRequired,
// };
export default Home;
