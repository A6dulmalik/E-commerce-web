// import monitor from "../assets/monitor.jpg";
// import gamepad from "../assets/gamepad.jpg";
import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";
import AppContext from "../components/Context/AppContext";
import { useContext } from "react";

// const items = [
//   //  heading ["Product", "Price", "Quantity", "Subtotal"],
//   {
//     image: monitor,
//     title: "LCD Monitor",
//     price: "$650",
//     subtotal: "$650",
//   },
//   {
//     image: gamepad,
//     title: "H1 Gamepad",
//     price: "$650",
//     subtotal: "$1100",
//   },
// ];

function Cart() {
  const { cart } = useContext(AppContext);
  const subTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  return (
    <>
      <div className="w-full my-5 font-inter text-sm sm:text-base font-normal mt-36 mx-auto max-w-7xl px-4">
        {/* Heading */}

        <div className="mt-38 flow-root">
          {cart.length === 0 ? (
            <div className="text-4xl text-center">No items in Cart</div>
          ) : (
            <>
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="my-8">
                      <tr className="shadow-lg">
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left font-semibold text-gray-900 sm:pl-0"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left font-semibold text-gray-900"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left font-semibold text-gray-900"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left font-semibold text-gray-900"
                        >
                          Subtotal
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {cart.map((item, index) => (
                        <tr key={index}>
                          <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                            <div className="flex items-center">
                              <div className="sm:flex gap-6 items-center h-11 w-11">
                                <img
                                  alt=""
                                  src={item.image}
                                  className="h-8 w-11"
                                />
                                <span className="sm:text-base text-xs">
                                  {item.title.substring(0, 12)}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                            <div className="mt-1 text-gray-500">
                              ${item.price}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                            <span className="inline-flex items-center   text-xs font-medium">
                              <input
                                type="number"
                                className="w-7 h-7 outline-none border rounded px-6 py-4"
                              />
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                            ${item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/*COUPON INPUT AND CART TOTAL */}
              <div className="my-16 flex flex-wrap sm:gap-10 justify-between w-full">
                {/* Coupon code input and button */}
                <div className="flex flex-wrap gap-4 h-fit mb-4">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="border rounded border-black py-2 px-3 placeholder:text-sm"
                  />
                  <button
                    type="button"
                    className="rounded bg-[#DB4444] text-white px-11 py-2"
                  >
                    Apply Coupon
                  </button>
                </div>

                {/* Cart Total */}
                <div className="border w-96 py-8 px-4 h-72">
                  <p className="font-medium text-xl mb-5">Cart Total</p>
                  <p className="flex flex-shrink justify-between mb-3 font-light">
                    <span>Subtotal:</span>
                    <span>
                      {/* ${cart.reduce((acc, item) => acc + item.price, 0)} */}
                      ${subTotal()}
                    </span>
                  </p>
                  <hr />
                  <p className="flex flex-shrink justify-between my-3 font-light">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </p>
                  <hr />
                  <p className="flex flex-shrink justify-between my-3 font-light">
                    <span>Total:</span>
                    <span>${subTotal()}</span>
                  </p>
                  <div className="flex items-center justify-center mt-5">
                    <NavLink
                      to="/cart/checkout"
                      className=" rounded bg-[#DB4444] text-white text-xs font-light py-3 px-7 "
                    >
                      Process to checkout
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* <div className="">
        {cart.map((item, index) => {
          return (
            <div key={index} className="">
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div> */}
    </>
  );
}

// Cart.propTypes = {
//   cart: PropTypes.array.isRequired,
//   addToCart: PropTypes.func.isRequired,
// };

export default Cart;
