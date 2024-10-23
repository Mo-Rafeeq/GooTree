import React from "react";
import image from "../../assets/plants img/low maintaince/tiger aloe.png";

const plant = [
  { name: "tiger", category: "low maintaince", plantimage: image },
  { name: "leo", category: "newly launched", plantimage: image },
  { name: "tiger", category: "low maintaince", plantimage: image },
  { name: "leo", category: "newly launched", plantimage: image },
];

export const HeroSection2 = () => {
  return (
    <section className=" bg-orange-200">
      <h1 className="text-center text-4xl font-serif py-4">
        Shop our green delight
      </h1>
      <div className="flex gap-5 justify-center align-middle mb-3 p-3">
        {plant.map((item, index) => (
        <div className="border bg-white rounded-full w-52">
            <img
              className=""
              src={item.plantimage}
              alt="plant-img"
              />
        </div>
        ))}
      </div>
    </section>
  );
};
