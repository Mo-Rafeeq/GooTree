// import React from "react";
// import croton from "../../assets/plants img/low maintaince/croton petra/croton petra.jpg";
// import zz from '../../assets/plants img/low maintaince/zz plant/zz plant1.jpg'

// const bestSeller = [
//   {
//     name: "Croton petra",
//     rating: "4.8",
//     price: "299",
//     features: "Moderate water",
//     image: croton,
//   },
//   {
//     name: "zz plant",
//     rating: "4.9",
//     price: "259",
//     features: "Moderate water",
//     image: zz,
//   },
//   {
//     name: "lilly",
//     rating: "4.8",
//     price: "199",
//     features: "Moderate water",
//     image: croton,
//   },
//   {
//     name: "llll",
//     rating: "4.8",
//     price: "299",
//     features: "Moderate water",
//     image: croton,
//   },
//   {
//     name: "Croton petra",
//     rating: "4.8",
//     price: "299",
//     features: "Moderate water",
//     image: croton,
//   },
//   {
//     name: "zz plant",
//     rating: "4.9",
//     price: "259",
//     features: "Moderate water",
//     image: zz,
//   },
//   {
//     name: "lilly",
//     rating: "4.8",
//     price: "199",
//     features: "Moderate water",
//     image: croton,
//   },
//   {
//     name: "llll",
//     rating: "4.8",
//     price: "299",
//     features: "Moderate water",
//     image: croton,
//   },
// ];

// function BestSellers() {
//   return (
//     <div className="p-4 ">
//     <h2 className="main_h2">Our Bestsellers</h2>
//       <div className="container">
//         {bestSeller.map((item, index) => (
//           <div className="row" key={index}>
  
//             <img className="w-full h-72 object-cover" src={item.image} alt="" />
//             <div className="px-3 py-5 ">
//             <h1 className="font-semibold text-green-900 mb-2">{item.name}</h1>
//             <span className="border-0 inline-block  border-slate-900 rounded-md px-2 text-white mb-2 bg-gray-400">
//                 {item.features}
//               </span>
//               <div className="flex justify-between">
//                 <p className="text-green-900">
//                 <i className="fa fa-inr" aria-hidden="true"></i>{item.price}
//                 </p>
//                 <ul className="flex justify-center">
//                   <li><i class="fa fa-star" aria-hidden="true"></i></li>
//                   <li><i class="fa fa-star" aria-hidden="true"></i></li>
//                   <li><i class="fa fa-star" aria-hidden="true"></i></li>
//                   <li><i class="fa fa-star" aria-hidden="true"></i></li>
//                 </ul>
                
//               </div>
             
              
//               <button className="w-full border border-slate-900 rounded-full mt-2 px-2 bg-green-950 text-white">
//                 Add
//               </button>
//             </div>
  
  
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BestSellers;

import React from "react";
import croton from "../../assets/plants img/low maintaince/croton petra/croton petra.jpg";
import zz from '../../assets/plants img/low maintaince/zz plant/zz plant1.jpg';

const bestSeller = [
  {
    name: "Croton petra",
    rating: "4.8",
    price: "299",
    features: "Moderate water",
    image: croton,
  },
  {
    name: "zz plant",
    rating: "4.9",
    price: "259",
    features: "Moderate water",
    image: zz,
  },
  {
    name: "lilly",
    rating: "4.8",
    price: "199",
    features: "Moderate water",
    image: croton,
  },
  {
    name: "llll",
    rating: "4.8",
    price: "299",
    features: "Moderate water",
    image: croton,
  },
  {
    name: "Croton petra",
    rating: "4.8",
    price: "299",
    features: "Moderate water",
    image: croton,
  },
  {
    name: "zz plant",
    rating: "4.9",
    price: "259",
    features: "Moderate water",
    image: zz,
  },
  {
    name: "lilly",
    rating: "4.8",
    price: "199",
    features: "Moderate water",
    image: croton,
  },
  {
    name: "llll",
    rating: "4.8",
    price: "299",
    features: "Moderate water",
    image: croton,
  },
];

function BestSellers() {
  return (
    <div className="p-10">
      <h2 className="main_h2 ">Our Bestsellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-10">
        {bestSeller.map((item, index) => (
          <div
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
            key={index}
          >
            <img
              className="w-full h-56 object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <h1 className="font-semibold text-lg text-green-900 mb-2">
                {item.name}
              </h1>
              <span className="inline-block bg-gray-400 text-white px-2 py-1 text-sm rounded-md mb-2">
                {item.features}
              </span>
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
    </div>
  );
}

export default BestSellers;

