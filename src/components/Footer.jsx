import { RxPaperPlane } from "react-icons/rx";
import barcode from "../assets/Qrcode.jpg";
import playstore from "../assets/gplay-store.jpg";
import appstore from "../assets/appstore.jpg";

const navigation = {
  support: [
    { name: "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.", href: "#" },
    { name: "exclusive@gmail.com", href: "#" },
    { name: "+88015-88888-9999", href: "#" },
  ],
  account: [
    { name: "My Account", href: "#" },
    { name: "Login / Register", href: "#" },
    { name: "Cart", href: "#" },
    { name: "Wishlist", href: "#" },
    { name: "Shop", href: "#" },
  ],
  quicklink: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms Of Use", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contact", href: "#" },
  ],
};

function Footer() {
  return (
    <>
      <footer aria-labelledby="footer-heading" className="bg-black w-full">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-3 sm:pt-12 lg:px-8 lg:pt-10">
          <div className="xl:grid xl:grid-cols-4 xl:gap-8">
            <div className="my-10 xl:mt-0">
              <h3 className="text-xl font-bold leading-6 text-white">
                Exclusive
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">Subscribe</p>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Get 10% off your first order
              </p>
              <form className="mt-6 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <div className="">
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    required
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="relative w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                  />
                  <RxPaperPlane className="absolute text-white translate-x-[15em]  sm:translate-x-[9.5rem] -translate-y-[1.6rem]" />
                </div>
              </form>
            </div>
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="mt-10 md:mt-0">
                  <h3 className="font-semibold leading-6 text-white">
                    Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="font-semibold leading-6 text-white">
                    Account
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.account.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="font-semibold leading-6 text-white">
                    Quick Link
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.quicklink.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl text-white">Download App</p>
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
        </div>
      </footer>
    </>
  );
}

export default Footer;
