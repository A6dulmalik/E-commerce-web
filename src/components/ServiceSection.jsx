import { RiCustomerServiceFill, RiShieldCheckLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

function ServiceSection() {
  return (
    <>
      {/* DELIVERY CUSTOMER AND GUARANTEE SECTION*/}
      <div className="flex sm:flex-row flex-col text-center sm:text-base text-xs justify-evenly items-center font-inter mt-20 mb-10">
        {/* Delivery */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center rounded-3xl w-12 h-12 bg-slate-400">
            <div className="flex items-center justify-center bg-black rounded-3xl h-4/5 w-4/5">
              <TbTruckDelivery className="stroke-white  md:text-2xl text-lg h" />
            </div>
          </div>
          <p className="font-bold">FREE AND FAST DELIVERY</p>
          <span>Free delivery for all orders over $140</span>
        </div>

        {/* Customer Service */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center rounded-3xl w-12 h-12 bg-slate-400">
            <div className="flex items-center justify-center bg-black rounded-3xl h-4/5 w-4/5">
              <RiCustomerServiceFill className="fill-white md:text-2xl text-lg h" />
            </div>
          </div>
          <p className="font-bold">24/7 CUSTOMER SERVICE</p>
          <span>Friendly 24/7 customer support</span>
        </div>

        {/* Money Back */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center rounded-3xl w-12 h-12 bg-slate-400">
            <div className="flex items-center justify-center bg-black rounded-3xl h-4/5 w-4/5">
              <RiShieldCheckLine className="fill-white md:text-2xl text-lg " />
            </div>
          </div>
          <p className="font-bold">MONEY BACK GUARANTEE</p>
          <span>We return money within 30 days</span>
        </div>
      </div>
    </>
  );
}

export default ServiceSection;
