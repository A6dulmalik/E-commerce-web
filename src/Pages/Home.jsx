// import React from 'react'
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <>
      <div className="w-[88%] m-auto">
        <Hero />
        <div className="w-full">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Home;
