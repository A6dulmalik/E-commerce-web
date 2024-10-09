import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import ProductList from "./components/ProductList";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Layout from "./Layout";
import Item from "./Pages/Item";
import ProductList from "./components/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // index: true,
        path: "/home",
        element: <Home />,
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
