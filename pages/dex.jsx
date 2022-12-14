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
                        I built a full stack dex. A decentralized exchange (DEX) is a peer-to-peer
                        marketplace where users can trade cryptocurrencies in a non-custodial
                        manner without the need for an intermediary to facilitate the transfer and
                        custody of funds.
                    </p>

                    <p className="py-2 text-gray-600">
                        As I was curious so to build this I literally decoded uniswap v2 line by
                        line and then built my own version of dex.
                    </p>

                    <a
                        href="https://github.com/harendra-shakya/dex"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Code</button>
                    </a>
                    <a href="https://dex-pink-two.vercel.app/" target="_blank" rel="noreferrer">
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
                                <RiRadioButtonFill className="pr-1" /> Solidity
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Javascript
                            </p>
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
