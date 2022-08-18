import Image from "next/image";
import React from "react";
import openOcean from "../public/assets/projects/openocean.jpg";
import twitter from "../public/assets/projects/twitter.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const nftMarketplace = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={openOcean}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">OpenOcean</h2>
          <h3>A nft marketplace</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2 text-gray-600">
            This is a nft marketplace that I built. Nft markeplace is a platform
            to buy and sell non-fungible tokens (NFTs). If you don't know know
            what are NFTs{" "}
            <a
              href="https://twitter.com/harendrashakya_/status/1529374069275078656?s=20&t=C3o9fWPnIJ2ltR8BaoHy3Q"
              target="_blank"
              rel="noreferrer"
              className="underline opacity-100 hover:opacity-60"
            >
              click here
            </a>{" "}
            for more info
          </p>
          <p className="py-2 text-gray-600">
            This is one of my first blockchain project.
          </p>
          <p className="text-gray-600">
            I built this while learning from Patrick's 32 blockchain course.
          </p>
          <div>
            <Image className="py-2" src={twitter} height={300} width={250} />
          </div>

          <a
            href="https://github.com/harendra-shakya/nft-marketplace"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://thegraph-nft-marketplace.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Live Server</button>
          </a>
          <a
            href="https://twitter.com/harendrashakya_/status/1539591998302089216?s=20&t=G5xEH59yJjWASe6GeV33OQ"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Hardhat
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Ethers
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Moralis
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Graph
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Solidity
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Chainlink
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default nftMarketplace;
