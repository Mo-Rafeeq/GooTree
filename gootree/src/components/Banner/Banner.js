import React from 'react'
import logo from '../../assets/Hero/hero.jpg'

const Banner = () => {
  return (
    <section className=' '>
     <div className='flex justify-around items-center'>
       <div className='w-full object-cover'> <img src={logo} alt='banner' /></div>
       <div className='absolute ml-10 p-8 '>
       <div className='mt-3 mb-2'>
          <h2 className='text-6xl font-serif text-lime-900'>Buy a Planter .,</h2>
          <span className='text-6xl font-sans  text-lime-900'>get a grow light free</span>
       </div>
        <p className='text-md mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita temporibus hic placeat sit, numquam, exercitationem nesciunt consectetur vero consequatur quis esse ha</p>
        <button className='border  rounded-md  border-gray-500 px-3 py-2 m-3 font-serif text-sm '>SHOP NOW</button>
  
       </div>
     </div>
    </section>
  )
}

export default Banner