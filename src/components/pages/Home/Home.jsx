import React from 'react'
import Banner from '../../banner/Banner'
import Cards from '../../cards/Cards'

const Home = () => {
  return (
    <>
    <div>
      <Banner/>
    </div>
    <div className='md:my-20 mt-8'>
      <Cards/>
    </div>
    </>
  )
}

export default Home
