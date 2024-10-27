
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
    
      <div className="flex w-full max-w-3xl h-full bg-white shadow-md rounded-lg overflow-hidden">
        
        <div className="w-1/2 h-auto">
          <img className="object-cover w-full h-full" src={logo} alt="Logo" />
        </div>

    
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

// import { LuLock, LuUser2, LuEye, LuEyeOff } from "react-icons/lu"; 

// const GradientIcon = ({ Icon }) => (
//   <svg
//     width="25"
//     height="25"
//     viewBox="0 0 24 24"
//     style={{
//       position: "absolute",
//       left: "10px",
//       top: "50%",
//       transform: "translateY(-50%)",
//     }}
//   >
//     <defs>
//       <linearGradient id="iconGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//         <stop offset="0%" stopColor="#2C56EE" />
//         <stop offset="100%" stopColor="#999999" />
//       </linearGradient>
//     </defs>
//     <Icon
//       stroke="url(#iconGradient)" 
//       strokeWidth="2" 
//       fill="none" 
//     />
//   </svg>
// );

// const LoginForm = () => {
//   const [password, setPassword] = useState("");
//   const [type, setType] = useState("password"); 
//   const [icon, setIcon] = useState(<LuEyeOff />); 

//   const handleToggle = () => {
//     if (type === "password") {
//       setIcon(<LuEye />); 
//       setType("text"); 
//     } else {
//       setIcon(<LuEyeOff />); 
//       setType("password"); 
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-9">
//       <form className="form_login">
//         {/* User Icon */}
//         <div className="form-group mb-2">
//           <div className="relative">
//             <GradientIcon Icon={LuUser2} />
//             <input
//               type="email"
//               id="email"
//               className="form-control pl-10"
//               placeholder="User name or Email"
//               required
//             />
//           </div>
//         </div>

//         {/* Lock Icon with Eye Icon */}
//         <div className="form-group mt-4 mb-3 relative">
//           <GradientIcon Icon={LuLock} />
//           <input
//             type={type} 
//             id="password"
//             className="form-control pl-10"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} 
//             required
//           />
//           <span
//             style={{
//               position: "absolute",
//               right: "15px",
//               top: "50%",
//               transform: "translateY(-50%)",
//               cursor: "pointer",
//             }}
//             onClick={handleToggle} 
//           >
//             <GradientIcon Icon={icon.type} /> 
//           </span>
//         </div>

        
//         <div className="login_forgot mt-4">
//           <a className="login_forgot_text" href="">Forget Password?</a>
//         </div>

//         <button className="btn_login w-100 mt-4">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
