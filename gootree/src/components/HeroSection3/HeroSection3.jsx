import React from 'react';
import image from '../../assets/herosection3.webp';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
// import EcoIcon from '@mui/icons-material/Eco';

function HeroSection3() {
  return (
    <div className="relative h-screen">
      <img className="w-full h-full object-cover" src={image} alt="" />
      <div className="absolute top-0 left-80 w-full h-full flex flex-col justify-center items-center p-7 text-black">
        <div className="text-center mb-6">
          <h2 className="text-5xl font-serif mb-4">Decorate your <br /> Home with plants</h2>
          <p className="max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptates numquam illum expedita totam voluptas ex, perspiciatis obcaecati consequuntur! Dignissimos neque dolorem temporibus ab in doloremque eligendi, dolore impedit quo.
          </p>
        </div>

        <ul className="space-y-4">
          <li className="flex items-center">
            <VerifiedIcon className="text-white border rounded-full bg-green-800 p-2 mr-3"  sx={{ fontSize: 50 }} />
            Unbeatable Quality
          </li>
          <li className="flex items-center">
            <LocalShippingIcon className="text-white border rounded-full bg-green-800 p-2 mr-3"  sx={{ fontSize: 50 }} />
            Delivery to your door
          </li>
          <li className="flex items-center">
          <LocalShippingIcon  className="text-white border rounded-full bg-green-800 p-2 mr-3"  sx={{ fontSize: 50 }} />
            Bring nature into your life
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeroSection3;
