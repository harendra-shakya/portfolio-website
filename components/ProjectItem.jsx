import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, animate }) => {
    const className = !animate ? "animate-fade-right" : "animate-fade-left";

    const componentRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            } else {
                entry.target.classList.remove(className);
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
        <div
            ref={componentRef}
            className={`relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#1E90FF] to-[#00FFFF]`}
        >
            <Image className="rounded-xl group-hover:opacity-10" src={backgroundImg} alt="/" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
                <p className="pb-4 pt-2 text-white text-center">{tech}</p>
                <Link href={projectUrl}>
                    <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                        More Info
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default ProjectItem;
