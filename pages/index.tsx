import type { NextPage } from "next";
import Head from "next/head";
// import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <div className="dark">
            <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark">
                <Head>
                    <title>Javi Portfolio</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="">sample</main>
            </div>
        </div>
    );
};

export default Home;
