import React from 'react'

const Header = () => {
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
        <ul className='hidden sm:flex px-4 '>
            <li className='p-4'><a href="/">Home</a></li>
            <li className='p-4'><a href="#gallery">Shop</a></li>
            <li className='p-4'><a href="#deals">Product</a></li>
            <li className='p-4'><a href="#contact">Contact</a></li>
        </ul>
        <div className='flex justify-between'>
           


        </div>
        {/* hamburger icon */}
        <div className='sm:hidden z-10'>
            {/* <FaBars onClick={handleclick} size={20} className='mr-4 cursor-pointer'/> */}
            

        </div>
        {/* mobile menu */}
        
        {/* <div className={nav?'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 bg-black w-full h-screen px-4 py-7 flex flex-col':"absolute  h-screen top-0 left-[-100%] ease-in duration-500"}>
        <ul className='w-full h-full text-center pt-12'>
            <li className='text-2xl py-8'><a href="/">Home</a></li>
            <li className='text-2xl py-8'><a href="#gallery">Gallery</a></li>
            <li className='text-2xl py-8'><a href="#deals">Deals</a></li>
            <li className='text-2xl py-8'><a href="#contact">Contact</a></li>
        </ul>
        </div> */}


    </div>
  )
}

export default Header