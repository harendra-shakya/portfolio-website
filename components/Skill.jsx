import Image from "next/image";
import React, { useRef, useEffect } from "react";

function Skill({ img, name, width }) {
    const componentRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-jump-in");
            } else {
                entry.target.classList.remove("animate-jump-in");
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
            className="p-6 shadow-xl rounded-xl hover:animate-shake ease-in duration-300"
        >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                    <Image
                        src={img}
                        width={!width ? `64px` : width}
                        height="64px"
                        alt={name}
                        cover
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3>{name}</h3>
                </div>
            </div>
        </div>
    );
}

export default Skill;
