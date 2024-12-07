// import React from "react";
// import croton from "../../src/assets/plants img/low maintaince/croton petra/croton petra.jpg";
// import zz from "../../src/assets/plants img/low maintaince/zz plant/zz plant1.jpg";
// import echeveria from "../../src/assets/plants img/newly launched/echeveria succulent/echeveria1.jpg";
// import italianstonepine from "../../src/assets/plants img/newly launched/italian stone pine/italian pine1.jpg";
// import GreyStarCalathe from "../../src/assets/plants img/indoor plants/indoor plants/Grey Star Calathea/10-3.jpg";
// import JadeSucculent from "../../src/assets/plants img/indoor plants/indoor plants/Jade Succulent/4-1 (1).jpg";
// import kangaroopawfern from "../../src/assets/plants img/newly launched/kangaroo paw fern/kangaroo1.jpg";
// import spiderplant from "../../src/assets/plants img/low maintaince/spider plant/spider plant.jpg";

// //
// import gg from '../../src/assets/herosection3.webp'

// function Allplants() {

//   const plants = [
//     {
//       name: "Croton petra",
//       rating: "4.8",
//       price: "299",
//       features: { s: "Moderate Water", d: "Low light" },
//       image: croton,
//     },
//     {
//       name: "zz plant",
//       rating: "4.9",
//       price: "259",
//       features: { s: "Moderate Water", d: "Low light" },
//       image: zz,
//     },
//     {
//       name: "italian stone pine",
//       rating: "4.8",
//       price: "199",
//       features: { s: "Moderate Water", d: "Low light" },
//       image: italianstonepine,
//     },
//     {
//       name: "Grey Star Calathe",
//       rating: "4.8",
//       price: "299",
//       features: "Moderate water",
//       image: GreyStarCalathe,
//     },
//     {
//       name: "Jade Succulent",
//       rating: "4.8",
//       price: "299",
//       features: { s: "Moderate Water", d: "Low light" },
//       image: JadeSucculent,
//     },
//     {
//       name: "kangaroo paw fern",
//       rating: "4.9",
//       price: "259",
//       features: { s: "Moderate Water", d: "Low light" },
//       image: kangaroopawfern,
//     },
//     {
//       name: "spider plant",
//       rating: "4.8",
//       price: "199",
//       features: { s: "Moderate Water", d: "Low light" },
//       image: spiderplant,
//     },
//     {
//       name: "echeveria",
//       rating: "4.8",
//       price: "299",
//       features: { s: "Moderate Water", d: "Low light" },
//       image: echeveria,
//     },
//   ];
//   return (
//     <div>
//       <div className="mt-5">

//       <div className="flex  mb-5">
//        <img  className="object-cover h-48 w-full" src={gg} alt="" />

//       </div>

//       <div className="grid md:grid-cols-2 px-8">
//         <div className="w-1/4">
//             <h2 className="font-bold mb-7">Categories</h2>
//             <ul>
//              <li><a href=""></a>low maintaince</li>
//              <li><a href=""></a>Indoor plants</li>
//              <li><a href=""></a>Outdoor plants</li>
//              <li><a href=""></a>Newly Launched</li>
//             </ul>
//             <div className="font-bold mt-5">Price</div>
//         </div>
//         <div className="w-3/4">
//         <div className="flex justify-between">
//             <div className="
//             ">
//             Default sorting
//             <option value="">ss</option>
//             <option value="">gg</option>
//             <option value="">dd</option>
//             </div>

//         </div>

//            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  py-5 mt-10">
//           {plants.map((item, index) => (
//             <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
//               <img
//                 className="w-full object-cover transition-transform duration-300 transform hover:scale-105"
//                 src={item.image}
//                 alt={item.name}
//               />
//               <div className="p-4">
//                 <h1 className="font-semibold text-lg text-green-900 mb-2">
//                   {item.name}
//                 </h1>

//                 <div className="flex justify-between items-center mt-2">
//                   <p className="text-green-900 font-medium text-lg">
//                     <i className="fa fa-inr" aria-hidden="true"></i>{item.price}
//                   </p>
//                   <ul className="flex">
//                     {[...Array(4)].map((star, i) => (
//                       <li key={i}>
//                         <i className="fa fa-star text-yellow-500"></i>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <button className="w-full mt-4 bg-green-950 text-white rounded-full py-2 hover:bg-green-800">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         </div>

//       </div>

//       </div>
//     </div>
//   );
// }

// export default Allplants;

import React from "react";
import croton from "../../src/assets/plants img/low maintaince/croton petra/croton petra.jpg";
import zz from "../../src/assets/plants img/low maintaince/zz plant/zz plant1.jpg";
import echeveria from "../../src/assets/plants img/newly launched/echeveria succulent/echeveria1.jpg";
import italianstonepine from "../../src/assets/plants img/newly launched/italian stone pine/italian pine1.jpg";
import GreyStarCalathe from "../../src/assets/plants img/indoor plants/indoor plants/Grey Star Calathea/10-3.jpg";
import JadeSucculent from "../../src/assets/plants img/indoor plants/indoor plants/Jade Succulent/4-1 (1).jpg";
import kangaroopawfern from "../../src/assets/plants img/newly launched/kangaroo paw fern/kangaroo1.jpg";
import spiderplant from "../../src/assets/plants img/low maintaince/spider plant/spider plant.jpg";
import gg from "../../src/assets/bg-breadcrumb.jpg";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function Allplants() {
  const plants = [
    {
      name: "Croton Petra",
      rating: "4.8",
      price: "299",
      features: { s: "Moderate Water", d: "Low light" },
      image: croton,
    },
    {
      name: "ZZ Plant",
      rating: "4.9",
      price: "259",
      features: { s: "Moderate Water", d: "Low light" },
      image: zz,
    },
    {
      name: "Italian Stone Pine",
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
      name: "Kangaroo Paw Fern",
      rating: "4.9",
      price: "259",
      features: { s: "Moderate Water", d: "Low light" },
      image: kangaroopawfern,
    },
    {
      name: "Spider Plant",
      rating: "4.8",
      price: "199",
      features: { s: "Moderate Water", d: "Low light" },
      image: spiderplant,
    },
    {
      name: "Echeveria",
      rating: "4.8",
      price: "299",
      features: { s: "Moderate Water", d: "Low light" },
      image: echeveria,
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="w-screen h-52 py-20 mb-20">
            <img
              className="object-cover  h-52 w-full rounded-lg shadow-md"
              src={gg}
              alt="Hero section"
            />
      </div>

      <div className="flex flex-col lg:flex-row gap-10 ">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 p-5 bg-white rounded-lg shadow-md mt-5">
          <h2 className="font-bold text-lg mb-6">Categories</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="#">Low Maintenance</a>
            </li>
            <li>
              <a href="#">Indoor Plants</a>
            </li>
            <li>
              <a href="#">Outdoor Plants</a>
            </li>
            <li>
              <a href="#">Newly Launched</a>
            </li>
          </ul>
          <div className="space-y-2">
            <h2 className="font-bold mt-10 text-lg ">Price</h2>
            <p>0-100</p>
            <p>100-200</p>
          </div>
          <div className="space-y-2">
            <h2 className="font-bold mt-3 ">Color</h2>
            <div>
              <ul className="space-y-4 mt-3">
                <li className="space-x-2">
                  <span className="rounded-full px-2 py-1 border w-full h-full  bg-black">
                    <input
                      className="accent-black"
                      name="black"
                      type="checkbox"
                    />
                  </span>
                  <label htmlFor="">Black</label>
                </li>
                <li className="space-x-2">
                  <span className="rounded-full px-2 py-1 border w-full h-full  bg-orange-300">
                    <input
                      className="accent-orange-300"
                      name="orange"
                      type="checkbox"
                    />
                  </span>
                  <label htmlFor="">orange</label>
                </li>
                <li className="space-x-2">
                  <span className="rounded-full px-2 py-1 border w-full h-full  bg-green-300">
                    <input
                      className="accent-green-300"
                      name=""
                      type="checkbox"
                    />
                  </span>
                  <label htmlFor="">green</label>
                </li>
                <li className="space-x-2">
                  <span className="rounded-full px-2 py-1 border w-full h-full  bg-red-300">
                    <input className="accent-red-300" name="" type="checkbox" />
                  </span>
                  <label htmlFor="">red</label>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full mt-10 lg:w-3/4">
          {/* Header Image */}
          

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-20">
            {plants.map((item, index) => (
              <div
                key={index}
                className="relative bg-white mb-5 rounded-lg overflow-hidden duration-500 transition-transform transform hover:scale-105"
              >
                {/* Image with Icons */}
                <div className="relative group">
                  <img
                    className="w-full object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                  {/* Icons - hidden initially, shown on hover */}
                  <div className="absolute inset-0 flex items-center top-64 left-16 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <span className="border w-10 h-10 rounded-full flex items-center p-2 bg-white"> <ShoppingCartOutlinedIcon style={{ fontSize: 20, color: "black" }} /></span>
                  <span className="border w-10 h-10 rounded-full flex items-center p-2 bg-white">  <SearchOutlinedIcon style={{ fontSize: 20, color: "black" }} /></span>
                  <span className="border w-10 h-10 rounded-full flex items-center p-2 bg-white">  <FavoriteBorderOutlinedIcon style={{ fontSize: 20, color: "black" }} /></span>
                  </div>
                </div>

                {/* Plant Info */}
                <div className="p-2 flex flex-col items-center justify-center">
                  <h3 className="font-serif text-lg text-green-800 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-green-800 font-semibold text-lg">
                    <i className="fa fa-inr " aria-hidden="true"></i> {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Allplants;
