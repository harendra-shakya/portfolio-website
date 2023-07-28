import Image from "next/image";
import React from "react";
import safockImg from "../public/assets/projects/safock.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import staking from "../public/assets/projects/safock-staking.png";
import insurance from "../public/assets/projects/safock-userflow.png";

const safock = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={safockImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Safock</h2>
                    <h3>Create Crypto ETFs | Stake ETFs | Get Insurance</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p className="py-2 text-gray-600">
                        Safock is a Crypto ETF platform that opens doors to purchase Defi crypto
                        ETFs. Safock makes it easy to bundle together various yield-generating
                        collateral assets to create a customized financial product while utilizing
                        an insurance backstop and fully on-chain transparency to protect users.
                        This functionality is perfect for creating crypto ETF, as the deployer can
                        choose their custom basket of underlying assets, and even use
                        yield-generating assets to generate revenue. And users can stake their ETF
                        too with our platform for even higher yields.
                    </p>
                    <p className="py-2 text-gray-600">
                        There are two special feature which I have added. 1. Insurance 2. Dynamic
                        Staking
                    </p>
                    <p className="py-2 font-bold text-gray-600">Insurance:</p>
                    <p className="py-2 text-gray-600">
                        To save users from losses, I also added functionality to provide insurance
                        to the users.
                    </p>{" "}
                    <p className="py-2 text-gray-600">
                        There are currently 4 insurance plans that we provide. The insurance can be
                        claimed if it meets the conditions.
                    </p>
                    <p className="py-2 text-gray-600">
                        1. BASIC - cost = 1% of price, lose cover upto 30%. Conditions: If the
                        price drops atleast 20% then the purchased price. Validity 3 month.
                    </p>
                    <p className="py-2 text-gray-600">
                        2. PRO - cost = 3% of price, lose cover upto 50%. Conditions: If the price
                        drops atleast 20% then the purchased price. Validity 3 month.
                    </p>
                    <p className="py-2 text-gray-600">
                        3. PRO_PLUS - cost = 5% of price, lose cover upto 70%. Conditions: If the
                        price drops atleast 20% then the purchased price. Validity 3 month.
                    </p>
                    <p className="py-2 text-gray-600">
                        4. PRO_MAX - cost = 7% of price, lose cover upto 100%. Conditions: If the
                        price drops atleast 20% then the purchased price. Validity 3 month.
                    </p>
                    <Image src={insurance} className="rounded-xl" alt="/" />
                    <p className="py-2 font-bold text-gray-600">Dynamic staking:</p>
                    <p className="py-2 text-gray-600"></p> For most common staking applications,
                    the admin has to provide the estimated APY for the program for a certain period
                    of time beforehand. With the dynamic staking approach, it calculates the APY
                    dynamically for a particular stakeholder based on the number of stakeholders,
                    their staked amount, and the rewards which were added to the Staking contract
                    address till that point in time. There is no lock-in time for the stakeholder's
                    stake in this approach. Stakeholders can remove their stake at any point in
                    time and can claim the rewards. We are providing STK Token in exchange of their
                    RTokens.
                    <p className="py-2 text-gray-600"></p> The financial logic of the staking smart
                    contract is to mint STK Token to each stakeholder and rewards are in proportion
                    to the STK Token. Just like Mutual Funds derive the NAV(Net Asset Value) and it
                    increases or decreases based on the STK Token and their asset value inside of
                    it, the similar way the NAV, in this case, will be RToken per STK Token price
                    which will increase as and when rewards are added to the staking program.
                    <p className="py-2 text-gray-600"></p>By default the initial ratio will be set
                    at 1:1, so 1 RToken is equal to 1 STK Token. Each user who stakes at this ratio
                    will receive an equal amount of STK Token for the number of RToken she/he
                    staked. During the month a reward will be sent to the Staking smart contract,
                    which will alter the number of RToken on the contract and by default alter the
                    RToken per STK Token ratio.
                    <p className="py-2 font-bold text-gray-600"></p> Example flow -
                    <p className="py-2 text-gray-600"></p>1. Initially the RToken/STK Token ratio
                    will be 1.
                    <p className="py-2 text-gray-600"></p>2. StakeholderA stakes 1000 RToken token
                    at this point, so StakeholderA will receive 1000 STK Token.
                    <p className="py-2 text-gray-600"></p>3. Reward of 100 RToken is deposited on
                    the Staking contract address.
                    <p className="py-2 text-gray-600"></p>4. Now, the RToken/STK Token ratio gets
                    increase to 1.1 (total RToken / number of STK Token = 1100/1000)
                    <p className="py-2 text-gray-600"></p>5. StakeholderB stakes 1000 RToken token
                    at this point, so StakeholderB will receive 1000/1.1 ~ 909 STK Token
                    <p className="py-2 text-gray-600"></p>6.StakeholderA remove stake of 1000
                    RToken at this point, so StakeholderA will receive 1000*1.1 = 1100 RToken. So,
                    reward of StakeholderA is 1100-1000 = 100 RToken
                    <p className="py-2 text-gray-600"></p>
                    <Image src={staking} className="rounded-xl" alt="/" />
                    <p className="py-2 text-gray-600"></p>{" "}
                    <a
                        href="https://github.com/harendra-shakya/safock"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Code</button>
                    </a>
                    <a href="https://harendra-safock.vercel.app/" target="_blank" rel="noreferrer">
                        <button className="px-8 py-2 mt-4">Live Server</button>
                    </a>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1 ">
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> RTokens
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Solidity
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Javascript
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Typescript
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Hardhat
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Ethers
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Moralis
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> React
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Tailwind
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Web3 React
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Some UI Libraries
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
};

export default safock;
