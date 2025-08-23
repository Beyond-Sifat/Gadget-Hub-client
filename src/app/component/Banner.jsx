"use client";

import Image from "next/image";


export default function Banner() {
  return (
    <section className="relative w-full h-[500px]">
      {/* Banner Image */}
      <Image
        src="https://res.cloudinary.com/drogaimmk/image/upload/final_cb_0086.0_cphpav.jpg"
        alt="Gadget Hub Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome to Gadget Hub
        </h1>
        <p className="text-lg md:text-2xl text-white mb-6">
          Discover the latest gadgets and electronics
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500">
          Explore Products
        </button>
      </div>
    </section>
  );
}
