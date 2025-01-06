import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
        <Link
          href="/"
          className="px-4 py-2 bg-black-500 text-black hover:bg-blue-800"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
