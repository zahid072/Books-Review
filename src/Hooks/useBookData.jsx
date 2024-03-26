import { useEffect, useState } from "react";

const useBookData = () => {
    const [bookData, setBookData] = useState([]);
    useEffect(() => {
        fetch("https://zahid072.github.io/book-data/books.json")
        .then(res => res.json())
        .then(data => {
            setBookData(data)
        })
    }, []);
  return {bookData}
}

export default useBookData
