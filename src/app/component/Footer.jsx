"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-white">GadgetHub</h2>

          {/* Navigation Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/products" className="hover:text-white">Products</Link>
            <Link href="/login" className="hover:text-white">Login</Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} GadgetHub. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
