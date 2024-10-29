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
    <section className=''>
      <Slider {...settings} className="relative">
        {/* First Slide */}
        <div className="relative">
          <img src={hero1} alt="banner" className="w-full object-cover" />
          <div className="absolute  top-0 left-0 w-full h-full flex flex-col justify-center items-start p-4 md:p-10 bg-black bg-opacity-10">
            <div className="text-white ">
              <h2 className="text-2xl md:text-6xl font-serif text-lime-800">Buy a Planter</h2>
              <span className="text-xl md:text-6xl font-sans text-lime-700">Get a Grow Light Free</span>
              <p className="text-sm md:text-xl mt-4 text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita temporibus hic placeat sit.
              </p>
              <button className="border rounded-full border-gray-500 px-3 py-1 md:px-4 md:py-2 mt-4 md:mt-5 font-sans text-sm md:text-lg text-white bg-green-900 hover:bg-green-700">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="relative">
          <img src={hero2} alt="banner2" className="w-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-4 md:p-10 bg-black bg-opacity-10">
            <div className="">
              <h2 className="text-2xl md:text-6xl font-serif text-lime-800">New Collection</h2>
              <span className="text-xl md:text-6xl font-sans text-lime-700">Discount on All Items</span>
              <p className="text-sm md:text-xl mt-4 text-black">
                Discover our new collection of planters and get a free grow light on every purchase!
              </p>
              <button className="border rounded-full border-gray-500 px-3 py-1 md:px-4 md:py-2 mt-4 md:mt-5 font-sans text-sm md:text-lg text-white bg-green-900 hover:bg-green-700">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        {/* Third Slide */}
        <div className="relative">
          <img src={hero3} alt="banner3" className="w-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-4 md:p-10 bg-black bg-opacity-10">
            <div className="text-white">
              <h2 className="text-2xl md:text-6xl font-serif text-lime-800">New Collection</h2>
              <span className="text-xl md:text-6xl font-sans text-lime-700">Discount on All Items</span>
              <p className="text-sm md:text-xl mt-4 text-black">
                Discover our new collection of planters and get a free grow light on every purchase!
              </p>
              <button className="border rounded-full border-gray-500 px-3 py-1 md:px-4 md:py-2 mt-4 md:mt-5 font-sans text-sm md:text-lg text-white bg-green-900 hover:bg-green-700">
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


