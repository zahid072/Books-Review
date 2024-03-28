import React, { useEffect, useState } from "react";
import { MdDateRange } from "react-icons/md";
import { MdFindInPage } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
const ListedBookCard = ({ book }) => {
  const [data, setData] = useState({});
  const {
    image,
    bookId,
    bookName,
    author,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = data;
  useEffect(() => {
    if (book) {
      setData(book);
    }
  }, [book]);


  return (
    <div className="mb-6">
      <div className="md:flex w-full border-2 p-5 rounded-lg space-x-2 sm:space-x-4">
        <div className="md:w-60 md:h-56 bg-gray-500 rounded-lg flex items-center">
          <img
            className="flex-shrink-0 object-cover  md:h-52 mx-auto border-transparent rounded outline-none "
            src={image}
            alt={bookName}
          />
        </div>
        <div className="md:flex flex-col space-y-4 w-full">
          <div className="flex justify-between w-full space-x-2">
            <div className="space-y-1 ">
              <h3 className="text-lg font-semibold leading-snug mt-5">
                {bookName}
              </h3>
              <p className="text-sm">By: {author}</p>
            </div>
          </div>
          <div className="md:flex justify-start items-center gap-8">
            <div className="flex gap-4 md:mb-0 mb-4">
              <h3 className="font-bold text-xl">Tag</h3>
              <h3 className="px-3 py-1 rounded-full bg-[#23be0a0d] text-[#23BE0A]">
                #{tags?.[0]}
              </h3>
              <h3 className="px-3 py-1 rounded-full bg-[#23be0a0d] text-[#23BE0A]">
                #{tags?.[1]}
              </h3>
            </div>

            <p><MdDateRange className="inline text-2xl"/> Year of Publishing: {yearOfPublishing}</p>
          </div>
          <div className="md:flex justify-start items-center gap-8">
            <p className="mb-4 md:mb-0"><FiUsers className="inline text-2xl"/> Publisher: {publisher}</p>
            <p><MdFindInPage className="inline text-2xl"/> Pages: {totalPages}</p>
          </div>

          <div className="flex md:flex-row flex-col justify-start border-t-2 pt-4 md:items-center gap-8">
            <p>
              <span className="bg-[#328eff26] rounded-full px-5 py-2 text-[#11a6fc] font-semibold">
                Category: {category}
              </span>
            </p>

            <p>
              <span className="bg-[#ffac3326] rounded-full px-5 py-2 text-[#FFAC33] font-semibold">
                Ratings: {rating}
              </span>
            </p>

            <div className=" w-1/2">
              <Link to={`/book-details/${bookId}`}>
                <button className="px-4 py-3 rounded-lg bg-[#23BE0A] text-white font-semibold">
                  View details
                </button>
              </Link>
            </div>
          </div>
        </div>
            
      </div>
    </div>
  );
};

export default ListedBookCard;
