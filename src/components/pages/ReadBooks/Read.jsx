import React, { useEffect, useState } from "react";
import ListedBookCard from "../../listedBookCard/ListedBookCard";
import { getStoredBooks } from "../../../Utility/LocalStorage";
import useBookData from "../../../Hooks/useBookData";
const Read = () => {
  const [allBooks, setAllBooks] = useState([]);
  const { bookData } = useBookData();
  const getReadId = getStoredBooks("readBook");

  useEffect(() => {
    const bookArry = [];
    for (let id of getReadId) { 
      const filteredBooks = bookData.find((book) => book.bookId === id);
      bookArry.push(filteredBooks);
    }
    if (bookArry.length > 0) {
      setAllBooks(bookArry);
    }
  }, [bookData]);
  
  return (
    <>
      {
        allBooks.map((book, index)=> <ListedBookCard key={index} book={book} />)
      }
    </>
  );
};

export default Read;
