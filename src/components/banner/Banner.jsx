import React from 'react'

const Banner = () => {
  return (
    <div className='bg-[#1313130d] w-full min-h-[555px] rounded-2xl flex md:flex-row flex-col gap-5 items-center justify-center md:p-32 p-6'>
      <div className='md:w-1/2 w-full'>
    <h1 className='md:text-5xl font-bold text-2xl mb-6 leading-[4rem]'>Books to freshen up your bookshelf</h1>
    <button className='px-4 py-2 rounded-lg bg-[#23BE0A] text-white font-semibold mt-6'> View The List</button>
      </div>
      <div className='md:w-1/2 w-full'>
        <img className='mx-auto' src="https://i.ibb.co/kJ3pK7k/pngwing-1.png" alt="" />
      </div>
    </div>
  )
}

export default Banner
