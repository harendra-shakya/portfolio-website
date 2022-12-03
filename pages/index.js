import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Repos from "../components/Repos";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Harendra's Portfolio</title>
                <meta name="description" content="Portfolio." />
                <link rel="icon" href="" />
            </Head>
            <Main />
            <About />
            <Skills />
            <Projects />
            <Repos />
            <Contact />
        </div>
    );
}
