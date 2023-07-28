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
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2" ref={fadeRightRef}>
                    <p className="uppercase text-xl tracking-widest text-[#1E90FF]">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">
                        Hey there, I'm Harendra Shakya – a Full-stack Blockchain Developer
                        specializing in creating cutting-edge, production-level web3 applications.
                        I'm all about sharing my development journey and spreading knowledge
                        through engaging articles.
                    </p>
                    {/* <h2 className="py-4">Experience</h2> */}
                    <p className="py-2 text-gray-600">
                        - Full-Stack Dapps: I have hands-on experience building production level
                        full-stack Dapps.
                    </p>
                    <p className="py-2 text-gray-600">
                        - Client Projects: In addition to my personal projects, I have contributed
                        to the blockchain ecosystem by developing multiple websites and smart
                        contracts for clients. This experience has allowed me to apply my skills in
                        real-world scenarios and deliver tailored solutions to meet their specific
                        needs.
                    </p>
                    <p className="py-2 text-gray-600">
                        - Creator of Innovative Projects: Designed and developed several real-world
                        projects, including an under-collateralized lending protocol, a Data DAO
                        for medical research, and a P2P trading platform. These projects showcase
                        my problem-solving skills.
                    </p>
                    <p className="py-2 text-gray-600">
                        - Winner of Multiple Hackathons: Demonstrated exceptional skills and
                        innovation as a self-taught full-stack blockchain developer by securing
                        victories in numerous hackathons, including the esteemed Polygon Build It
                        Hackathon. These achievements showcase my ability to quickly learn and
                        build cutting- edge solutions in the web3 space.
                    </p>
                    <p className="py-2 text-gray-600"></p>
                    <p className="py-2 font-bold">What is my motivation to worK?</p>
                    <p className="py-2 text-gray-600">
                        I am deeply committed to finding solutions to problems. My ultimate goal is
                        to make a positive impact on humanity by tackling some of the world's most
                        pressing issues. This drives my constant desire to learn and build new
                        things. I am passionate about making a difference and that's what keeps me
                        motivated to continue growing my skills and knowledge.
                    </p>
                    <p className="py-2 font-bold">How I Can Help You</p>
                    <p className="py-2 text-gray-600">
                        1. Build Full-Stack MVP: If you have an idea and need to bring it to life
                        with a Minimum Viable Product (MVP), I'll handle the end-to-end development
                        for you.
                    </p>
                    <p className="py-2 text-gray-600">
                        2. Technical Advice/Consultancy: Whether you're planning to launch a
                        project or have an idea that needs refining, I'm here to brainstorm with
                        you, offer solutions, and provide guidance on your tech stack.
                    </p>

                    <p className="py-2 text-gray-600">
                        3. Co-founder / Job: If you're seeking a dedicated and skilled co-founder
                        or a passionate team member for your project, I'm open to exploring such
                        opportunities.
                    </p>
                    <p className="py-2 text-gray-600">
                        4. General Inquiries: For any other queries or discussions, feel free to
                        reach out to me. I'm more than happy to engage in meaningful conversations.
                    </p>
                    <p className="py-2 text-gray-600"></p>
                    <Link href="/#contact">
                        <p className="underline cursor-pointer">Get in touch.</p>
                    </Link>
                </div>
                <div
                    className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 ease-in duration-300 hover:animate-shake"
                    ref={fadeLeftRef}
                >
                    <Image src={AboutImg} className="rounded-xl" alt="Harendra Shakya" />
                </div>
            </div>
        </div>
    );
};

export default About;
