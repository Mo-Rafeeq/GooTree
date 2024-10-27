import React from "react";
import lowmaintenance from "../../assets/plants img/low maintaince/tiger aloe/3.png";
import outdoorimg from '../../assets/plants img/outdoor/palm1.png';
import indoor from '../../assets/plants img/indoor plants/indoor plants/Jade Succulent/4-1.png';
import newlylaunch from '../../assets/plants img/newly launched/kangaroo paw fern/kangaroo1.png';
import { Link } from "react-router-dom";

const plant = [
  { name: "Tiger Aloe", category: "Low maintaince", plantimage: lowmaintenance },
  { name: "Croton", category: "Newly launched", plantimage: newlylaunch },
  { name: "Rubber plant", category: "Outdoor Plants", plantimage: outdoorimg },
  { name: "leo", category: "Indoor Plants", plantimage: indoor },
];

export const HeroSection2 = () => {
  return (
    <section className="p-4 bg-orange-200 mt-8">
      <h1 className="hero_h1 text-center">Categories</h1>
      <div className="flex flex-wrap gap-5 justify-center mt-5 mb-3 p-2">
        {plant.map((item, index) => (
          <div className="text-center w-40 md:w-52" key={index}>
            <Link>
              <div className="border bg-white rounded-full w-full transition-transform duration-300 hover:scale-105">
                <img
                  className="rounded-full w-full h-auto"
                  src={item.plantimage}
                  alt={item.name} 
                />
              </div>
              <p className="hero_p mt-2">{item.category}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
