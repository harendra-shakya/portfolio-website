import Image from "next/image";
import React, { useRef, useEffect } from "react";
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
import Skill from "./Skill";

const Skills = () => {
    const componentRef = useRef(null);

    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-jump-in");
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "0px",
            threshold: 0.2, // Adjust this threshold value to control when the animation should trigger.
        });

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    return (
        <div id="skills" className="w-full lg:h-screen p-2 pt-36">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <div ref={componentRef}>
                    <p className="text-xl tracking-widest uppercase text-[#1E90FF]">Skills</p>
                    <h2 className="py-4">My Tech Stack</h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-up animate-once animate-ease-linear">
                    <Skill name="Solidity" img={Solidity} />
                    <Skill name="Typescript" img={Typescript} />
                    <Skill name="Javascipt" img={Javascipt} />
                    <Skill name="Foundry" img={Foundry} />
                    <Skill name="Hardhat" img={Hardhat} width={80} />
                    <Skill name="Ethers" img={Ethers} width={80} />
                    <Skill name="Moralis" img={Moralis} />
                    <Skill name="The Graph" img={Graph} />
                    <Skill name="Trail of Bits Toolbox" img={Toolbox} />
                    <Skill name="IPFS/Filecoin" img={Ipfs} />
                    <Skill name="Next js" img={NextJS} />
                    <Skill name="Nodejs" img={Nodejs} width={120} />
                    <Skill name="Tailwind" img={Tailwind} />
                    <Skill name="HTML" img={Html} />
                    <Skill name="CSS" img={Css} />
                </div>
            </div>
        </div>
    );
};

export default Skills;
