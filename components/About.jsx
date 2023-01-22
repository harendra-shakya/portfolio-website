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
                        As an 18-year-old self-taught full-stack blockchain developer, I am driven
                        by my passion for web3 and my desire to make a real-world impact through my
                        projects. As a winner of the Polygon build it hackathon, I have proven my
                        ability to quickly learn and build innovative solutions. Additionally, as a
                        content creator, I am dedicated to helping beginners navigate the world of
                        web3 and sharing my own knowledge and experiences.
                    </p>

                    <p className="py-2 text-gray-600">
                        I have studied big protocols like uniswap, aave, curve, etc., and I am well
                        aware of best practices, security, and gas optimization
                    </p>

                    <p className="py-2 text-gray-600">
                        I chose not to attend college in order to fully immerse myself in the world
                        of web3 and blockchain development. I am a fast learner and confident in my
                        ability to build anything, even if I don't have a particular skill I can
                        learn it in no time. Coming up with solutions to problems is one of my
                        passions and I have designed projects to address real-world difficulties,
                        such as an under-collateralized lending protocol, a Data dao for medical
                        research, a P2P trading platform etc.
                    </p>
                    <p className="py-2 text-gray-600">
                        Since childhood, I have been searching for something that I could fully
                        commit to and I found my true passion in programming and blockchain
                        development.
                    </p>
                    <p className="py-2 text-gray-600">
                        With a background in commerce, I also have an interest in marketing and
                        entrepreneurship, but my current focus is on becoming a leading blockchain
                        developer and building a supportive community.
                    </p>
                    <p className="py-2 text-gray-600">
                        I am currently seeking to join a startup team composed of great minds. As
                        someone who values growth and development, I am drawn to the fast-paced and
                        dynamic nature of startups. I am looking for opportunities to be a part of
                        a team that is pushing boundaries and driving innovation.
                    </p>

                    <p className="py-2 font-bold">What is my motivation to worK?</p>
                    <p className="py-2 text-gray-600">
                        I am deeply committed to finding solutions to problems. My ultimate goal is
                        to make a positive impact on humanity by tackling some of the world's most
                        pressing issues. This drives my constant desire to learn and build new
                        things. I am passionate about making a difference and that's what keeps me
                        motivated to continue growing my skills and knowledge.
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
