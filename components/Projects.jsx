import React from "react";
import uniswapv69 from "../public/assets/projects/dex.jpg";
import anonim from "../public/assets/projects/lending.jpg";
import stark from "../public/assets/projects/under-collaterize.png";
import openocean from "../public/assets/projects/nft-marketplace.png";
import cureDao from "../public/assets/projects/cureDao.png";
import fellowswap from "../public/assets/projects/p2p.png";
import easype from "../public/assets/projects/easype.png";
import safock from "../public/assets/projects/safock.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16 pt-36">
                <p className="text-xl tracking-widest uppercase text-[#1E90FF]">Projects</p>
                <h2 className="py-4">What I&apos;ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        title="Safock"
                        backgroundImg={safock}
                        projectUrl="/safock"
                        tech="Crypto ETF Platform | Stake ETFs | Get Insurance"
                    />
                    <ProjectItem
                        title="FellowSwap"
                        backgroundImg={fellowswap}
                        projectUrl="/fellowswap"
                        tech="P2P trading platform with 0.02% fee"
                    />
                    <ProjectItem
                        title="CureDao"
                        backgroundImg={cureDao}
                        projectUrl="/cure-dao"
                        tech="Data dao for medical research"
                    />
                    <ProjectItem
                        title="EasyPe"
                        backgroundImg={easype}
                        projectUrl="/easype"
                        tech="Send and receive payments internationally in seconds with your email address only."
                    />
                    <ProjectItem
                        title="Dex"
                        backgroundImg={uniswapv69}
                        projectUrl="/dex"
                        tech="Decentralized Exchange like uniswap"
                    />
                    <ProjectItem
                        title="Stark Protocol"
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
