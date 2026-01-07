"use client";

import React, { useState, lazy, Suspense } from "react";
import Link from "next/link";

// Lazy-load icons so the navbar can suspend while icons are loaded
const Menu = lazy(() => import("lucide-react").then((mod) => ({ default: mod.Menu })));
const X = lazy(() => import("lucide-react").then((mod) => ({ default: mod.X })));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // Log error for debugging; in production send to monitoring service
    console.error("Navbar Error:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3">Something went wrong in the navigation.</div>
      );
    }
    return this.props.children;
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    try {
      setIsOpen((prev) => !prev);
    } catch (err) {
      // Defensive: catch any unexpected errors in handler
      console.error("Failed to toggle menu:", err);
    }
  };

  return (
    <ErrorBoundary>
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <Link href="/" className="text-2xl font-bold text-blue-600">
              GadgetHub
            </Link>

            <div className="hidden md:flex space-x-6 mx-auto">
              <Link href="/" className="hover:text-blue-500">Home</Link>
              <Link href="/dashboard/add-product" className="hover:text-blue-500">Add Products</Link>
              <Link href="/products" className="hover:text-blue-500">Products</Link>
              <Link className="hover:text-blue-500" href="/Register">Register</Link>
            </div>


            <div className="md:hidden">
              <button onClick={toggleMenu} aria-label="Toggle menu">
                <Suspense fallback={<span className="inline-block w-7 h-7" />}>{isOpen ? <X size={28} /> : <Menu size={28} />}</Suspense>
              </button>
            </div>

            <div className="hidden md:flex">
              <Link href="/Login">login</Link>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white shadow-lg px-4 pb-4 space-y-3">
            <Link href="/" className="block hover:text-blue-500">Home</Link>
            <Link href="/products" className="block hover:text-blue-500">Products</Link>
            <Link href="/Register" className="block hover:text-blue-500">Register</Link>
            <Link href="/Login">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Login</button>
            </Link>
          </div>
        )}
      </nav>
    </ErrorBoundary>
  );
}
