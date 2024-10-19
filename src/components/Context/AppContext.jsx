import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const handleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      // Check if the product already exists in the wishlist
      const isInWishlist = prevWishlist.some((item) => item.id === product.id);

      if (isInWishlist) {
        // If the product is already in the wishlist, remove it
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        // If the product is not in the wishlist, add it
        return [...prevWishlist, product];
      }
    });
  };

  //Add to cart function
  const addToCart = (product) => {
    setCart((prevCart) => {
      return [...prevCart, product]; // Add product to Cart
    });
  };

  // const handleWishlist = (product) => {
  //   setWishlist((prevWishlist) => {
  //     return [...prevWishlist, product]; // Add product
  //   });
  // };

  return (
    <AppContext.Provider value={{ wishlist, cart, handleWishlist, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
