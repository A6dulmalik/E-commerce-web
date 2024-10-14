// import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="my-36 font-inter flex flex-col justify-center items-center gap-20">
        <div className="text-center">
          <h1 className=" text-7xl mb-6">404 Not Found</h1>
          <p>Your visited page not found. You may go home page.</p>
        </div>

        <NavLink to="/" className="bg-[#DB4444] text-white py-4 px-12">
          Back to home page
        </NavLink>
      </div>
    </>
  );
};

export default NotFoundPage;
