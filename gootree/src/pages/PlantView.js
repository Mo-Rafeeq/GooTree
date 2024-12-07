import React from "react";
import plant from '../plants';

function PlantView() {
  console.log(plant);
  return (
    <div className="container p-7">
      <div className="mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Side images */}
          <div className="flex flex-col space-y-4 w-1/4 items-center">
            <img className="w-32 h-32 object-cover" src={plant[0].subimage.img1} alt="Sub image 1" />
            <img className="w-32 h-32 object-cover" src={plant[0].subimage.img2} alt="Sub image 2" />
          </div>

          {/* Main image */}
          <div className="w-full flex">
            <img className="w-auto h-auto object-cover rounded-lg" src={plant[0].image} alt="Main plant" />
          </div>

          {/* Text and details */}
          <div className="w-auto flex flex-col justify-center space-y-4 p-4">
            <h2 className="text-xl font-bold text-gray-800">{plant[0].name}</h2>
            <p className="text-gray-600">{plant[0].description}</p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantView;
