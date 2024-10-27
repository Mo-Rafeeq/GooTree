import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import treelogo from "../../assets/logo/logo.png";

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
const Header = () => {
  const [nav, setnav] = useState(false);
  const handleclick = () => {
    setnav(!nav);
  };

  return (
    <div className="nav">
      {/* <h2>Gootree</h2> */}
      <div className="m-2">
        {" "}
        <img width={150} height={200} src={treelogo} alt="logo" />
      </div>

      <ul className="hidden sm:flex px-4 text-black">
        <li className="p-4 ">
          <a href="/">Home</a>
        </li>

        <li className="p-4 ">
          <a href="#gallery">Shop</a>
        </li>

        <li className="p-4 ">
          <a href="#deals">Product</a>
        </li>

        <li className="p-4 ">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="hidden sm:flex sm:items-center gap-4 mr-3" style={{ color: "black" }}>
      
      < PersonOutlineOutlinedIcon/>
      < FavoriteBorderOutlinedIcon/>
      <ShoppingBagOutlinedIcon/>


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
