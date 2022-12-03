import Image from "next/image";
import React from "react";
import Hardhat from "../public/assets/skills/hardhat.png";
import Ethers from "../public/assets/skills/ethers.png";
import Typescript from "../public/assets/skills/typescript.png";
import Nodejs from "../public/assets/skills/nodejs.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Solidity from "../public/assets/skills/solidity.png";
import Javascipt from "../public/assets/skills/javascript.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Moralis from "../public/assets/skills/moralis.svg";
import Foundry from "../public/assets/skills/foundry.png";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Graph from "../public/assets/skills/graph.png";
import Ipfs from "../public/assets/skills/Ipfs.png";
import Toolbox from "../public/assets/skills/toolbox.png";


const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen p-2 pt-36">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#1E90FF]">Skills</p>
                <h2 className="py-4">My Tech Stack</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Solidity} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Solidity</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Typescript} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Typescript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Javascipt} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Javascipt</h3>
                            </div>
                        </div>
                    </div>
                   
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Foundry} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Foundry</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Hardhat} width="80px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Hardhat</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Ethers} width="80px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Ethers</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Moralis} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Moralis</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Graph} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>The Graph</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Toolbox} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Trail of Bits Toolbox</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Ipfs} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>IPFS/Filecoin</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={NextJS} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Next js</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Nodejs} width="120px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Nodejs</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Tailwind} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                   
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Html} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Css} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
