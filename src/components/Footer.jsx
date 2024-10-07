import { RxPaperPlane } from "react-icons/rx";

function Footer() {
  return (
    <>
      <div className="flex justify-between items-center bg-black text-white">
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-semibold">Exclusive</p>
          <p className="text-xl">Subscribe</p>
          <span>Get 10% off your first order</span>
          <div className="flex justify-center items-center w-52 border border-white py-1 px-3">
            <input
              className="bg-inherit outline-none w-5/6 placeholder:text-gray-600"
              placeholder="Enter your email"
            />
            <RxPaperPlane className="text-xl font-extrabold" />
          </div>
        </div>

        {/* Support */}
        <div className="">
          <p className="text-xl">Support</p>
          <p>111 Bijay srani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88014-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <p className="text-xl font-semibold">Account</p>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        {/* Download */}
        <div>
          <p className="text-xl">Download App</p>
          <p className="text-sm text-gray-400">
            Save S3 with App New User Only
          </p>
          <div className="">
            <div className="border"></div>
            <div className="">
              <div className="border border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
