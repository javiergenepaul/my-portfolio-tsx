import type { NextPage } from "next";
import Head from "next/head";
import { Nav, Hero, About, Skills, Projects, Contacts } from "./components";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import Image from 'next/image'
// const { theme, setTheme } = useTheme();
// const currentTheme = theme === 'system' ? systemTheme: theme;

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col font-chakra">
            <Head>
                <title>Javi Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-[1152px] w-full mx-auto">
                <Nav />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contacts />
            </main>
        </div>  
    );
};

export default Home;
