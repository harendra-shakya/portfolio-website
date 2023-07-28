import React from "react";
import Head from "next/head";

export function Meta({ title, description, imageUrl, timestamp, noIndex, url }) {
    return (
        <Head>
            <title>{`${title}`}</title>
            <meta name="title" content={`${title}`} key="title" />
            <meta name="description" content={description} key="description" />

            {url && (
                <>
                    <link rel="canonical" href={url} />
                    <meta property="og:url" content={url} />
                </>
            )}

            <meta property="og:title" content={`${title}`} key="ogtitle" />
            <meta property="og:description" content={description} key="ogdescription" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Harendra Shakya" />

            {!noIndex ? (
                <meta name="robots" content="index, follow" />
            ) : (
                <meta name="robots" content="noindex, nofollow" />
            )}

            {imageUrl && <meta property="og:image" content={imageUrl} key="ogimage" />}

            {imageUrl && <meta name="twitter:image" content={imageUrl} key="twitterimage" />}
            {imageUrl && (
                <meta
                    name="twitter:image:alt"
                    content={`harendra shakya image`}
                    key="twitteralt"
                />
            )}
            <meta name="twitter:site" content="@harendrashakya_" key="twittersite" />
            <meta
                property="twitter:card"
                content={imageUrl ? "summary_large_image" : "summary"}
                key="twittercard"
            />
            <meta name="twitter:title" content={title} key="twittertitle" />
            <meta name="twitter:description" content={description} key="twitterdescription" />

            {timestamp && <meta name="revised" content={timestamp} key="timestamp" />}
            <meta
                name="keywords"
                key="keywords"
                content="portfolio, harendra shakya, DeFi, gaming, raffle, lottery, gasless, Ethereum, Blockchain Lottery, erc-20, smart contracts, Decentralized Lottery, trustless"
            />

            <meta name="apple-mobile-web-app-title" content={`Harendra Shakya`} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        </Head>
    );
}
