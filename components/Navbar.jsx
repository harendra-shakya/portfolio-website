import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState("#ecf0f3");
    const [linkColor, setLinkColor] = useState("#1f2937");

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleShadow);
    }, []);

    return (
        <div
            style={{ backgroundColor: `${navBg}` }}
            className={
                shadow
                    ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 rounded-3xl"
                    : "fixed w-full h-20 z-[100] rounded-3xl"
            }
        >
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <h1 className="text-bold text-xl hover:opacity-[.5]">
                    <Link href="/">Harendra Shakya's Portfolio</Link>
                </h1>
                <div>
                    <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
                        <li className="ml-10 text-sm uppercase hover:border-b hover:opacity-[.5]">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b hover:opacity-[.5]">
                            <Link href="/#about">About</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b hover:opacity-[.5]">
                            <Link href="/#skills">Skills</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b hover:opacity-[.5]">
                            <Link href="/#projects">Projects</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b hover:opacity-[.5]">
                            <Link href="https://harendrashakya.com/blog">Blog</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b hover:opacity-[.5]">
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                    {/* Hamburger Icon */}
                    <div
                        style={{ color: `${linkColor}` }}
                        onClick={handleNav}
                        className="md:hidden"
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                {/* Side Drawer Menu */}
                <div
                    className={
                        nav
                            ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                    }
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <div
                                onClick={handleNav}
                                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">
                                Let&#39;s build something legendary together
                            </p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    About
                                </li>
                            </Link>
                            <Link href="/#skills">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Skills
                                </li>
                            </Link>
                            <Link href="/#projects">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Projects
                                </li>
                            </Link>
                            <Link href="/#contact">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">
                                Let&#39;s Connect
                            </p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <a
                                    href="https://www.linkedin.com/in/harendra-shakya/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a
                                    href="https://github.com/harendra-shakya"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                </a>
                                <Link href="/#contact">
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                                    >
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
