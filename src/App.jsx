import { AppProvider } from "./components/Context/AppContext";
import {
  createBrowserRouter,
  redirect,
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

function App() {
  //SignUp function
  const signUpAction = async ({ request }) => {
    const data = await request.formData();

    const user = {
      email: data.get("email"),
      password: data.get("password"),
    };

    // Storing user in session storage for accessibility during login
    sessionStorage.setItem("user", JSON.stringify(user));

    // Email validation constant (Note the case-insensitivity with the 'i' flag)
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    // Separate email validation check
    if (!emailRegex.test(user.email)) {
      return { error: "Invalid email address" };
    }

    // Separate password validation check
    if (user.password.length < 6) {
      return { error: "At least 6 characters long" };
    }

    // Redirect to login if both validations pass
    return redirect("/login");
  };

  //Login function
  const loginAction = async ({ request }) => {
    const data = await request.formData();
    // console.log(data);

    const submission = {
      email: data.get("email"),
      password: data.get("password"),
    };

    const checkUser = JSON.parse(sessionStorage.getItem("user"));

    if (submission.email !== checkUser.email) {
      return { error: "Please check the email address" };
    }

    if (submission.password !== checkUser.password) {
      return { error: "Wrong password" };
    }

    return redirect("/home");
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
          element: <Account />,
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
