

import React, { useState } from "react";
import croton from "../../assets/plants img/low maintaince/croton petra/croton petra.jpg";
import zz from '../../assets/plants img/low maintaince/zz plant/zz plant1.jpg';
import echeveria from '../../assets/plants img/newly launched/echeveria succulent/echeveria1.jpg';
import italianstonepine from '../../assets/plants img/newly launched/italian stone pine/italian pine1.jpg';
import GreyStarCalathe from '../../assets/plants img/indoor plants/indoor plants/Grey Star Calathea/10-3.jpg';
import JadeSucculent from '../../assets/plants img/indoor plants/indoor plants/Jade Succulent/4-1 (1).jpg';
import kangaroopawfern from '../../assets/plants img/newly launched/kangaroo paw fern/kangaroo1.jpg';
import spiderplant from '../../assets/plants img/low maintaince/spider plant/spider plant.jpg';

const bestSeller = [
  {
    name: "Croton petra",
    rating: "4.8",
    price: "299",
    features:{s:"Moderate Water",d:"Low light"} ,
    image: croton,
  },
  {
    name: "zz plant",
    rating: "4.9",
    price: "259",
    features:{s:"Moderate Water",d:"Low light"} ,
    image: zz,
  },
  {
    name: "italian stone pine",
    rating: "4.8",
    price: "199",
    features:{s:"Moderate Water",d:"Low light"} ,
    image: italianstonepine,
  },
  {
    name: "Grey Star Calathe",
    rating: "4.8",
    price: "299",
    features: "Moderate water",
    image: GreyStarCalathe,
  },
  {
    name: "Jade Succulent",
    rating: "4.8",
    price: "299",
    features:{s:"Moderate Water",d:"Low light"} ,
    image: JadeSucculent,
  },
  {
    name: "kangaroo paw fern",
    rating: "4.9",
    price: "259",
    features:{s:"Moderate Water",d:"Low light"} ,
    image: kangaroopawfern,
  },
  {
    name: "spider plant",
    rating: "4.8",
    price: "199",
    features:{s:"Moderate Water",d:"Low light"} ,
    image: spiderplant,
  },
  {
    name: "echeveria",
    rating: "4.8",
    price: "299",
    features:{s:"Moderate Water",d:"Low light"} ,
    image: echeveria,
  },
];

function BestSellers() {
  const [showAll, setShowAll] = useState(false);

  
  const displayedItems = showAll ? bestSeller : bestSeller.slice(0, 4);

  return (
    <div className="p-10">
      <h2 className="main_h2">Our Bestsellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:px-52 py-5">
        {displayedItems.map((item, index) => (
          <div
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
            key={index}
          >
            <img
              className="w-full object-cover transition-transform duration-300 transform hover:scale-105"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <h1 className="font-semibold text-lg text-green-900 mb-2">
                {item.name}
              </h1>
              {/* <span className="inline-block bg-gray-400 text-white px-2 py-1 text-sm rounded-md mb-2">
                {item.features.s}& {item.features.d}
              </span> */}
              <div className="flex justify-between items-center mt-2">
                <p className="text-green-900 font-medium text-lg">
                  <i className="fa fa-inr" aria-hidden="true"></i> {item.price}
                </p>
                <ul className="flex">
                  {[...Array(4)].map((star, i) => (
                    <li key={i}>
                      <i className="fa fa-star text-yellow-500"></i>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full mt-4 bg-green-950 text-white rounded-full py-2 hover:bg-green-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    <div className="flex f justify-center  items-center">
        {!showAll && (
          <button onClick={() => setShowAll(true)} className="w-60 mt-4  border-2 border-green-950 text-green-950 px-3 rounded-full py-2 hover:bg-green-800">
            View all Products
          </button>
        )}
    </div>
    </div>
  );
}

export default BestSellers;

