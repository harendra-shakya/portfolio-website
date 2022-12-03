import Image from "next/image";
import React from "react";
import uniswapImg from "../public/assets/projects/uniswap.png";
import Link from "next/link";

const uniswap = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={uniswapImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Uniswap and Curve Decoded</h2>
                    <h3>Explained uniswap line by line.</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p className="py-2 text-gray-600">
                        I was building a dex but I was so curious so I literally decoded uniswap v2
                        line by line.
                    </p>
                    <p className="py-2 text-gray-600">
                        I knew learning how a real protocol works is really hard for beginners so I decided to push all my notes and all resouces with that to study uniswap v2 line by line.
                    </p>

                    <p className="py-2 text-gray-600">
                       Repo also consists of explanation of curve and uniswap v3 protocol logic.
                    </p>
                    <a
                        href="https://github.com/harendra-shakya/uniswap-unwrapped"
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

export default uniswap;
