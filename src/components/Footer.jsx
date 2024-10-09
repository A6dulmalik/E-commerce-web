import { RxPaperPlane } from "react-icons/rx";
import barcode from "../assets/Qrcode.jpg";
import playstore from "../assets/gplay-store.jpg";
import appstore from "../assets/appstore.jpg";

function Footer() {
  return (
    <>
      <div className=" bg-black h-[300px] w-full">
        <div className="flex justify-between text-white border-b border-gray-800 m-auto px-20 py-10">
          <div className="">
            <p className="text-2xl font-semibold mb-3">Exclusive</p>
            <div>
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
          </div>

          {/* Support */}
          <div className="w-44">
            <p className="text-xl mb-4">Support</p>
            <div>
              <p>111 Bijay srani, Dhaka, DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88014-88888-9999</p>
            </div>
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

          {/* Quick Link */}
          <div>
            <p className="text-xl font-semibold">Account</p>
            <p>Quick Link</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>

          {/* Download */}
          <div>
            <p className="text-xl">Download App</p>
            <p className="text-sm text-gray-400">
              Save S3 with App New User Only
            </p>
            <div className="flex gap-3">
              <img src={barcode} alt="" />

              <div className="flex flex-col gap-3">
                <img src={playstore} alt="Google Play" />
                <img src={appstore} alt="App Store" />
              </div>
            </div>
          </div>
        </div>
        <span className="text-gray-800">
          © Copyright Rimel {new Date().getFullYear()}. All right reserved
        </span>
      </div>
    </>
  );
}

export default Footer;
