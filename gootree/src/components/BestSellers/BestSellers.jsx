import React, { useState } from "react";
import croton from "../../assets/plants img/low maintaince/croton petra/croton petra.jpg";
import zz from "../../assets/plants img/low maintaince/zz plant/zz plant1.jpg";
import echeveria from "../../assets/plants img/newly launched/echeveria succulent/echeveria1.jpg";
import italianstonepine from "../../assets/plants img/newly launched/italian stone pine/italian pine1.jpg";
import GreyStarCalathe from "../../assets/plants img/indoor plants/indoor plants/Grey Star Calathea/10-3.jpg";
import JadeSucculent from "../../assets/plants img/indoor plants/indoor plants/Jade Succulent/4-1 (1).jpg";
import kangaroopawfern from "../../assets/plants img/newly launched/kangaroo paw fern/kangaroo1.jpg";
import spiderplant from "../../assets/plants img/low maintaince/spider plant/spider plant.jpg";
import useAnimate from "../../utility/useAnimate";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const bestSeller = [
  {
    name: "Croton petra",
    rating: "4.8",
    price: "299",
    features: { s: "Moderate Water", d: "Low light" },
    image: croton,
  },
  {
    name: "zz plant",
    rating: "4.9",
    price: "259",
    features: { s: "Moderate Water", d: "Low light" },
    image: zz,
  },
  {
    name: "italian stone pine",
    rating: "4.8",
    price: "199",
    features: { s: "Moderate Water", d: "Low light" },
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
    features: { s: "Moderate Water", d: "Low light" },
    image: JadeSucculent,
  },
  {
    name: "kangaroo paw fern",
    rating: "4.9",
    price: "259",
    features: { s: "Moderate Water", d: "Low light" },
    image: kangaroopawfern,
  },
  {
    name: "spider plant",
    rating: "4.8",
    price: "199",
    features: { s: "Moderate Water", d: "Low light" },
    image: spiderplant,
  },
  {
    name: "echeveria",
    rating: "4.8",
    price: "299",
    features: { s: "Moderate Water", d: "Low light" },
    image: echeveria,
  },
];

const Latest = [
  {
    name: "Croton petra",
    rating: "4.8",
    price: "299",
    features: { s: "Moderate Water", d: "Low light" },
    image: croton,
  },
  {
    name: "zz plant",
    rating: "4.9",
    price: "259",
    features: { s: "Moderate Water", d: "Low light" },
    image: zz,
  },
  {
    name: "italian stone pine",
    rating: "4.8",
    price: "199",
    features: { s: "Moderate Water", d: "Low light" },
    image: italianstonepine,
  },
];

function BestSellers() {
  const containerRef = useAnimate();
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? bestSeller : bestSeller.slice(0, 4);

  return (
    <div className="p-10">
      <h2 className="main_h2">Our Bestsellers</h2>
      <div
        ref={containerRef}
        className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:px-28 py-5"
      >
        {displayedItems.map((item, index) => (
          <div
            className="bg-white relative   overflow-hidden transition-transform duration-100 transform hover:scale-105 slide-in"
            key={index}
          >
            <div className="relative group">
              <img
                className="w-full object-cover"
                src={item.image}
                alt={item.name}
              />
              {/* Icons - hidden initially, shown on hover */}
              <div className="absolute inset-0 justify-center flex items-center top-64 mb-4 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="border w-10 h-10 rounded-full flex items-center p-2 bg-white">
                  {" "}
                  <ShoppingCartOutlinedIcon
                    style={{ fontSize: 20, color: "black" }}
                  />
                </span>
                <span className="border w-10 h-10 rounded-full flex items-center p-2 bg-white">
                  {" "}
                  <SearchOutlinedIcon
                    style={{ fontSize: 20, color: "black" }}
                  />
                </span>
                <span className="border w-10 h-10 rounded-full flex items-center p-2 bg-white">
                  {" "}
                  <FavoriteBorderOutlinedIcon
                    style={{ fontSize: 20, color: "black" }}
                  />
                </span>
              </div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <h1 className="font-serif text-md text-green-900 mb-2">
                {item.name}
              </h1>
              <p className="flex items-center text-green-900 font-normal text-md">
                <i className="fa fa-inr mr-1" aria-hidden="true"></i>
               <span className="md:mb-1"> {item.price}</span>
              </p>
              {/* <span className="inline-block bg-gray-400 text-white px-2 py-1 text-sm rounded-md mb-2">
                {item.features.s}& {item.features.d}
              </span> */}
              {/* <div className="flex justify-center items-center mt-2">
               
                <ul className="flex">
                  {[...Array(4)].map((star, i) => (
                    <li key={i}>
                      <i className="fa fa-star text-yellow-500"></i>
                    </li>
                  ))}
                </ul>
              </div> */}
              {/* <button className="w-full mt-4 bg-green-950 text-white rounded-full py-2 hover:bg-green-800">
                Add to Cart
              </button> */}
            </div>
          </div>
        ))}
      </div>
      <div className="flex f justify-center  items-center">
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="w-60 mt-4  border-2 border-green-950 text-green-950 px-3 rounded-full py-2 hover:bg-green-800"
          >
            View all Products
          </button>
        )}
      </div>
    </div>
  );
}

export default BestSellers;
