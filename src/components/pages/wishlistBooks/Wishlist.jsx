import React, { useEffect, useState } from "react";
import ListedBookCard from "../../listedBookCard/ListedBookCard";
import useBookData from "../../../Hooks/useBookData";
import { getStoredBooks } from "../../../Utility/LocalStorage";

const Wishlist = () => {
  const [allBooks, setAllBooks] = useState([]);
  const { bookData } = useBookData();
  const getReadId = getStoredBooks("wishlistBook");

  console.log(getReadId);
  useEffect(() => {
    const bookArry = [];
    for (let id of getReadId) {
      console.log(id);
      const filteredBooks = bookData.find((book) => book.bookId === id);
      console.log("object", filteredBooks);
      bookArry.push(filteredBooks);
    }
    if (bookArry.length > 0) {
      setAllBooks(bookArry);
    }
  }, [bookData]);
  console.log(allBooks);
  return (
    <>
      {allBooks.map((book, index) => (
        <ListedBookCard key={index} book={book} />
      ))}
    </>
  );
};

export default Wishlist;
