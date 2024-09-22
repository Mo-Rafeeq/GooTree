import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-9xl font-bold text-green-600">404</h1>
      <p className="text-2xl md:text-3xl font-medium mt-4">Oops! Page not found.</p>
      <p className="text-lg text-gray-500 mt-2">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Page404;
