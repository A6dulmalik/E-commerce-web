import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import ProductList from "./components/ProductList";
import Home from "./Pages/Home";
import Products from "../Products/Home";
import Layout from "./Layout";

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
        path: "/products",
        element: <Products />,
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
