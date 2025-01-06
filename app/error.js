"use client";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-xl text-gray-700 mb-8">
        Something went wrong. Please try again later.
      </p>

      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-black rounded hover:bg-blue-700 transition duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
}
