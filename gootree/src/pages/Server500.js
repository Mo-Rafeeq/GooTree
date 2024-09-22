import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Server500 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
 
      <motion.h1
        className="text-9xl font-bold text-red-600"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        500
      </motion.h1>
      
    
      <motion.p
        className="text-2xl md:text-3xl font-medium mt-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Oops! Something went wrong on our end.
      </motion.p>
      
      <motion.p
        className="text-lg text-gray-500 mt-2 mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        We're working to fix it. Please try again later.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Server500;
