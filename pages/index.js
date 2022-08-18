import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio." />
        <link rel="icon" href="" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
