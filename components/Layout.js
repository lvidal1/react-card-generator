import React from "react";
import Head from "next/head";

import Header from "@components/Header";

const Layout = ({ children }) => {
    return <>
        <Head>
            <title>Card</title>
            <meta name="description" content="Card generator" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="max-w-md mx-auto min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex">
                {children}
            </main>
        </div>
    </>;
}

export default Layout;