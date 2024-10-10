import monitor from "../assets/monitor.jpg";
import gamepad from "../assets/gamepad.jpg";

const items = [
  {
    image: monitor,
    title: "LCD Monitor",
    price: "$650",
    subtotal: "$650",
  },
  {
    image: gamepad,
    title: "H1 Gamepad",
    price: "$650",
    subtotal: "$1100",
  },
];

function Cart() {
  return (
    <>
      <div className="w-full my-5 font-inter text-sm sm:text-base font-normal">
        {/* Heading */}
        <div className="flex justify-between shadow-lg p-4 text-sm sm:text-base font-normal">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        <div className="w-full ">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-3 my-5 shadow-lg "
            >
              <div className="flex gap-4">
                <div className="sm:w-14 w-10 sm:h-14 h-10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-2/3"
                  />
                </div>
                <p className="text-sm sm:text-base font-normal">{item.title}</p>
              </div>
              <p className="text-sm sm:text-base font-normal">{item.price}</p>
              <div className="border w-11 h-5 "></div>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
        {/* Return to shop AND Update button */}
        <div className="flex flex-wrap justify-between">
          <button className="border-2 hover:border-slate-950 rounded px-10 py-2 text-sm font-medium">
            Return To Shop
          </button>
          <button className="border-2 hover:border-slate-950 rounded px-10 py-2 text-sm font-medium">
            Update Cart
          </button>
        </div>

        {/*COUPON INPUT AND CART TOTAL */}
        <div className="my-16 flex flex-wrap sm:gap-10 justify-between w-full">
          {/* Coupon code input and button */}
          <div className="flex gap-4 h-fit">
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
              <span>$1750</span>
            </p>
            <hr />
            <p className="flex flex-shrink justify-between my-3 font-light">
              <span>Shipping:</span>
              <span>Free</span>
            </p>
            <hr />
            <p className="flex flex-shrink justify-between my-3 font-light">
              <span>Total:</span>
              <span>$1750</span>
            </p>
            <div className="flex items-center justify-center mt-5">
              <button className=" rounded bg-[#DB4444] text-white text-xs font-light py-3 px-7 ">
                Process to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
