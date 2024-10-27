
import React from "react";
import img1 from "../../assets/490x230-1.jpg";
import img2 from "../../assets/490x230-2.jpg";
import img3 from "../../assets/490x490.jpg";
import img4 from "../../assets/bnr2-4.jpg";

function Section4() {
  return (
    <div className="container mx-auto p-4 mt-14">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
        <div className="relative">
          <img
            className="w-full h-auto object-cover rounded-md"
            src={img3}
            alt="Office Plant"
          />
          <div className="absolute  w-full h-96 top-7 left-5  p-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-slate-100 hover:bg-opacity-30 rounded-lg">
            <p className="text-sm text-gray-700">Only On Our Store!</p>
            <h2 className="text-xl font-semibold">House Shape Plant</h2>
            <button className="mt-2 border rounded-full px-4 py-1 bg-slate-500 text-white">
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            className="w-full h-auto object-cover rounded-md"
            src={img1}
            alt="Office Plant"
          />
          <div className="absolute  w-full h-40 top-7 left-5  p-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-slate-100 hover:bg-opacity-30 rounded-lg">
            <p className="text-sm text-gray-700">Upto 40% Off</p>
            <h2 className="text-xl font-semibold">Office Plant</h2>
            <button className="mt-2 border rounded-full px-4 py-1 bg-slate-500 text-white">
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative  overflow-hidden">
          <img
            className="w-full h-auto object-cover rounded-md"
            src={img2}
            alt="Hanging Planter"
          />
          <div className="absolute  w-full h-40 top-7 left-5  p-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-slate-100 hover:bg-opacity-30 rounded-lg">
            <p className="text-sm text-gray-700">Fresh Flower</p>
            <h2 className="text-xl font-semibold">Hanging Planter</h2>
            <button className="mt-2 border rounded-full px-4 py-1 bg-slate-500 text-white">
              Shop Now
            </button>
          </div>
        </div>

        {/* <div className='relative   md:col-start-2 md:col-span-2 md:-mt-64'>
          <div className=" transition-transform duration-700 ease-in-out transform hover:scale-105  hover:opacity-70 hover:shadow-lg ">
            <img className="w-full h-[240px] object-cover " src={img4} alt="Ceramic Pot & Plant" />
            <div className="absolute right-44 top-7 ">
              <p className="text-sm text-gray-700 mb-1">Collection Of Cactus</p>
              <h2 className="text-xl font-semibold">Ceramic Pot & Plant</h2>
              <button className="mt-2 border rounded-full px-4 py-1 bg-slate-500 text-white">Shop Now</button>
            </div>
          </div>
       </div> */}
        <div className="relative md:col-start-2 md:col-span-2 md:-mt-64  overflow-hidden ">
          <img
            className="w-full h-[240px] object-cover rounded-md"
            src={img4}
            alt="Ceramic Pot & Plant"
          />

          <div className="absolute w-full h-full left-5 top-7 p-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-slate-100 hover:bg-opacity-30 rounded-lg">
            <p className="text-sm text-gray-700 mb-1">Collection Of Cactus</p>
            <h2 className="text-xl font-semibold">Ceramic Pot & Plant</h2>
            <button className="mt-2 border rounded-full px-4 py-1 bg-slate-500 text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
