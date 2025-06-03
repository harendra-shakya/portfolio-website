import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
const Contact = () => {
    const componentRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-up");
            } else {
                entry.target.classList.remove("animate-fade-up");
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
        <div id="contact" className="w-full h-screen text-center" ref={componentRef}>
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <h1 className="py-8 text-gray-700">Get in touch</h1>

                    <div className="flex items-center justify-between max-w-[330px] m-auto py-8">
                        <a
                            href="https://www.linkedin.com/in/harendra-shakya/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a
                            href="https://github.com/harendra-shakya"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaGithub />
                            </div>
                        </a>
                        <a
                            href="https://twitter.com/harendrashakya_"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaTwitter />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
