import React from "react";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className=" w-full h-full  flex justify-center items-center  sm:text-center md:text-center lg:text-center ">
                {/* <div className={ver ? "hidden " : ""}> */}
                <div>
                    <div className="z-10">
                        <div className="font-semibold p-2 m-2 text-slate-500">
                            Let's give this world a better solution
                        </div>
                        <TypeAnimation
                            className=" font-semibold text-5xl leading-normal mt-0 mb-2 text-slate-800"
                            sequence={["Hi, I'm Harendra Shakya", 1000]}
                            speed={5}
                            wrapper="h2"
                            repeat={0}
                        />
                        <TypeAnimation
                            className="text-6xl font-md leading-normal mt-0 mb-2 text-sky-800 cursor-pointer sm:mx-8 "
                            sequence={[
                                "Full-stack Blockchain Developer",
                                1000,
                                "Content Creator",
                                1000,
                                "Learner",
                                1000,
                            ]}
                            speed={10}
                            wrapper="h2"
                            repeat={0}
                        />

                        <div className="font-semibold p-2 m-2 text-slate-600">
                            I'm an 18 year old self-taught blockchain developer who just loves to
                            learn
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
