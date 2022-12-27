import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/ProfilePic.JPG";

const About = () => {
    return (
        <div id="about" className="w-full p-2 py-20">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#1E90FF]">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">
                        I'm an 18-year-old self-taught blockchain developer. I'm a problem solver
                        who loves to learn. From childhood, I was always looking for something that
                        I could put 24x7 without getting bored and finally I found my keep interest
                        and programming and blockchain development. Now looking to work with some
                        great minds in a startup.
                    </p>

                    <p className="py-2 text-gray-600">
                        I'm a kind of guy who wants to grow at a significant speed, so that's why I
                        only want to work in startups.
                    </p>

                    <p className="py-2 font-bold">What is my motivation to worK?</p>
                    <p className="py-2 text-gray-600">
                        I'm very passionate about solving problems. I want to solve humanity's
                        problems and want to make a great impact on the world that's why I keep
                        learning and building.
                    </p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image src={AboutImg} className="rounded-xl" alt="/" />
                </div>
            </div>
        </div>
    );
};

export default About;
