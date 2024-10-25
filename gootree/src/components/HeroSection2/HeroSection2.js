import React from "react";
import lowmaintenance from "../../assets/plants img/low maintaince/tiger aloe/3.png";
import outdoorimg from '../../assets/plants img/outdoor/palm1.png'
import indoor from '../../assets/plants img/indoor plants/indoor plants/Jade Succulent/4-1.png'
import newlylaunch from '../../assets/plants img/newly launched/kangaroo paw fern/kangaroo1.png'

const plant = [
  { name: "Tiger Aloe", category: "Low maintaince", plantimage: lowmaintenance },
  { name: "Croton", category: "Newly launched", plantimage: newlylaunch },
  { name: "Rubber plant", category: "Outdoor Plants", plantimage: outdoorimg},
{ name: "leo", category: "Indoor Plants", plantimage: indoor },
];

export const HeroSection2 = () => {
  return (
    <section className="p-4 bg-orange-200 mt-8">
      <h1 className="hero_h1">
        Shop our green delight
      </h1>
     <div className="flex gap-5 justify-center mb-3 p-3">
     {plant.map((item, index) => (
        <div className="text-center">
         
          <div className="border bg-white rounded-full w-52">
              <img
              key={index}
                className="
                "
                src={item.plantimage}
                alt="plant-img"
                />               
          </div>
          <p className="hero_p">{item.category}</p>
      
        </div>
            ))}
     </div>
    </section>
  );
};
