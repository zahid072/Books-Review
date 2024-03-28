import React, { useEffect, useState } from "react";
import ListedBookCard from "../../listedBookCard/ListedBookCard";
import useBookData from "../../../Hooks/useBookData";
import { getStoredBooks } from "../../../Utility/LocalStorage";

const Wishlist = ({ sortBy }) => {
  const [allBooks, setAllBooks] = useState([]);
  const { bookData } = useBookData();
  const getReadId = getStoredBooks("wishlistBook");

  useEffect(() => {
    const bookArry = [];
    for (let id of getReadId) {
      const filteredBooks = bookData.find((book) => book.bookId === id);
      bookArry.push(filteredBooks);
    }
    const sorted = bookArry.sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating;
      } else if (sortBy === "numberOfPages") {
        return b.totalPages - a.totalPages;
      } else if (sortBy === "publisherYear") {
        return b.yearOfPublishing - a.yearOfPublishing;
      }
    });
    if (sorted) {
      setAllBooks(sorted);
    }
  }, [bookData, sortBy]);

  return (
    <>
      {allBooks.map((book, index) => (
        <ListedBookCard key={index} book={book} />
      ))}
      {allBooks.length === 0 && (
        <img
          className="md:size-[400px] size-72"
          src="https://i.ibb.co/JtXPDMp/search-magnifier-magnifying-emoj.png"
          alt=""
        />
      )}
    </>
  );
};

export default Wishlist;
