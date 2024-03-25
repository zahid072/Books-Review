import React from 'react'
import useBookData from '../Hooks/useBookData'
import CardDefault from '../card/CardDefault';

const Cards = () => {

  const {bookData} = useBookData();
  console.log(bookData)
  return (
    <div className='grid md:grid-cols-3 justify-items-center gap-5'>
      {
        bookData.map(book => <CardDefault key={book.id} book={book}/>)
      }
    </div>
  )
}

export default Cards
