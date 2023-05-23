import React from "react";
import Image from "next/image";
import Hero from "./assets/hero-image-1.png";

const HeroSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:flex items-center justify-center">
      <div className="md:w-1/2">
        <h2 className="text-extra-large font-bold mb-4 text-white">
          Build, Deploy and Manage your Smart Contract on the go.
        </h2>
        <button className="bg-[#6C4CA8] hover:bg-[#594D6F] text-white px-4 py-2 rounded-md mt-4">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2 ml-auto flex justify-center mt-4">
        <Image src={Hero} alt="Startup Hero Image" width={400} height={300} />
      </div>
    </div>
  );
};

export default HeroSection;
