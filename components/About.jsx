import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/ProfilePic.JPG";

const About = () => {
    return (
        <div id="about" className="w-full p-2">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#1E90FF]">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">
                        I'm an 18-year-old self-taught blockchain developer. I'm a problem solver
                        who loves to learn. From childhood, I was finding something where I can put
                        24x7 without getting bored and finally I found my keep interest and
                        programming and blockchain development. Now looking to work with some great
                        minds and gain some industry experience.
                    </p>
                    <p className="py-2 text-gray-600">
                        I came to crypto when I was learning about stock market and finance. People
                        who explains about finance often talk about these stuff. When I saw what
                        web3 really is, I just fell in love with it, the idea of decentalization is
                        just so amazing and I decided to be part of this.
                    </p>

                    <p className="py-2 font-bold">
                        What is my motivation to worK?
                    </p>
                    <p className="py-2 text-gray-600">
                        I want to solve humanity's problem and want to make a great impact on the world, your grand grand children should know my name.
                    </p>
                    <Link href="/#projects">
                        <p className="py-2 text-gray-600 underline cursor-pointer">
                            Check out some of my latest projects.
                        </p>
                    </Link>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image src={AboutImg} className="rounded-xl" alt="/" />
                </div>
            </div>
        </div>
    );
};

export default About;
