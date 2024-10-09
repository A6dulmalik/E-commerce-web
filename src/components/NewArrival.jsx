import ps5 from "../assets/ps5.jpg";
import wCollection from "../assets/womensCollection.jpg";
import speakers from "../assets/speakers.jpg";
import perfume from "../assets/perfume.jpg";

function NewArrival() {
  return (
    <>
      {/* NEW ARRIVAL */}
      <div className="mt-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-3 bg-[#DB4444] rounded-sm " />
            <p className="text-sm text-[#DB4444] font-semibold">Featured</p>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-12">
            New Arrival
          </h2>
        </div>
        <div className="flex justify-between">
          <img src={ps5} />
          <div className="flex flex-col justify-between">
            <img src={wCollection} />
            <div className="flex justify-between">
              <img src={speakers} />
              <img src={perfume} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
