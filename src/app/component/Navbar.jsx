"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link href="/" className="text-2xl font-bold text-blue-600">
            GadgetHub
          </Link>

          <div className="hidden md:flex space-x-6 mx-auto">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/dashboard/add-product" className="hover:text-blue-500">Add Products</Link>
            <Link href="/products" className="hover:text-blue-500">Products</Link>
          </div>

          {/* <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
              Click Me
            </button>
          </div> */}

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 space-y-3">
          <Link href="/" className="block hover:text-blue-500">Home</Link>
          <Link href="/products" className="block hover:text-blue-500">Products</Link>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
            Click Me
          </button>
        </div>
      )}
    </nav>
  );
}
