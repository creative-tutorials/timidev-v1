import Image from "next/image";

import { getSkills, getEducation } from "@/db/page_data";
import { Skill } from "@/components/app/Skill";
import { Edu } from "@/components/app/Edu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, Mail, Linkedin, Eye, CalendarDays } from "lucide-react";
import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const skills = getSkills();
  const edu = getEducation();

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
        <section
          id="home"
          className="md:p-6 mt-28 lg:p-6 md:px-32 lg:px-32 p-4 px-4"
        >
          <div
            id="content"
            className="flex md:flex-row lg:flex-row flex-col-reverse items-center overflow-hidden"
          >
            <div className="flex flex-col gap-4 bg-red-50/0 md:p-8 lg:p-8 w-full">
              <hgroup className="flex flex-col gap-3 w-full">
                <h1 className="font-semibold md:text-9xl lg:text-9xl text-7xl">
                  Timi Alekhojie
                </h1>
                <p className="md:text-lg lg:text-lg text-base font-normal text-[#999999]">
                  I am a full-stack developer with expertise in several
                  programming languages, frameworks, and tools. With my
                  experience in the field, I can develop scalable and effective
                  solutions that meet the needs of businesses and organizations
                  while still allowing for customization.
                </p>
              </hgroup>
              <div
                id="link wrapper"
                className="flex md:flex-row lg:flex-row flex-col items-center gap-3"
              >
                <Link
                  href="https://cal.com/timidev/quckchat"
                  target="_blank"
                  className="w-full"
                >
                  <Button className="bg-indigo-700 hover:bg-indigo-800 text-white hover:text-gray-200 font-semibold text-base p-6 flex items-center transition-all gap-2 w-full">
                    Book a call <CalendarDays className="w-4 h-4" />
                  </Button>
                </Link>
                <Link
                  href="https://res.cloudinary.com/derbreilm/image/upload/v1710031164/resume_w8km3j.pdf"
                  target="_blank"
                  className="w-full"
                >
                  <Button className="bg-white hover:bg-zinc-700 text-black hover:text-gray-200 font-semibold text-base p-6 flex items-center transition-all gap-2 hover:gap-4 w-full">
                    Download CV <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div
              id="image"
              className="md:p-8 lg:p-8 bg-gray-500/0 w-full h-full"
            >
              <Image
                src="/image/profile.png"
                width={700}
                height={700}
                alt="Timi portfolio"
              />
            </div>
          </div>
        </section>
        <section className="md:p-6 mt-28 lg:p-6 md:px-32 lg:px-32 p-4 px-4">
          <hgroup className="text-center">
            <h2 className="md:text-6xl lg:text-6xl text-5xl uppercase">
              Featured{" "}
              <span className=" text-indigo-600 shadow-2xl shadow-black underline">
                Projects
              </span>
            </h2>
          </hgroup>
          <div
            id="cards-wrapper"
            className="md:mt-28 lg:mt-28 mt-14 flex flex-col md:gap-36 lg:gap-36 gap-14"
          >
            <div
              id="card"
              className="flex md:flex-row lg:flex-row flex-col items-center justify-between"
            >
              <div id="image" className="w-full h-full p-8">
                <Image
                  src="/orgs.png"
                  width={600}
                  height={600}
                  alt="StashBlob Image"
                />
              </div>
              <div id="content" className="flex flex-col gap-4">
                <hgroup className="flex flex-col gap-3">
                  <h3 className="md:text-5xl lg:text-5xl text-3xl">
                    StashBlob
                  </h3>
                  <p className="md:text-base lg:text-base text-sm">
                    StashBlob is a web app that allows you to store all your
                    files in one place. With StashBlob, you can upload,
                    download, and share files with ease.
                  </p>
                </hgroup>
                <Link href="https://stashblob.vercel.app/dashboard">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 p-6 text-lg flex items-center gap-2">
                    Live Preview <Eye />
                  </Button>
                </Link>
              </div>
            </div>
            <Separator className="w-full bg-zinc-800" />
            <div
              id="card"
              className="flex md:flex-row lg:flex-row flex-col items-center justify-between"
            >
              <div id="image" className="w-full h-full p-8">
                <Image
                  src="/expi.png"
                  width={600}
                  height={600}
                  alt="Expi Image"
                />
              </div>
              <div id="content" className="flex flex-col gap-4">
                <hgroup className="flex flex-col gap-3">
                  <h3 className="md:text-5xl lg:text-5xl text-3xl">Expi</h3>
                  <p className="md:text-base lg:text-base text-sm">
                    Expi is the best way to keep track of all your expenses.
                    Expi is a user-friendly app that acts as a budgeting tool
                    for your daily expenses.
                  </p>
                </hgroup>
                <Link href="https://expi.vercel.app/" target="_blank">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 p-6 text-lg flex items-center gap-2">
                    Live Preview <Eye />
                  </Button>
                </Link>
              </div>
            </div>
            <Separator className="w-full bg-zinc-800" />
            <div
              id="card"
              className="flex md:flex-row lg:flex-row flex-col items-center justify-between"
            >
              <div id="image" className="w-full h-full p-8">
                <Image src="/magic.png" width={600} height={600} alt="Magic" />
              </div>
              <div id="content" className="flex flex-col gap-4">
                <hgroup className="flex flex-col gap-3">
                  <h3 className="md:text-5xl lg:text-5xl text-3xl">Magic</h3>
                  <p className="md:text-base lg:text-base text-sm">
                    Magic is a web app that allows you to showcase your
                    web-applications. Magic is just a webstore for your
                    web-applications.
                  </p>
                </hgroup>
                <Link href="https://magic-xyz.vercel.app/" target="_blank">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 p-6 text-lg flex items-center gap-2">
                    Live Preview <Eye />
                  </Button>
                </Link>
              </div>
            </div>
            <Separator className="w-full bg-zinc-800" />
            <div
              id="card"
              className="flex md:flex-row lg:flex-row flex-col items-center justify-between"
            >
              <div id="image" className="w-full h-full p-8">
                <Image
                  src="/resubase.png"
                  width={600}
                  height={600}
                  alt="Resubase Image"
                />
              </div>
              <div id="content" className="flex flex-col gap-4">
                <hgroup className="flex flex-col gap-3">
                  <h3 className="md:text-5xl lg:text-5xl text-3xl">Resubase</h3>
                  <p className="md:text-base lg:text-base text-sm">
                    Resubase is a community based web app. Resubase showcases
                    podcast, vidoes, and blogs relating to programming and tech.
                    It&apos; a tool to help you get to know tech better.
                  </p>
                </hgroup>
                <Link href="https://resubase.vercel.app" target="_blank">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 p-6 text-lg flex items-center gap-2">
                    Live Preview <Eye />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="md:p-6 mt-28 lg:p-6 md:px-32 lg:px-32 p-4 px-4">
          <hgroup className="flex items-center justify-center text-center flex-col gap-3">
            <p className="md:text-2xl lg:text-2xl text-xl tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-pink-500">
              Services
            </p>
            <h3 className="md:text-6xl lg:text-6xl text-4xl">
              Design that solves problems,{" "}
              <br className="md:block lg:block hidden" /> one product at a time.
            </h3>
          </hgroup>
          <div
            id="services-flex"
            className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4 w-full mt-20"
          >
            <div
              id="cards"
              className="w-full p-6 rounded-lg border border-zinc-800"
            >
              <div id="card-content" className="flex flex-col gap-4">
                <div id="top">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M17 21q-.425 0-.713-.288T16 20V10q0-.825-.588-1.413T14 8h-3.5q-.425 0-.713-.288T9.5 7V4q0-.425.288-.713T10.5 3H20q.425 0 .713.288T21 4v16q0 .425-.288.713T20 21h-3Zm-6.5 0q-.425 0-.713-.288T9.5 20v-9q0-.425.288-.713T10.5 10H13q.425 0 .713.288T14 11v9q0 .425-.288.713T13 21h-2.5ZM4 21q-.425 0-.713-.288T3 20v-9q0-.425.288-.713T4 10h2.5q.425 0 .713.288T7.5 11v9q0 .425-.288.713T6.5 21H4Z"
                    />
                  </svg>
                </div>
                <div id="bottom" className="flex flex-col gap-2">
                  <h4 className="text-2xl text-indigo-300 font-semibold">
                    Responsive Design
                  </h4>
                  <p className="font-light text-zinc-300">
                    I make fast, user-friendly, and device-compatible websites.
                    I use the latest technologies to create visually appealing
                    and highly functional web experiences.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="cards"
              className="w-full p-6 rounded-lg border border-zinc-800"
            >
              <div id="card-content" className="flex flex-col gap-4">
                <div id="top">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12.5 12a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m4-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-3a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2 2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m0 2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2 2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m6-6a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2 2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1"
                    />
                  </svg>
                </div>
                <div id="bottom" className="flex flex-col gap-2">
                  <h4 className="text-2xl text-indigo-300 font-semibold">
                    Scaleable Applications
                  </h4>
                  <p className="font-light text-zinc-300">
                    I make it possible for your applications to scale. Which
                    means your userbase grows, but your applications remains
                    fast.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="md:p-6 mt-28 lg:p-6 md:px-32 lg:px-32 p-4 px-4">
          <hgroup>
            <h3 className="md:text-6xl lg:text-6xl text-4xl uppercase">
              Skills
            </h3>
          </hgroup>
          <div
            id="flex-card"
            className="grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 gap-4 w-full mt-8"
          >
            {skills.map((skill, index) => (
              <Fragment key={index}>
                <Skill
                  name={skill.name}
                  icon={skill.icon}
                  invert={skill.isInverted}
                  borderColor={skill.borderColor}
                />
              </Fragment>
            ))}
          </div>
        </section>
        <section className="md:p-6 mt-28 lg:p-6 md:px-32 lg:px-32 p-4 px-4">
          <hgroup>
            <h3 className="md:text-6xl lg:text-6xl text-4xl uppercase">
              Education & Certificates
            </h3>
          </hgroup>
          <div id="ed-flex" className="flex flex-col gap-3 mt-4">
            <ScrollArea className="h-72 rounded-md w-full">
              <div className="p-4">
                {edu.map((edus, index) => (
                  <Fragment key={index}>
                    <Edu
                      certf={edus.certificate}
                      inst={edus.institution}
                      school={edus.hasSchool}
                      start={edus.start}
                      end={edus.end}
                      month={edus.month}
                      year={edus.year}
                      url={edus.download_url}
                    />
                    <Separator className="my-2" />
                  </Fragment>
                ))}
              </div>
            </ScrollArea>
          </div>
        </section>
        <section className="md:p-6 mt-28 lg:p-6 md:px-32 lg:px-32 p-4 px-4">
          <hgroup className="flex flex-col gap-4">
            <h3 className="md:text-6xl lg:text-6xl text-4xl uppercase">
              Get in touch
            </h3>
            <p className="text-zinc-300 font-light md:text-base lg:text-base text-sm">
              Have a project in mind? Looking to partner or work together?{" "}
              <br /> Reach out through my socials and I&apos;ll get back to you
              in the next 48 hours.
            </p>
          </hgroup>
          <div id="socials" className="mt-5 flex flex-col gap-3">
            <div id="social" className="flex items-center gap-3">
              <div id="icon">
                <Mail className="md:w-14 lg:w-14 md:h-14 lg:h-14 w-10 h-10 text-zinc-400" />
              </div>
              <div id="content">
                <Link
                  href="mailto:info.techtimi@gmail.com"
                  className="md:text-3xl lg:text-3xl text-lg text-zinc-400"
                  target="_blank"
                >
                  info.techtimi@gmail.com
                </Link>
              </div>
            </div>
            <div id="social" className="flex items-center gap-3">
              <div id="icon">
                <Linkedin className="md:w-14 lg:w-14 md:h-14 lg:h-14 w-10 h-10 text-zinc-400" />
              </div>
              <div id="content">
                <Link
                  href="https://www.linkedin.com/in/timidev"
                  className="md:text-3xl lg:text-3xl text-lg text-zinc-400"
                  target="_blank"
                >
                  linkedin.com/in/timidev
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
