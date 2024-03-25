import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='bg-[#1313130d] w-full min-h-[555px] rounded-2xl flex md:flex-row flex-col gap-8 md:gap-5 items-center justify-center md:p-32 p-6'>
      <div className='md:w-1/2 w-full'>
    <h1 className='md:text-6xl font-bold text-2xl mb-6 leading-[4rem] font-[Playfair-Display]'>Books to freshen up your bookshelf</h1>
    <div className='mt-5 md:mt-10'>
    <Link to={"/listed-book"} className='px-4 py-3 rounded-lg bg-[#23BE0A] text-white font-semibold '> View The List</Link>
    </div>
      </div>
      <div className='md:w-1/2 w-full'>
        <img className='mx-auto' src="https://i.ibb.co/kJ3pK7k/pngwing-1.png" alt="" />
      </div>
    </div>
  )
}

export default Banner
