import React, { useEffect, useState } from "react";
import useBookData from "../../../Hooks/useBookData";
import CardDefault from "../../card/CardDefault";

const NewRelease = () => {
  const [books, setBooks] = useState([]);
  const { bookData } = useBookData();

  useEffect(() => {
    const filteredBookData = bookData.filter(
      (book) => book.yearOfPublishing > 2000
    );

    if (filteredBookData) {
      setBooks(filteredBookData);
    }
  }, [bookData]);
  console.log(books);

  return (
    <>
      <h1 className="text-center md:text-5xl text-3xl font-bold py-5">
        New Releases Books
      </h1>
      <div className="grid md:grid-cols-3 gap-6 justify-items-center">
        {books.map((book, index) => (
          <CardDefault key={index} book={book} />
        ))}
      </div>
    </>
  );
};

export default NewRelease;
