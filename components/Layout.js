import React from "react";
import Head from "next/head";

import Header from "./Header";

const Layout = ({ children }) => {
    return <>
        <Head>
            <title>Card</title>
            <meta name="description" content="Card generator" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="max-w-md mx-auto">
            <Header />
            <main>
                {children}
            </main>
        </div>
    </>;
}

export default Layout;