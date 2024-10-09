import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiMobile4, CiMonitor } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight, FaHeadphones } from "react-icons/fa";
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
      <div className="my-8">
        {/* SALES INFO AND NAVIGATION ARROW */}
        <div className="sm:flex sm:items-baseline sm:justify-between ">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-3 bg-[#DB4444] rounded-sm " />
              <p className="text-sm text-[#DB4444] font-semibold">Categories</p>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
              Browse By Category
            </h2>
          </div>
          <div className="flex gap-5">
            <div className="hidden text-xl font-semibold bg-gray-100 p-2 rounded-full text-black hover:text-slate-500 sm:block">
              <FaArrowLeft />
            </div>
            <div className="hidden text-xl font-semibold bg-gray-100 p-2 rounded-full text-black hover:text-slate-500 sm:block">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className=" grid grid-flow-col gap-10 ">
          {categories.map((category, index) => (
            <div
              key={index}
              className=" w-[158px] h-[135px] text-center border rounded-md my-16 hover:bg-gray-100"
            >
              <div className="font-light text-6xl px-12 py-5 ">
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
