// import React from 'react'
import BestSellingProducts from "../components/BestSellingProducts";
import BrowseByCategory from "../components/BrowseByCategory";
import FlashSales from "../components/FlashSales";
import Hero from "../components/Hero";
import MusicExp from "../components/MusicExp";
import ExplorePro from "../components/ExplorePro";
// import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <FlashSales />
      <BrowseByCategory />
      <BestSellingProducts />
      <MusicExp />
      <ExplorePro />
      {/* <ProductList /> */}
    </div>
  );
};

export default Home;
