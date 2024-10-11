import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiMobile4, CiMonitor } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa";
import { TbDeviceGamepad } from "react-icons/tb";

const categories = [
  { icon: <CiMobile4 />, label: "Phone" },
  { icon: <CiMonitor />, label: "Computers" },
  { icon: <BsSmartwatch />, label: "SmartWatch" },
  { icon: <CiCamera />, label: "Camera" },
  { icon: <FaHeadphones />, label: "HeadPhones" },
  { icon: <TbDeviceGamepad />, label: "Gaming" },
];

function BrowseByCategory() {
  return (
    <>
      {/* CATEGORY SECTION */}
      <div className="my-8 md:my-[5px] lg-2">
        {/* SALES INFO AND NAVIGATION ARROW */}
        <div className="sm:flex sm:items-baseline sm:justify-between ">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-3 bg-[#DB4444] rounded-sm " />
              <p className="text-sm text-[#DB4444] font-semibold">This Month</p>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight  text-gray-900">
              Browse By Category
            </h2>
          </div>
          {/* <div className="flex gap-5">
            <div className=" text-xl font-semibold bg-gray-100 p-2 rounded-full text-black hover:text-slate-500 sm:block">
              <FaArrowLeft />
            </div>
            <div className=" text-xl font-semibold bg-gray-100 p-2 rounded-full text-black hover:text-slate-500 sm:block">
              <FaArrowRight />
            </div>
          </div> */}
        </div>
        <div className="grid items-center justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-3 my-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border rounded-md md:my-16 m-2 py-8 hover:bg-gray-100"
            >
              <div className="font-light md:text-6xl text-3xl ">
                {category.icon}
              </div>
              <span>{category.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BrowseByCategory;
