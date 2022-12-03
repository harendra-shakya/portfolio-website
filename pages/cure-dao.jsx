import Image from "next/image";
import React from "react";
import curedaoImg from "../public/assets/projects/cureDao.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const cureDao = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={curedaoImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Cure Dao</h2>
                    <h3>Data dao for medical research</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p className="py-2 text-gray-600">
                        Another problem that I tried to solve as I said I like to solve real
                        prolems. This is our hackathon project, our aim was to help universities
                        and research centers find cures for diseases by providing them with the
                        necessary datasets from hospitals without compromising user data privacy.
                    </p>

                    <p className="py-2 text-gray-600">
                        Cure Dao aggregates sensitive medical data from hospitals, encrypts it, and
                        uploads it to filecoin network. Approved universities and research centers
                        will be able to access data for a fee. On-chain access control and
                        encryption are enabled by leveraging the Medusa contract.
                    </p>
                    <a
                        href="https://github.com/Shubham0850/cancer-data-dao"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Code</button>
                    </a>
                    <a
                        href="https://www.linkedin.com/posts/harendra-shakya_web3development-blockchaindevelopment-evm-activity-7000454116741189632-shes?utm_source=share&utm_medium=member_desktop"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4">Demo</button>
                    </a>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1 ">
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
                                <RiRadioButtonFill className="pr-1" /> Hardhat
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Ethers
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Moralis
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Filecoin
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

export default cureDao;
