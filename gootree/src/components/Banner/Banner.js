
import React from 'react';
import Slider from 'react-slick';
import hero1 from '../../assets/Hero/hero.jpg';
import hero2 from '../../assets/Hero/slider-5.jpg'; 
import hero3 from '../../assets/Hero/slider-6.jpg'; 


const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section>
      <Slider {...settings} className='relative'>
        {/* First Slide */}
        <div className='relative'>
          <img src={hero1} alt='banner' className='w-full object-cover ' />
          <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-10  bg-black bg-opacity-10 '>
            <div className='text-white'>
              <h2 className='text-6xl font-serif text-lime-800'>Buy a Planter</h2>
              <span className='text-6xl font-sans text-lime-700'>Get a Grow Light Free</span>
              <p className='text-md mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita temporibus hic placeat sit
              </p>
              <button className='border rounded-md border-gray-500 px-3 py-2 mt-5  text-xl text-white bg-green-900 hover:bg-green-700'>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className='relative'>
          <img src={hero2} alt='banner2' className='w-full object-cover ' />
          <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-10 bg-black bg-opacity-50'>
            <div className='text-white'>
              <h2 className='text-6xl font-serif text-lime-200'>New Collection</h2>
              <span className='text-6xl font-sans text-lime-300'>Discount on All Items</span>
              <p className='text-md mt-4'>
                Discover our new collection of planters and get a free grow light on every purchase!
              </p>
              <button className='border rounded-md border-gray-500 px-3 py-2 mt-5 font-serif text-xl text-white bg-green-900 hover:bg-green-700'>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

         {/* 3rd slider */}
        <div className='relative'>
          <img src={hero3} alt='banner2' className='w-full object-cover ' />
          <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-10 bg-black bg-opacity-50'>
            <div className='text-white'>
              <h2 className='text-6xl font-serif text-lime-200'>New Collection</h2>
              <span className='text-6xl font-sans text-lime-200'>Discount on All Items</span>
              <p className='text-md mt-4'>
                Discover our new collection of planters and get a free grow light on every purchase!
              </p>
              <button className='border rounded-md border-gray-500 px-3 py-2 mt-5 font-serif text-xl text-white bg-green-900 hover:bg-green-700'>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Banner;

