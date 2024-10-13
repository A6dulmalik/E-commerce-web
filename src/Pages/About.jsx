import { FaSackDollar, FaShop } from "react-icons/fa6";
import sideImage from "../assets/AboutSideImage.jpg";
import { FaInstagram, FaShoppingBag } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
// import tCruise from "../assets/tCruise.jpg";
import tomCruise from "../assets/tCruise.jpg";
import eWatson from "../assets/eWatson.jpg";
import wSmith from "../assets/wSmith.jpg";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import ServiceSection from "../components/ServiceSection";

const teams = [
  {
    name: "Nafi'u Ishaq",
    role: "Founder & Chairman",
    image: tomCruise,
    xIcon: <CiTwitter />,
    igIcon: <FaInstagram />,
    linked: <RiLinkedinLine />,
  },
  {
    name: "Fatima Amin",
    role: "Managing Director",
    image: eWatson,
    xIcon: <CiTwitter />,
    igIcon: <FaInstagram />,
    linked: <RiLinkedinLine />,
  },
  {
    name: "Ahmad Abdulkareem",
    role: "Product Designer",
    image: wSmith,
    xIcon: <CiTwitter />,
    igIcon: <FaInstagram />,
    linked: <RiLinkedinLine />,
  },
];

function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 mt-40 font-inter">
      {/* Our Story Section */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8 ">
        {/* // <div className="flex items-center font-inter mt-36"> */}
        <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Our Story
          </h2>
          <p className="mt-6 leading-8 text-gray-600">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>

        {/* Top Image */}
        <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
          <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
            <img
              alt=""
              src={sideImage}
              className="aspect-[7/5] sm:w-[35rem] w-full max-w-none rounded-2xl bg-gray-50 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8 items-center my-28 font-inter">
        {/* active Sellers */}
        <div className="border rounded flex flex-col items-center gap-3 py-3 ">
          <div className="flex items-center justify-center rounded-3xl w-12 h-12 bg-slate-400">
            <div className="flex items-center justify-center bg-black rounded-3xl h-4/5 w-4/5">
              <FaShop className="stroke-white text-white text-2xl h" />
            </div>
          </div>
          <p className="font-bold text-2xl">10.5k </p>
          <span>Sallers active our site</span>
        </div>

        {/* monthly product */}
        <div className="border rounded flex flex-col items-center gap-3 py-3 bg-[#DB4444] ">
          <div className="flex items-center justify-center rounded-3xl w-12 h-12 bg-[#e97676]">
            <div className="flex items-center justify-center bg-white rounded-3xl h-4/5 w-4/5">
              <HiOutlineCurrencyDollar className=" text-3xl h" />
            </div>
          </div>
          <p className="font-bold text-2xl text-white">33k</p>
          <span className="text-white">Monthly Product Sale</span>
        </div>

        {/* customers active */}
        <div className="border rounded flex flex-col items-center gap-3 py-3 ">
          <div className="flex items-center justify-center rounded-3xl w-12 h-12 bg-slate-400">
            <div className="flex items-center justify-center bg-black rounded-3xl h-4/5 w-4/5">
              <FaShoppingBag className="stroke-white text-white text-2xl h" />
            </div>
          </div>
          <p className="font-bold text-2xl">45.5k </p>
          <span>Customers active in our site</span>
        </div>

        {/* annual gross */}
        <div className="border rounded flex flex-col items-center gap-3 py-3 ">
          <div className="flex items-center justify-center rounded-3xl w-12 h-12 bg-slate-400">
            <div className="flex items-center justify-center bg-black rounded-3xl h-4/5 w-4/5">
              <FaSackDollar className="stroke-white text-white text-2xl h" />
            </div>
          </div>
          <p className="font-bold text-2xl">25k </p>
          <span>Anual gross sale in our site</span>
        </div>
      </div>

      {/* Team Section */}
      <ul
        role="list"
        className="mx-auto mt-5 grid max-w-2xl grid-cols-1 place-items-center gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        {teams.map((team, index) => (
          <li key={index}>
            <img
              alt=""
              src={team.image}
              className="aspect-[4/5] w-52 flex-none object-contain"
            />
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">
              {team.name}
            </h3>
            <p className="text-base leading-7 text-gray-600">{team.role}</p>
            <ul role="list" className="mt-2 flex gap-x-6">
              <li>
                <a
                  href={team.xUrl}
                  className="text-gray-400 hover:text-gray-500"
                >
                  {/* <span className="sr-only">X</span> */}
                  {team.xIcon}
                </a>
              </li>
              <li>
                <a
                  href={team.linkedinUrl}
                  className="text-gray-400 hover:text-gray-500"
                >
                  {team.igIcon}
                </a>
              </li>
              <li>
                <a
                  href={team.linkedinUrl}
                  className="text-gray-400 hover:text-gray-500"
                >
                  {team.linked}
                </a>
              </li>
            </ul>
          </li>
        ))}
      </ul>

      {/* Services Section */}
      <ServiceSection />
    </div>
  );
}

export default About;
