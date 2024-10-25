import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo/logoimg.png'

const Footer = () => {
  return (
    <div className="container p-10 h-auto bg-green-900 text-center text-white">
      <img className='h-[250px]' src={logo} alt="" />
      <div className="flex   gap-16">
        
       
        <div className="flex flex-col mx-56 items-center">
          <h1 className="font-semibold text-2xl mb-4">Menu</h1>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/dd" className="hover:underline">Product</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-2xl mb-4">Legal Links</h1>
          <ul className="space-y-1">
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-2xl mb-4">Contact</h1>
          <h6 className="mb-3">Join Us</h6>
          <form className="flex flex-col items-center">
            <label htmlFor="email" className="mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="p-2 rounded border w-60 text-black mb-2"
            />
            <button type="submit" className="bg-white text-green-900 px-4 py-1 rounded">Contact Us</button>
          </form>
          
        
          <div className="flex justify-center mt-3 space-x-4">
            <a href="#" className="text-white hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-white hover:text-blue-700">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="text-white hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-white hover:text-green-500">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
