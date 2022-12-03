import React from "react";
import uniswap from "../public/assets/projects/uniswap.png";
import security from "../public/assets/projects/security.jpg";
import gas from "../public/assets/projects/gas.png";


import ProjectItem from "./ProjectItem";

const Repos = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16 pt-36">
                <p className="text-xl tracking-widest uppercase text-[#1E90FF]">
                    Open-source Repos
                </p>
                <h2 className="py-4">What I&apos;ve Built For Community</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        title="Attack Vectors"
                        backgroundImg={security}
                        projectUrl="/security"
                        tech="A list of all attack vectors"
                    />
                    <ProjectItem
                        title="Gas Optimization"
                        backgroundImg={gas}
                        projectUrl="/gas-optimization"
                        tech="A repo consists of gas optimization tricks"
                    />
                     <ProjectItem
                        title="Uniswap and Curve Decoded"
                        backgroundImg={uniswap}
                        projectUrl="/uniswap"
                        tech="Explained uniswap line by line"
                    />
                </div>
            </div>
        </div>
    );
};

export default Repos;
