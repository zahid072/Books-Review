import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const BooksList = () => {
  const location = useLocation();
  const [sortBy, setSortBy] = useState("");

  const handleSelect = (e) => {
    setSortBy(e.target.value);
  };
  console.log(location);
  return (
    <div>
      <div className="w-full rounded-xl py-8 text-center bg-[#1313130d]">
        <h1 className="text-5xl font-bold">Books</h1>
      </div>
      <div className="w-full flex py-8 justify-center">
        <select
          onChange={handleSelect}
          name="SortBy"
          className="px-3 py-3 rounded-lg bg-[#23BE0A] text-center outline-none text-white font-semibold"
        >
          <option className="text-black bg-gray-100" value="">
            Sort by
          </option>
          <option className="text-black bg-gray-100" value="rating">
            Rating
          </option>
          <option className="text-black bg-gray-100 " value="numberOfPages">
            Number of Pages
          </option>
          <option className="text-black bg-gray-100 " value="publisherYear">
            Publisher Year
          </option>
        </select>
      </div>
      <div className="flex w-full mb-5">
        <Link
          className={`py-2 px-6 ${
            location.pathname === "/listed-book" ? " border-x-2 border-t-2 rounded-t-lg" : "border-b-2"
          }`}
          to={"/listed-book"}
        >
          Read
        </Link>
        <Link
          className={`py-2 px-6 ${
            location.pathname === "/listed-book/wishlist-books"
              ? " border-x-2 border-t-2 rounded-t-lg" : "border-b-2"
          }`}
          to={"/listed-book/wishlist-books"}
        >
          Wishlist
        </Link>

        <div className="border-b-2 w-full py-2"></div>
      </div>
      <Outlet />
    </div>
  );
};

export default BooksList;
