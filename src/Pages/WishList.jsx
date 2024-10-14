// import PropTypes from "prop-types";
import { useContext } from "react";
import AppContext from "../components/Context/AppContext";

function WishList() {
  const { wishlist } = useContext(AppContext);
  return (
    <div className="p-4 sm:p-6 lg:p-10 mt-20 sm:mt-28 lg:mt-40">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
        Your Wishlist
      </h1>
      {wishlist.length === 0 ? (
        <p className="mt-5">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="h-36 w-full object-contain"
              />
              <h3 className="text-md sm:text-lg font-semibold mt-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// WishList.propTypes = {
//   wishlist: PropTypes.array.isRequired,
//   handleWishlist: PropTypes.func.isRequired,
// };

export default WishList;
