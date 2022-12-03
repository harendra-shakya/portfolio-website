import Image from "next/image";
import React from "react";
import fellowSwapImg from "../public/assets/projects/fellowswap.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const fellowswap = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={fellowSwapImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">FellwowSwap</h2>
                    <h3>P2P trading platform with 0.02% fee</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p className="py-2 text-gray-600">
                        This is my hackathon project, my aim was to remove market maker and enable
                        users to enjoy more autonomy and low fee.
                    </p>
                    <p className="py-2 text-gray-600">
                        Dexs are cool, safe and secure but they have some problems like the high
                        fee they charge 0.3% normally which is 3x higher than Binance fee which is
                        a Cex. If there is no intermediary in Decentralized platforms and it is
                        fully automated then why so high fee?? Because of market makers. And the
                        not only fee is high they cause high slippage and are vulnerable to attacks
                        like flash loan attacks and sandwich attacks. That's why I created
                        FellowSwap.
                    </p>
                    <p className="py-2 text-gray-600">
                        Unlike traditional dex, FellowSwap does not have any market makers,
                        FellowSwap facilitates trade directly between users without any market
                        maker with only a 0.02% trading fee which is 15x less than a normal dex
                        like uniswap. There is no danger of slippage as the prices are set by the
                        seller, not by old AMM logic. And it is also resistant to attacks like
                        flash loan attacks and sandwich attacks as the price is not calculated by
                        old-generation AMM logic.
                    </p>
                    <p className="py-2 text-gray-600">
                        Then users can buy tokens directly from the seller. A user can compare
                        different prices offered by different sellers and choose the best one for
                        himself. As there is no market maker so we only charge a 0.02% fee as a
                        protocol fee but we can reduce it to 0% if we get funding to attract more
                        users. Also during buying all the data of the transaction are being stored
                        on ipfs via web3storage for backup purposes.
                    </p>
                    <a
                        href="https://github.com/harendra-shakya/fellowswap"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Code</button>
                    </a>
                    <a href="https://fellowswap.vercel.app/" target="_blank" rel="noreferrer">
                        <button className="px-8 py-2 mt-4 mr-8">Live Server</button>
                    </a>
                    <a
                        href="https://www.linkedin.com/posts/harendra-shakya_chainlink-polygon-ipfs-activity-7002986548044460032-21Td?utm_source=share&utm_medium=member_desktop"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4">Demo Video</button>
                    </a>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1 ">
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
                                <RiRadioButtonFill className="pr-1" /> Chainlink
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Solidity
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Javascript
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Typescript
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

export default fellowswap;
