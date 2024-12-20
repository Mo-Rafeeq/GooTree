import React from "react";
import lowmaintenance from "../../assets/plants img/low maintaince/tiger aloe/3.png";
import outdoorimg from '../../assets/plants img/outdoor/palm1.png';
import indoor from '../../assets/plants img/indoor plants/indoor plants/Jade Succulent/4-1.png';
import newlylaunch from '../../assets/plants img/newly launched/kangaroo paw fern/kangaroo1.png';
import { Link } from "react-router-dom";
import gg from '../../assets/plants img/33.webp'
import g from '../../assets/plants img/bnr1-2.jpg'
import fg from '../../assets/plants img/bnr1-3.jpg'
import useAnimate from "../../utility/useAnimate";


export const HeroSection2 = () => {
  const containerRef=useAnimate()
  return (
    <section className="p-8  md:h-auto ">
   
     <div ref={containerRef} className="grid sm:grid-cols-1 lg:grid-cols-3 gap-2">

      <div className=" fade-in relative  overflow-hidden group">
        <img className="w-full object-cover h-auto" src={gg} alt="" />
        <div className="absolute w-full h-60 top-0 left-0  p-8 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-slate-100 hover:bg-opacity-40">
        <p className="text-md text-gray-700">FRESH FLOWER</p>
        <h2 className="text-2xl font-semibold">Hanging plants</h2>
          <button className="mt-5 border-b-2 border-b-black  px-2 py-1 text-green-800">SHOP NOW</button>

        </div>

      </div>

      <div className=" fade-in relative  overflow-hidden group">
        <img className="w-full object-cover h-auto" src={g} alt="" />
        <div className="absolute  top-0 left-0 w-full  h-60 mt-2  p-8 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-slate-100 hover:bg-opacity-40">
        <p className="text-md text-gray-700">SALE OFF</p>
        <h2 className="text-2xl font-semibold">Indoor Plants</h2>
          <button className="mt-5 border-b-2 border-b-black  px-2 py-1 text-green-800">SHOP NOW</button>

        </div>

      </div>

      <div className=" fade-in relative  overflow-hidden group">
        <img className="w-full object-cover h-auto" src={fg} alt="" />
        <div className="absolute 
         top-0 left-0 w-full h-60   p-8 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-slate-100 hover:bg-opacity-40">
          <p className="text-md text-gray-700">JUST FOR YOU</p>
          <h2 className="text-2xl font-semibold">Outdoor plants</h2>
          <button className="mt-5 border-b-2 border-b-black  px-2 py-1 text-green-800">SHOP NOW</button>

        </div>

      </div>
      
       
     </div>


    </section>
  );
};
