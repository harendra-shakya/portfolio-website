import React from "react";
import uniswap from "../public/assets/projects/uniswap.png";
import security from "../public/assets/projects/security.jpg";
import gas from "../public/assets/projects/gas.png";

import ProjectItem from "./ProjectItem";
import { useRef, useEffect } from "react";

const Repos = () => {
    const componentRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-right");
            } else {
                entry.target.classList.remove("animate-fade-right");
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "0px",
            threshold: 0.2,
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
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16 pt-36">
                <div ref={componentRef}>
                    <p className="text-xl tracking-widest uppercase text-[#1E90FF]">
                        Open-source Repos
                    </p>
                    <h2 className="py-4">What I&apos;ve Built For Community</h2>
                </div>

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
                        animate="left"
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
