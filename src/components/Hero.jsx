import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/random/1600x900')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 py-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Hope Consultancy and Training Service
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
          Empowering Your Future with Expertise and Training
        </p>
        <a
          href="#services"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
