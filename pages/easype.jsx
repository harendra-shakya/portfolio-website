import Image from "next/image";
import React from "react";
import easypeImg from "../public/assets/projects/easype.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const easype = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={easypeImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">EasyPe</h2>
                    <h3>
                        {" "}
                        Send and receive payments internationally in seconds with your email
                        address only.
                    </h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p className="py-2 text-gray-600">
                        I always try to solve some new problem everytime. This is my hackathon
                        project, my aim was to reduce the barrier to entry for normal web2
                        merchants/users in the blockchain technology and let them enjoy all
                        blockchain benefits.
                    </p>
                    <p className="py-2 text-gray-600">
                        Freelancers and merchants have to pay so high fees to centralized web2
                        companies that's I built EasyPe. With this, you can send crypto to anyone
                        just with an email address only, which means it is as simple as other web2
                        companies but with the benefits of blockchain.
                    </p>
                    <p className="py-2 text-gray-600">
                        For receiving crypto payments you don't need to set up any external wallet,
                        you can directly log in with your Google account hassle-free and start
                        sending and receiving payments with your email address only. We are on a
                        mission to make people's life easy by abstracting complex stuff.
                    </p>

                    <a
                        href="https://github.com/harendra-shakya/easy-pe"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Code</button>
                    </a>
                    <a href="https://easy-pe.vercel.app/" target="_blank" rel="noreferrer">
                        <button className="px-8 py-2 mt-4 mr-8">Live Server</button>
                    </a>
                    <a
                        href="https://ethglobal.com/showcase/easype-waujz"
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

export default easype;
