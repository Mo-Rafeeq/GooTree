
import React, { useState } from "react";
import logo from '../assets/logo/logo-white.png';
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";


const Login = () => {

  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {/* Combined Container */}
      <div className="flex w-full max-w-3xl h-full bg-white shadow-md rounded-lg overflow-hidden">
        {/* Left Side: Image */}
        <div className="w-1/2 h-auto">
          <img className="object-cover w-full h-full" src={logo} alt="Logo" />
        </div>

        {/* Right Side: Form */}
        <div className="w-1/2 p-10 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-700">LOGIN</h2>
              <h1 className="gradient-text">register</h1>
            </div>

            <form>
              <div className="mb-4">
                <label className="block text-gray-500 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-6 relative">
                <label className="block text-gray-500 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type={type}
                  value={password}
                  id="password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
                <span
                  class="flex justify-end items-center"
                  onClick={handleToggle}
                >
                  <Icon class="absolute mr-10 -mt-10" icon={icon} size={15} />
                </span>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                LOGIN
              </button>
              <p className="mt-3 font-light text-gray-600 text-center">Don't have an account? <Link className="text-blue-600 " to={'/register'} >Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

