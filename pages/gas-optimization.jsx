import Image from "next/image";
import React from "react";
import gasImg from "../public/assets/projects/gas.png";
import Link from "next/link";
import { Meta } from "../components/Meta";

const gasOptimization = () => {
    return (
        <div className="w-full">
            <Meta
                title={"Smart Contract Gas Optimization tricks - Harendra Shakya"}
                description={
                    "Harendra Shakya is a Full-stack Blockchain Developer specializing in creating cutting-edge, production-level web3 applications."
                }
                imageUrl="https://portfolio-website-harendra-shakya.vercel.app/assets/ProfilePic.JPG"
            />
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={gasImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Gas Optimization</h2>
                    <h3>A repo consists of gas optimization tricks.</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p className="py-2 text-gray-600">
                        I built this repo in which I have wrote all major gas optimization tricks,
                        I built this so beginners can easily learn gas optimization.
                    </p>
                    <a
                        href="https://github.com/harendra-shakya/gas-optimization"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Repo</button>
                    </a>
                </div>

                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
};

export default gasOptimization;
