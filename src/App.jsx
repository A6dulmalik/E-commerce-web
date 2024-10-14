import { AppProvider } from "./components/Context/AppContext";
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
import CheckOut from "./Pages/CheckOut";
import { SignUp } from "./Pages/SignUp";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
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
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/item/:id",
          element: <Item />,
        },
        {
          path: "/cart",
          element: <Cart />,
          children: [
            {
              path: "checkout",
              element: <CheckOut />,
            },
          ],
        },
        {
          path: "/checkout",
          element: <CheckOut />,
        },
        {
          path: "/wishlist",
          element: <WishList />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </>
  );
}

export default App;
