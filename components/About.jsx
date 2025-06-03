import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/ProfilePic.JPG";
import { useRef, useEffect } from "react";

const About = () => {
    const fadeRightRef = useRef(null);
    const fadeLeftRef = useRef(null);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target === fadeRightRef.current) {
                    entry.target.classList.add("animate-fade-right");
                } else if (entry.target === fadeLeftRef.current) {
                    entry.target.classList.add("animate-fade-left");
                }
            } else {
                if (entry.target === fadeRightRef.current) {
                    entry.target.classList.remove("animate-fade-right");
                } else if (entry.target === fadeLeftRef.current) {
                    entry.target.classList.remove("animate-fade-left");
                }
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "0px",
            threshold: 0.2,
        });

        if (fadeRightRef.current) {
            observer.observe(fadeRightRef.current);
        }
        if (fadeLeftRef.current) {
            observer.observe(fadeLeftRef.current);
        }

        return () => {
            if (fadeRightRef.current) {
                observer.unobserve(fadeRightRef.current);
            }
            if (fadeLeftRef.current) {
                observer.unobserve(fadeLeftRef.current);
            }
        };
    }, []);

    return (
        <div id="about" className="w-full p-2 py-20">
            <div className="max-w-[1240px] m-auto">
                <p>This is old archived website.</p>
                <a href="https://harendra-shakya.github.io/" target="_blank" className="underline">
                    harendra-shakya.github.io - This is the main website
                </a>
            </div>
        </div>
    );
};

export default About;
