import Image from "next/image";
import Header from "@/components/app/Header";
import { Linkedin, Github } from "lucide-react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <section className="md:p-8 md:px-32 lg:p-8 lg:px-32 p-4 px-4 flex mt-24">
          <div className="flex flex-col gap-4" id="group">
            <hgroup className="flex flex-col gap-4">
              <h1 className="text-6xl text-white font-semibold leading-[5rem] ">
                Hi! I&apos;m Timi, a full stack{" "}
                <span className="bg-slate-700 rounded">developer.</span>
              </h1>
              <p className="text-white">
                I currently love building projects and exploring new
                technologies.{" "}
              </p>
              <p className="text-white">
                I&apos;m currently a student at{" "}
                <Link
                  href="https://miva.university/"
                  target="_blank"
                  className="text-[#939df2] hover:underline"
                >
                  Miva University
                </Link>
                . Before I entered Uni, I&apos;ve ventured into tech at the age
                of <span className="italic">12</span>, at that age I was
                building websites for myself, friends and family.
              </p>
              <p className="text-white">
                Through my experience, I had the opportunity to work with other
                developers on both large and small projects.
              </p>
            </hgroup>
            <div id="links" className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/treasure-alekhojie/"
                target="_blank"
                className="flex items-center gap-2 bg-slate-700 transition-all hover:bg-slate-800 p-3 px-10 text-white rounded"
              >
                LikedIn <Linkedin />
              </Link>
              <Link
                href="https://github.com/creative-tutorials"
                target="_blank"
                className="flex items-center gap-2 bg-transparent border border-slate-700 transition-all hover:bg-slate-700 p-3 px-10 text-white rounded"
              >
                GitHub <Github />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
