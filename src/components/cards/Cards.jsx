import React from 'react'
import useBookData from '../../Hooks/useBookData'
import CardDefault from '../card/CardDefault';

const Cards = () => {
  const {bookData} = useBookData();
  return (
    <>
    <h1 className='md:text-5xl text-3xl font-bold text-center font-[Playfair-Display]'>Books</h1>
    <div className='grid md:grid-cols-3 justify-items-center gap-5'>
      {
        bookData.map((book, index) => <CardDefault key={index} book={book}/>)
      }
    </div>
    </>
  )
}

export default Cards
