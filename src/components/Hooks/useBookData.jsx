const useBookData = () => {
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        const fetchBook = async ()=>{
            const res = await fetch('./books.json')
            const data = await res.json()

            setBookData(data)
        }
        fetchBook();
    }, []);
  return {bookData}
}

export default useBookData
