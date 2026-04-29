import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <div className="h-screen w-full flex flex-col items-center justify-center text-[#b01841]">
        {/* Big 404 Text */}
        <h1 className="text-8xl font-extrabold mb-4">404</h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          Oops! Page Not Found 😕
        </h2>

        {/* Button */}
        <Link
          href="/"
          className="bg-white text-indigo-600  text-xl font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
        >
          🔙 Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
