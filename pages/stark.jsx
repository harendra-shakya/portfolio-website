import Image from "next/image";
import React from "react";
import starkImg from "../public/assets/projects/stark.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const stark = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={starkImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Stark Protocol</h2>
                    <h3>Borrow without collateral</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p className="py-2 text-gray-600">
                        This is our hackathon project (Polygon Build-it), our
                        aim was to give so many features to enable
                        undercollateralized lending. We also won that hackathon.
                    </p>
                    <p className="py-2 pt-4 text-black-500 font-semibold">
                        Here is a small description of the protocol:
                    </p>
                    <p className="py-2 text-gray-600">
                        Stark Protocol enables everyone to borrow without any
                        collateral. Undercollaterised lending is still needed to
                        be solved in this Defi space. Some protocols try to
                        provide it but they are unable to do it to their best
                        extent as they only provide one solution to users. But
                        Stark Protocol enables no collateral credit by combining
                        multiple things like credit score and loans backed by
                        your friend.
                    </p>
                    <p className="py-2 text-gray-600">
                        Like in Traditional Banking, in some situations a
                        borrower needs someone(securer) to back the deal between
                        the borrower and the bank, where if the borrower is
                        unable to repay the credit to the bank, then the securer
                        will have to pay the remaining about to the bank. With
                        this situation we have created a system where when a
                        user(borrower) wants to borrow the assets from the
                        protocol but is not able to due to insufficient balance
                        then he may request his friend to secure the loan. And
                        if the securer accepts it, then his balance of the same
                        amount as the Loan Amount will be locked in the
                        protocol, and his friend will be able to borrow the
                        assets from the protocol. Here are the following
                        benefits of a Guaranty Backed Loan:- The Borrower will
                        get the amount he needed with collateralizing. The
                        Securer will earn greater interest by locking his amount
                        in the protocol and can even get interested from the
                        borrower if wanted. The protocol will earn the assets by
                        implementing interest on the deal. Can pay this loan in
                        installments for a specific period.
                    </p>
                    <p className="py-2 text-gray-600">
                        In the traditional market, where P2P loans also exist,
                        we have made a functionality, P2P Lending, where the
                        user can ask for a loan from the other user (with some
                        interest on it if the lender implements it). Here are
                        the following benefits of a P2P Loan:- The transaction
                        will be P2P or between friends, so it will have some
                        personal trust. The interest will be implemented only by
                        the Lender, not the platform (at first). The platform
                        will earn assets if the borrower extends the duration of
                        the loan. Can pay this loan in installments for a
                        specific period.
                    </p>
                    <p className="py-2 text-gray-600">
                        Both types of loans will maintain functionality to
                        modify the Credit Score of the borrower so that in the
                        future the lenders or friends can check out the risk
                        factor by analyzing their Credit Score. The credit score
                        will be modified after considering various factors like
                        the number of installments used, the time period
                        required in total, the previous history of the loans,
                        etc.
                    </p>
                    <p className="py-2 text-gray-600">
                        And all the chat will happen on the platform only using
                        the decentralized chat application where the user only
                        needs to enter the address of their friend or the person
                        from whom they want to request their guaranty or a loan.
                    </p>
                    <a
                        href="https://github.com/Megabyte-143/stark-protocol"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Code</button>
                    </a>
                    <a
                        href="https://youtu.be/VjRA1NecEEE"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4">Demo</button>
                    </a>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">
                            Technologies
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-1 ">
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
                                <RiRadioButtonFill className="pr-1" /> Chainlink
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Solidity
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />{" "}
                                Javascript
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> XMTP (for
                                chat system)
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Next Js
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Tailwind
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

export default stark;
