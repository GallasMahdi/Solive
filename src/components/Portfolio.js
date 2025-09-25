import React from 'react';
import Assest17 from '../images/Assest17.svg'; 


const Portfolio = () => {
  return (
    <div className="relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-8 text-center z-20">
        <h1 className="text-5xl font-thin tracking-widest mb-4">Our Story</h1>
        <div className="h-px w-24 mx-auto bg-gradient-to-r from-[#8B4513] to-transparent mb-4"></div>
      </div>

      {/* Background Image */}
      <img
        src={Assest17}
        alt="Portfolio Background"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        <h2 className="text-4xl md:text-6xl font-bold">Your Text Here</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300 text-center max-w-3xl">
          Add any description you want here
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
