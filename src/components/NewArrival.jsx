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
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <img src={ps5} />
          </div>
          <div className="grid gap-4">
            <img src={wCollection} />
            <div className="grid sm:grid-cols-2 gap-4 w-full">
              <img src={speakers} width={360} />
              <img src={perfume} width={360} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
