import Image from "next/image";
import Header from "@/components/app/Header";
import { Linkedin, Github, Mail, Twitter } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { isBrowser, isMobile } from "react-device-detect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isMobileUse, setIsMobileUse] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter((prev) => prev + 1);

    counter === 1 && checkMobileUse();

    return () => {
      setCounter(0);
    };
  }, [counter]);

  async function checkMobileUse() {
    if (isMobile) {
      setIsMobileUse(true);
    } else {
      setIsMobileUse(false);
    }
  }

  return (
    <>
      <Head>
        <title>Timi Alekhojie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Timi Dev Portfolio" />
        <meta
          name="keywords"
          content="Timi Dev, Timi, Alekhojie, Treasure Alekhojie"
        />
        <meta property="og:url" content="https://resubase-me.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Timi Alekhojie" />
        <meta property="og:description" content="Timi Dev Portfolio" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1699833561/Timi_Lanndscape_bkpup9.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="resubase-me.vercel.app" />
        <meta property="twitter:url" content="https://resubase-me.vercel.app" />
        <meta name="twitter:title" content="Timi Alekhojie" />
        <meta name="twitter:description" content="Timi Dev Portfolio" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1699833561/Timi_Lanndscape_bkpup9.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=2"
        />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
      </Head>
      <main>
        <Header />
        <section className="md:p-8 md:px-32 lg:p-8 lg:px-32 p-4 px-4 flex items-center mt-20 min-h-screen">
          <div className="flex flex-col gap-4" id="group">
            <hgroup className="flex flex-col gap-4">
              <h1 className="md:text-6xl lg:text-6xl text-5xl text-white font-semibold leading-[3.4rem]">
                Hi! I&apos;m Timi, a full stack <br />
                <span className="rounded">developer.</span>
              </h1>
              <p className="text-white">
                I currently love building projects and exploring new
                technologies.{" "}
              </p>
              <p className="text-white">
                I am currently enrolled as a student at{" "}
                <Link
                  href="https://miva.university/"
                  target="_blank"
                  className="text-[#939df2] hover:underline"
                >
                  Miva University
                </Link>
                . Prior to attending Uni, I began my journey in the technology
                field at the age of 12, <br /> building websites for myself,
                friends, and family.
              </p>
              <p className="text-white">
                During my experience, I have worked on projects both large and
                small alongside other developers.
              </p>
            </hgroup>
            <div
              id="links"
              className="flex md:flex-row lg:flex-row flex-col md:items-center lg:items-center items-start gap-4"
            >
              <Link
                href="https://www.linkedin.com/in/treasure-alekhojie/"
                target="_blank"
                className="flex items-center md:justify-start lg:justify-start justify-center gap-2 md:w-auto lg:w-auto w-full bg-slate-700 transition-all hover:bg-slate-800 p-3 px-10 text-white rounded"
              >
                LikedIn <Linkedin />
              </Link>
              <Link
                href="https://github.com/creative-tutorials"
                target="_blank"
                className="flex items-center md:justify-start lg:justify-start justify-center gap-2 md:w-auto lg:w-auto w-full bg-transparent border border-slate-700 transition-all hover:bg-slate-700 p-3 px-10 text-white rounded"
              >
                GitHub <Github />
              </Link>
            </div>
          </div>
        </section>
        <footer className="w-full">
          {isMobileUse ? (
            <div
              id="links"
              className="flex items-center justify-center gap-8 p-4"
            >
              <Link
                href="mailto:hellotimi@proton.me"
                target="_blank"
                className="x text-white"
              >
                <Mail />
              </Link>
              <Link
                href="https://twitter.com/timi_networks"
                target="_blank"
                className="x text-white"
              >
                <Twitter />
              </Link>
              <Link
                href="https://github.com/creative-tutorials"
                target="_blank"
                className="x text-white"
              >
                <Github />
              </Link>
              <Link
                href="https://www.linkedin.com/in/treasure-alekhojie/"
                target="_blank"
                className="x text-white"
              >
                <Linkedin />
              </Link>
            </div>
          ) : (
            <div
              id="links"
              className="flex items-center justify-center gap-8 p-4"
            >
              <Link
                href="mailto:hellotimi@proton.me"
                target="_blank"
                className="x text-slate-400 hover:text-white"
              >
                email
              </Link>
              <Link
                href="https://twitter.com/timi_networks"
                target="_blank"
                className="x text-slate-400 hover:text-white"
              >
                twitter
              </Link>
              <Link
                href="https://github.com/creative-tutorials"
                target="_blank"
                className="x text-slate-400 hover:text-white"
              >
                github
              </Link>
              <Link
                href="https://www.linkedin.com/in/treasure-alekhojie/"
                target="_blank"
                className="x text-slate-400 hover:text-white"
              >
                linkedin
              </Link>
            </div>
          )}
        </footer>
      </main>
    </>
  );
}
