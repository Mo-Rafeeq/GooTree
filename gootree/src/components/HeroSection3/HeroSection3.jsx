// import React from 'react';
// import image from '../../assets/logo/img-4.png';
// import ff from '../../assets/logo/ellipse-2.png'

// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import SpaIcon from '@mui/icons-material/Spa';


// function HeroSection3() {
//   return (
   
//     <div className="relative bg-orange-200 p-10 flex justify-center items-center">
   
//     <div className="relative top-0 left-0 w-full h-full flex flex-col items-center p-10 text-black">
//       <div className=" mb-6">
//         <h2 className="text-5xl font-serif mb-4">Decorate your <br /> Home with plants</h2>
//         <p className="max-w-2xl ">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptates numquam illum expedita totam voluptas ex, perspiciatis obcaecati consequuntur! Dignissimos neque dolorem temporibus ab in doloremque eligendi, dolore impedit quo.
//         </p>
//       </div>
  
//       <ul className="space-y-4 mr-80">
//         <li className="flex items-center">
//           <VerifiedIcon className="text-white border rounded-full bg-green-800 p-2 mr-3" sx={{ fontSize: 50 }} />
//           Unbeatable Quality
//         </li>
//         <li className="flex items-center">
//           <LocalShippingIcon className="text-white border rounded-full bg-green-800 p-2 mr-3" sx={{ fontSize: 50 }} />
//           Delivery to your door
//         </li>
//         <li className="flex items-center">
//           <SpaIcon className="text-white border rounded-full bg-green-800 p-2 mr-3" sx={{ fontSize: 50 }} />
//           Bring nature into your life
//         </li>
//       </ul>
//     </div>
     
//     <img src={ff} alt="eclipse" className="relative z-10" />
  
//   {/* Plant Image inside Eclipse */}
//   <div className="absolute right-64  flex justify-center items-center">
//     <img src={image} alt="plant" className="w-[80%] h-[80%]" />
//   </div>


//   </div>
  


  
//   );
// }

// export default HeroSection3;

import React from 'react';
import image from '../../assets/logo/img-4.png';
import ff from '../../assets/logo/ellipse-2.png';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import SpaIcon from '@mui/icons-material/Spa';

function HeroSection3() {
  return (
    <div className="relative bg-orange-100 p-5 md:p-10 flex flex-col md:flex-row justify-center items-center">
      <div className="relative top-0 left-0 w-full md:w-1/2 h-full flex flex-col items-center text-black md:p-10 ">
        <div className="mb-6 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Decorate your <br className="hidden md:block" /> Home with plants</h2>
          <p className="max-w-lg text-sm md:text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptates numquam illum expedita totam voluptas ex, perspiciatis obcaecati consequuntur! Dignissimos neque dolorem temporibus ab in doloremque eligendi, dolore impedit quo.
          </p>
        </div>
  
        <ul className="space-y-4 md:mr-72">
          <li className="flex items-center  md:justify-start">
            <VerifiedIcon className="text-white border rounded-full bg-green-800 p-2 mr-3" sx={{ fontSize: 40 }} />
            <span className="text-sm md:text-base">Unbeatable Quality</span>
          </li>
          <li className="flex items-center  md:justify-start">
            <LocalShippingIcon className="text-white border rounded-full bg-green-800 p-2 mr-3" sx={{ fontSize: 40 }} />
            <span className="text-sm md:text-base">Delivery to your door</span>
          </li>
          <li className="flex items-center md:justify-start">
            <SpaIcon className="text-white border rounded-full bg-green-800 p-2 mr-3" sx={{ fontSize: 40 }} />
            <span className="text-sm md:text-base">Bring nature into your life</span>
          </li>
        </ul>
      </div>
     
      <div className=" w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        {/* <img src={ff} alt="eclipse" className="relative z-10 w-64 h-64 md:w-auto md:h-auto" /> */}
        <div className=" flex justify-center items-center w-[70%] h-[70%] md:w-[500px] md:h-[500px]">
          <img src={image} alt="plant" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection3;

