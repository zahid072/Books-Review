import React, { useState } from "react";
import Read from "../ReadBooks/Read";
import Wishlist from "../wishlistBooks/Wishlist";

const BooksList = () => {
  const [isValue, setIsValue] = useState(true);
  const [sortBy, setSortBy] = useState("");

  const handleSelect = (e) => {
    setSortBy(e.target.value);
  };
  const handleReadNavigation = () => {
   setIsValue(true)
  };
  const handleWishlistNavigation = () => {
   setIsValue(false)
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
        <button
        onClick={handleReadNavigation}
          className={`py-2 px-6 ${isValue === true ? "border-x-2 border-t-2 rounded-t-lg": "border-b-2"}
          `}
        >
          Read
        </button>
        <button
        onClick={handleWishlistNavigation}
          className={`py-2 px-6 ${isValue === false ? "border-x-2 border-t-2 rounded-t-lg": "border-b-2"}`}
        >
          Wishlist
        </button>
        <div className="border-b-2 w-full py-2"></div>
      </div>
          {
            isValue && (
              <Read/>
            )
          }
          {
            !isValue && (
              <Wishlist/>
            )
          }
    </div>
  );
};

export default BooksList;
