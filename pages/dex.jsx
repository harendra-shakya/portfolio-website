import Image from "next/image";
import React from "react";
import uniswapv69 from "../public/assets/projects/uniswapv69.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const dex = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={uniswapv69}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Dex</h2>
          <h3> Decentralized Exchange like uniswap v2</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2 text-gray-600">
            I built a full stack dex. A decentralized exchange (DEX) is a
            peer-to-peer marketplace where users can trade cryptocurrencies in a
            non-custodial manner without the need for an intermediary to
            facilitate the transfer and custody of funds.
          </p>

          <p className="py-2 text-gray-600">
            It is a Automated market maker (AMM). It allows digital assets to be
            traded in a permissionless and automatic way by using liquidity
            pools rather than a traditional market of buyers and sellers. AMM
            users supply liquidity pools with crypto tokens, whose prices are
            determined by a constant mathematical formula. Liquidity pools can
            be optimized for different purposes, and are proving to be an
            important instrument in the DeFi ecosystem.
          </p>
          <p className="py-2 text-gray-600">
            Basically there are two types of users, liquidity providers and
            traders -
          </p>
          <p className="py-2 text-gray-600">
            Liquidity providers provide liquidity to the pool and in return they
            get third token that represents the partial ownership of the pool
            called liquidity token.
          </p>
          <p className="py-2 text-gray-600">
            Traders can swap tokens means then can provide a token and receive
            another token. The exchange rate is determined by the relative
            number of tokens in the pool e.g. pool has 8 USDC & 10 DAI then the
            value of USDC will be high. The pool takes a small percent as a
            reward for the liquidity pool.
          </p>
          <p className="py-2 text-gray-600">
            When liquidity providers want their assets back they can burn the
            liquidity token and receive back their assets, including the share
            of reward.
          </p>
          <a
            href="https://github.com/harendra-shakya/dex"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://dex-pink-two.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Live Server</button>
          </a>
          <a
            href="https://www.linkedin.com/posts/harendra-shakya_web3-blockchain-cryptocurrency-activity-6965650666065199104-Hgq4?utm_source=linkedin_share&utm_medium=member_desktop_web"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo Video</button>
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
                <RiRadioButtonFill className="pr-1" /> Solidity
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
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

export default dex;
