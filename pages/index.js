import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Repos from "../components/Repos";
import { Meta } from "../components/Meta";

export default function Home() {
    return (
        <div>
            <Meta
                title={"Harendra Shakya old portfolio"}
                description={"Harendra Shakya old portfolio."}
                // imageUrl="https://portfolio-website-harendra-shakya.vercel.app/assets/ProfilePic.JPG"
                noIndex={true}
            />
            <About />
            <Skills />
            <Repos />
            <Projects />
            <Contact />
        </div>
    );
}
