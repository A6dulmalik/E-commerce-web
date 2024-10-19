function Account() {
  return (
    <>
      <div className="mt-48 sm:36 mx-auto max-w-7xl font-inter flex sm:flex-row flex-col justify-between">
        <div className="text-center">
          <div>
            <p className="font-semibold text-lg">Manage My Account</p>
            <ul className="text-slate-600 mt-4">
              <li>My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </div>

          {/* My Orders */}
          <div className=" mt-4">
            <p className="font-semibold text-lg ">My Orders</p>
            <ul className="text-slate-600 mt-4">
              <li>My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </div>

          {/* My Wishlist */}
          <div className="mt-4">
            <p className="font-semibold text-lg ">My Wishlist</p>
          </div>
        </div>

        {/* Profile form */}
        <div className="shadow-lg sm:w-3/4 w-full py-8 px-16">
          <h1 className="mb-4 text-lg text-[#DB4444] font-semibold">
            Edit Your Profile
          </h1>
          {/* Name inputs */}
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 mb-5">
            <div className="">
              <label htmlFor="fname">First Name</label>
              <input
                placeholder="John"
                className="py-2 px-2 border rounded w-full bg-[#F5F5F5]"
              />
            </div>
            <div className="">
              <label htmlFor="fname">Last Name</label>
              <input
                placeholder="Doe"
                className="py-2 px-2 border rounded w-full bg-[#F5F5F5]"
              />
            </div>
          </div>

          {/* Email and Address */}
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 mb-5">
            <div className="">
              <label htmlFor="fname">Email</label>
              <input
                placeholder="youremail@example.com"
                className="py-2 px-2 border rounded bg-[#F5F5F5] w-full"
              />
            </div>
            <div className="">
              <label htmlFor="fname">Address</label>
              <input
                placeholder=""
                className="py-2 px-2 border rounded bg-[#F5F5F5] w-full"
              />
            </div>
          </div>

          {/* Password Changes */}
          <div className="">
            <label htmlFor="">Password Changes</label>
            <input
              placeholder=""
              className="border rounded bg-[#F5F5F5] w-full py-2 px-2 my-4"
            />
            <input
              placeholder=""
              className="border rounded bg-[#F5F5F5] w-full py-2 px-2 my-4"
            />
            <input
              placeholder=""
              className="border rounded bg-[#F5F5F5] w-full py-2 px-2 my-4"
            />
          </div>

          {/* Cancel and Save button */}
          <div className="flex items-center justify-end gap-5">
            <button className="text-sm">Cancel</button>
            <button className="rounded bg-[#DB4444] sm:py-2 py-1 sm:px-8 px-2 sm:text-sm text-xs text-white text-center">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
