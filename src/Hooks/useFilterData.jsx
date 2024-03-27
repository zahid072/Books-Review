import React, { useEffect, useState } from "react";
import { getStoredBooks } from "../Utility/LocalStorage";
import useBookData from "./useBookData";

const useFilterData = () => {
  const getReadId = getStoredBooks("readBook");
  const [filteredData, setFilteredData] = useState([]);
  const { bookData } = useBookData();
  console.log(bookData);
  console.log(getReadId);
  useEffect(() => {
    const allFilteredData = [];
    for (let id of getReadId) {
      const filterBookData = bookData.find((book) => book.bookId === id);
      allFilteredData.push(filterBookData);
    }
    if (allFilteredData.length > 0) {
      setFilteredData(allFilteredData);
    }
  }, [bookData]);
  return { filteredData };
};

export default useFilterData;
