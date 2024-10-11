import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Layout from "./Layout";
import Item from "./Pages/Item";
import Cart from "./Pages/Cart";
import WishList from "./Pages/WishList";
import { useState } from "react";

function App() {
  const [wishlist, setWishlist] = useState([]);

  const handleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      // Check if the product already exists in the wishlist
      const isInWishlist = prevWishlist.some((item) => item.id === product.id);

      // Only add the product if it's not already in the wishlist
      if (!isInWishlist) {
        return [...prevWishlist, product]; // Add product to wishlist
      }

      // If the product is already in the wishlist, return the list as is
      return prevWishlist;
    });
  };

  // const handleWishlist = (product) => {
  //   setWishlist((prevWishlist) => {
  //     return [...prevWishlist, product]; // Add product
  //   });
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout wishlist={wishlist} handleWishlist={handleWishlist} />,
      children: [
        {
          index: true,
          element: <Home wishlist={wishlist} handleWishlist={handleWishlist} />,
        },
        {
          path: "/products",
          element: (
            <Products wishlist={wishlist} handleWishlist={handleWishlist} />
          ),
        },
        {
          path: "/item/:id",
          element: <Item wishlist={wishlist} handleWishlist={handleWishlist} />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/wishlist",
          element: (
            <WishList wishlist={wishlist} handleWishlist={handleWishlist} />
          ), // Pass wishlist here
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
