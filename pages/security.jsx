import Image from "next/image";
import React from "react";
import securityImg from "../public/assets/projects/security.jpg";
import Link from "next/link";
import { Meta } from "../components/Meta";
const security = () => {
    return (
        <div className="w-full">
            <Meta
                title={
                    "Smart Contract Attack Vectors - List of smart contract attack vectors with explanation"
                }
                description={"List of smart contract attack vectors with explanation."}
                imageUrl="https://portfolio-website-harendra-shakya.vercel.app/assets/ProfilePic.JPG"
            />
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={securityImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Smart Contract Attack Vectors</h2>
                    <h3>List of smart contract attack vectors with explanation.</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p className="py-2 text-gray-600">
                        I built a list of all smart contract attack vectors for everyone so no one
                        has to keep searching for smart contract security vulnerabilities in
                        different places. Of course I also learned a lot while building this.
                    </p>
                    <a
                        href="https://github.com/harendra-shakya/smart-contract-attack-vectors"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Repo</button>
                    </a>
                    <a
                        href="https://www.linkedin.com/posts/harendra-shakya_web3-nft-blockchain-activity-7004062874956443648-Q4I2?utm_source=share&utm_medium=member_desktop"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4">LinkedIn Post</button>
                    </a>
                </div>

                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
};

export default security;
