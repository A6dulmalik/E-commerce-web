// import React from "react";
import { Form, useActionData } from "react-router-dom";
import sideImage from "../assets/loginSideImage.svg";
// import { data } from "autoprefixer";

const Login = () => {
  const data = useActionData();
  return (
    <>
      <div className="mt-48 sm:mt-36 sm:mb-20 mb-10 max-w-7xl 2xl:m-auto flex flex-row-reverse items-center gap-32 font-inter sm:bg-none bg-[url('./assets/loginSideImage.svg')] bg-contain">
        {/* sideImage */}
        <div className="w-2/4 h-2/4 2xl:w-full sm:block hidden">
          <img src={sideImage} />
        </div>
        <div className=" sm:w-[300px] w-4/5 m-auto border border-white rounded sm:block flex flex-col justify-center items-center sm:text-start text-center h-max lg:px-0 px-6 lg:py-0 py-8 my-4 sm:backdrop-blur-none backdrop-blur-sm">
          <div className="mb-8">
            <h1 className="font-medium lg:text-3xl text-xl mb-2 ">
              Login to Exclusive
            </h1>
            <p className="lg:text-base text-sm">
              Enter your{" "}
              <span className="sm:text-black text-white">details below</span>
            </p>
          </div>
          <Form method="post" action="/login" className=" ">
            <div className="w-full mb-10">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email or Phone Number"
                className="outline-none border-b w-full placeholder:text-sm sm:placeholder:pl-0 placeholder:pl-2"
              />
              {data && data.error === "Please check the email address" && (
                <p className="text-[#DB4444] text-xs">{data.error}</p>
              )}
            </div>
            <div className="w-full mb-10">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="outline-none border-b placeholder:text-sm sm:placeholder:pl-0 placeholder:pl-2"
              />
              {data && data.error === "Wrong password" && (
                <p className="text-[#DB4444] text-xs">{data.error}</p>
              )}
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="btn bg-[#DB4444] text-white text-xs sm:px-8 px-4 py-2 sm:py-3 rounded-sm"
              >
                Login
              </button>
              <span className="text-[#DB4444] text-xs ">Forgot Password?</span>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
