'use client';
import React from 'react';
 
import Image from 'next/image';
const Banner = ({img}) => {
    return (
        <div>
         <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <Image src={img} alt="Car Servicing" className="w-full h-[400px] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="p-8 max-w-lg text-white">
            <h1 className="text-4xl font-bold mb-4">Affordable Price For Car Servicing</h1>
            <p className="mb-6 text-gray-300">
              There are many variations of passages available, but the majority have suffered alteration in some form.
            </p>
            <div className="flex space-x-4">
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold">Discover More</button>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold border border-gray-300">Latest Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default Banner;