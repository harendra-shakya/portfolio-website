import React from "react";
import uniswapv69 from "../public/assets/projects/uniswapv69.jpg";
import anonim from "../public/assets/projects/anonim.jpg";
import stark from "../public/assets/projects/stark.jpg";
import openocean from "../public/assets/projects/openocean.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#1E90FF]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Full stack Dex"
            backgroundImg={uniswapv69}
            projectUrl="/dex"
            tech="Decentralized Exchange like uniswap"
          />
          <ProjectItem
            title="Starl Protocol"
            backgroundImg={stark}
            projectUrl="/stark"
            tech="A protocol that allows to borrow without any collateral"
          />
          <ProjectItem
            title="Anonim Protocol"
            backgroundImg={anonim}
            projectUrl="/anonim"
            tech="A borrowing and lending protocol like aave"
          />
          <ProjectItem
            title="NFT Marketplace"
            backgroundImg={openocean}
            projectUrl="/nft-marketplace"
            tech="A nft marketplace"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
