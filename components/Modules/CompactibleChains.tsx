import React from "react";
import Image from "next/image";
import Chains from "../assets/images/chains.png";

const CompactibleChains: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 mt-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-4">
              <h2 className="text-large font-bold text-white">
                Deploy on any Compatible Chain
              </h2>
              <p className="text-gray-300 text-medium mt-6">
                Our tools work with any contract deployed on any EVM compatible
                chain.
              </p>
              <p className="text-gray-300 text-medium mt-2">
                Whether your smart contract is deployed on Ethereum, Binance
                Smart Chain, Polygon, or any other EVM compatible chain, our
                tools provide comprehensive support and functionality
              </p>
              <p className="text-gray-300 text-medium mt-2">
                With our tools, your smart contracts become truly versatile,
                adaptable, and future-proof, allowing you to maximize their
                value and impact across various EVM compatible chains.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="px-4">
              <Image src={Chains} alt="desired chain" height={500} width={400} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompactibleChains;
