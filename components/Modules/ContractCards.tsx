import React from "react";
import Link from "next/link";
import Image from "next/image";
import DEFI from "../assets/images/defi.png";
import ERC20 from "../assets/images/erc.png";
import NFT from "../assets/images/nft.png";
import DAO from "../assets/images/dao.png";

const ContractCards: React.FC = () => {
  return (
    <>
      <h2 className="text-large text-white text-center font-bold mb-4 mt-16">
        Most Popular Contract
      </h2>
      <div className="container mx-auto px-4 py-8 md:flex items-center justify-center mt-4">
        <div className="flex overflow-x-auto">
          <div className="flex flex-nowrap space-x-4">
            <div className="w-72 bg-[#060606] rounded-lg shadow-md p-4 border border-gray-700 mb-4">
              <h3 className="text-lg font-bold mb-2 text-white">DEFI</h3>
              <p className="text-gray-300 mb-4">Build your own DeFi platform</p>
              <Image src={DEFI} alt="defi" className="w-full mb-4" />
              <Link className="text-white hover:underline" href="/">
                Get Started
              </Link>
            </div>
            <div className="w-72 bg-[#060606] rounded-lg shadow-md p-4 border border-gray-700 mb-4">
              <h3 className="text-lg font-bold mb-2 text-white">ERC-20</h3>
              <p className="text-gray-300 mb-4">
                Built a complete platform - Deploy ERC20 tokens, manage staking,
                vesting, ICO, etc
              </p>
              <Image src={ERC20} alt="Card 2" className="w-full mb-4" />
              <Link className="text-white hover:underline" href="/">
                Get Started
              </Link>
            </div>
            <div className="w-72 bg-[#060606] rounded-lg shadow-md p-4 border border-gray-700 mb-4">
              <h3 className="text-lg font-bold mb-2 text-white">NFT</h3>
              <p className="text-gray-300 mb-4">
                Build your Multiple NFT contracts
              </p>
              <Image src={NFT} alt="Card 3" className="w-full mb-4" />
              <Link href="#" className="text-white hover:underline">
                Get Started
              </Link>
            </div>
            <div className="w-72 bg-[#060606] rounded-lg shadow-md p-4 border border-gray-700 mb-4">
              <h3 className="text-lg font-bold mb-2 text-white">DAO</h3>
              <p className="text-gray-300 mb-4">
                Build your DAO with our governance contracts
              </p>
              <Image src={DAO} alt="Card 4" className="w-full mb-4" />
              <Link href="#" className="text-white hover:underline">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractCards;
