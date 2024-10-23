import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import treelogo from '../../assets/logo/logo.png'
const Header = () => {
  const [nav, setnav] = useState(false);
  const handleclick = () => {
    setnav(!nav);
  };

  return (
    <div className="w-full max-h-[70px] flex justify-between items-center font-serif absolute z-10 border text-white px-4 py-3 ">
      
        {/* <h2>Gootree</h2> */}
       <div className="m-2"> <img width={150} height={200}  src={treelogo} alt="logo" /></div>
      
       
      <ul className="hidden sm:flex px-4 text-black">
        <li className="p-4">
          <a href="/">Home</a>
        </li>

        <li className="p-4">
          <a href="#gallery">Shop</a>
        </li>

        <li className="p-4">
          <a href="#deals">Product</a>
        </li>

        <li className="p-4">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="hidden sm:flex gap-4 mr-3" style={{ color: "black" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
      {/* hamburger icon */}
      <div className="sm:hidden z-10">
        <FaBars
          onClick={handleclick}
          size={20}
          className="mr-4 cursor-pointer"
        />
      </div>
      {/* mobile menu */}

      <div
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 bg-black w-full h-screen px-4 py-7 flex flex-col"
            : "absolute  h-screen top-0 left-[-100%] ease-in duration-500"
        }
      >
        <ul className="w-full h-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#gallery">Shop</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals">Product</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
