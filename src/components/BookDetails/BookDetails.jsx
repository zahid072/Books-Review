import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBookData from "../../Hooks/useBookData";

const BookDetails = () => {
  const bookId = useParams();
  const {bookData} = useBookData();
  const [data, setData] = useState({});
  const { image, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = data;
  useEffect(() => {
        const findBookData = bookData.find((book) => bookId.id == book.bookId);
        if(findBookData){
          setData(findBookData);
        }
  }, [bookData, bookId]);
 
  return (
   <>
    <div className="w-full h-full flex gap-12 md:flex-row flex-col">
      <div className="md:w-1/2 w-full bg-[#F3F3F3] rounded-xl">
        <img src={image} alt="" className="mx-auto " />
      </div>
      <div className="md:w-1/2 w-full">
        <div>
          <h1 className="text-4xl my-5 font-bold">{bookName}</h1>
          <p className="text-xl font-semibold text-[#131313cc]">By: {author}</p>
          <h3 className="border-t-2 mt-4 py-4 text-xl font-semibold text-[#131313cc]">{category}</h3>
          <div className="border-y-2 py-6">
              <p><span className="font-bold">Review:</span> {review}</p>
              <div className="flex gap-4 mt-6">
                <h3 className="font-bold text-xl">Tag</h3>
                <h3 className="px-3 py-1 rounded-full bg-[#23be0a0d] text-[#23BE0A]">#{tags?.[0]}</h3>
                <h3 className="px-3 py-1 rounded-full bg-[#23be0a0d] text-[#23BE0A]">#{tags?.[1]}</h3>
              </div>
          </div>
          <div className="py-6 flex gap-14">
            <div>
            <h3 className="text-[#131313b3] mb-4">Number of Pages:</h3>
            <h3 className="text-[#131313b3] mb-4">Publisher:</h3>
            <h3 className="text-[#131313b3] mb-4">Year of Publishing:</h3>
            <h3 className="text-[#131313b3] ">Rating:</h3>
            </div>
            <div>
            <h3 className="font-bold mb-4"> {totalPages}</h3>
            <h3 className="font-bold mb-4"> {publisher}</h3>
            <h3 className="font-bold mb-4"> {yearOfPublishing}</h3>
            <h3 className="font-bold"> {rating}</h3>
            </div>
          </div> 
        </div>
        <div className="flex gap-4">
          <button
            variant="text"
            className="px-4 py-2 border-2 rounded-lg hover:bg-[#23BE0A] hover:text-white text-black"
          >
            Read
          </button>
          <button
            variant="text"
            className="px-4 py-2 rounded-lg bg-[#50B1C9] hover:bg-[#469cb2] text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
   </>
  );
};

export default BookDetails;

