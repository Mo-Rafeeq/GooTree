import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo/logoimg.png";

const Footer = () => {
  return (
        <div className="container p-10 bg-green-900  text-white">
    <div className="flex flex-wrap justify-around gap-8 mb-8">
        <div className="flex flex-col items-center">
          <img className="h-[200px]" src={logo} alt="Logo" />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-2xl mb-4">Useful Links</h1>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/product" className="hover:underline">Product</a></li>
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
          <h1 className="font-semibold text-2xl mb-4">Resources</h1>
          <ul className="space-y-1">
            <li><a href="/support" className="hover:underline">Support</a></li>
            <li><a href="/updates" className="hover:underline">Latest Updates</a></li>
            <li><a href="/update" className="hover:underline">Update</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-2xl mb-4">Contact</h1>
          <form className="flex flex-col items-center">
            <p className="mb-3">gootree@gmail.com</p>
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 rounded border bg-green-900 w-60 text-black mb-2"
            />
            <div className="flex justify-center mt-3 space-x-4">
              <a href="#" className="text-white hover:text-blue-500"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className="text-white hover:text-blue-700"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="#" className="text-white hover:text-pink-500"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="text-white hover:text-blue-400"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="text-white hover:text-green-500"><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-500 mt-8 pt-4 text-center">
        <p>&copy;2024GooTree. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
