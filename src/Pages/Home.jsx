// import React from 'react'
import PropTypes from "prop-types";
import BestSellingProducts from "../components/BestSellingProducts";
import BrowseByCategory from "../components/BrowseByCategory";
import FlashSales from "../components/FlashSales";
import Hero from "../components/Hero";
import MusicExp from "../components/MusicExp";
import ExplorePro from "../components/ExplorePro";
import NewArrival from "../components/NewArrival";
import ServiceSection from "../components/ServiceSection";
// import ProductList from "../components/ProductList";

const Home = ({ wishlist, handleWishlist }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-b font-inter">
      <Hero />
      <FlashSales wishlist={wishlist} handleWishlist={handleWishlist} />
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

Home.propTypes = {
  wishlist: PropTypes.array.isRequired,
  handleWishlist: PropTypes.func.isRequired,
};
export default Home;
