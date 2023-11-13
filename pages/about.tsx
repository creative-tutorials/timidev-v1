import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Portfolio from "@/public/image/me.jpg";
import Header from "@/components/app/Header";
export default function About() {
  return (
    <>
      <Head>
        <title>About / Timi Alekhojie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Know more about Timi" />
        <meta
          name="keywords"
          content="Timi Dev, Timi, Alekhojie, Treasure Alekhojie"
        />
        <meta property="og:url" content="https://resubase-me.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About / Timi Alekhojie" />
        <meta property="og:description" content="Know more about Timi" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1699833561/Timi_Lanndscape_bkpup9.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="resubase-me.vercel.app" />
        <meta property="twitter:url" content="https://resubase-me.vercel.app" />
        <meta name="twitter:title" content="About / Timi Alekhojie" />
        <meta name="twitter:description" content="Know more about Timi" />
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
        <section className="md:p-8 md:px-32 lg:p-8 lg:px-32 p-4 px-4 flex flex-col mt-20 gap-8">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#998dd2] to-[#9f9be4]">
            Create. Deploy. Optimize.
          </h2>
          <div className="flex md:flex-row lg:flex-row flex-col gap-4">
            <Image
              src={Portfolio}
              width={300}
              height={400}
              alt="Portfolio 2023"
              className="rounded md:w-auto lg:w-auto w-full"
            />
            <hgroup className="flex flex-col gap-4">
              <p className="text-slate-400">
                <span className="text-white font-medium">Hello, my name is Timi Alekhojie</span>. I am a full-stack
                developer specializing in working with Next.js.
              </p>
              <p className="text-slate-400">
                Through my skills, I have worked on both complex and simple
                projects. I enjoy the process of building applications because
                it teaches me the art of problem-solving, and the ability to sit
                down and solve problems made me fall in love with programming.
              </p>
              <p className="text-slate-400">
                I enjoy contributing to open-source and pursuing side projects,
                while also{" "}
                <span className="text-white font-medium">
                  pursuing my passion for music
                </span>
                . Collaborating with fellow developers motivates me to do my
                best.
              </p>
              <p className="text-slate-400">
                I teach programming to kids and adults, guiding them through
                every stage.
              </p>
            </hgroup>
          </div>
        </section>
        <section className="md:p-8 md:px-32 lg:p-8 lg:px-32 p-4 px-4">
          <hgroup className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium text-white">Contact</h2>
            <p className="text-lg text-slate-400">Get In touch</p>
            <p className="text-slate-400">
              Do you have job opportunity or idea you&apos;d like to discuss?
              Feel free to reach me at info.techtimi@gmail.com. You <br /> can
              also find me on{" "}
              <Link
                href="https://twitter.com/timi_networks"
                target="_blank"
                className="text-[#939df2]"
              >
                Twitter
              </Link>
              ,{" "}
              <Link
                href="https://github.com/creative-tutorials"
                target="_blank"
                className="text-[#939df2]"
              >
                GitHub
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.linkedin.com/in/treasure-alekhojie/"
                target="_blank"
                className="text-[#939df2]"
              >
                LinkedIn
              </Link>
              .
            </p>
          </hgroup>
        </section>
      </main>
    </>
  );
}
