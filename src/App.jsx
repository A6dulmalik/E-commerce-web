import { AppProvider } from "./components/Context/AppContext";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
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
import SignUp from "./Pages/SignUp";
import NotFoundPage from "./Pages/NotFoundPage";
import Login from "./Pages/Login";
import Account from "./Pages/Account";
import signUpAction from "./Services/SignUp";
import loginAction from "./Services/Login";

function App() {
  const ProtectedRoute = ({ children }) => {
    const isAuthenticated = sessionStorage.getItem("user"); // Replace with sessionStorage if needed

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      // path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          path: "/",
          element: <SignUp />,
          action: signUpAction,
        },
        {
          // index: true,
          path: "/login",
          element: <Login />,
          action: loginAction,
        },
        {
          // index: "/home",
          path: "/home",
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
          path: "/account",
          element: (
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          ),
        },
        {
          path: "/products",
          element: (
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          ),
        },
        {
          path: "/item/:id",
          element: <Item />,
        },
        {
          path: "/cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
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
          element: (
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          ),
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
