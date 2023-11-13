import Head from "next/head";
import Link from "next/link";
import { Newspaper, MessageCircle, Server } from "lucide-react";
import Header from "@/components/app/Header";
export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects / Timi Alekhojie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Find out what timi is building" />
        <meta
          name="keywords"
          content="Timi Dev, Timi, Alekhojie, Treasure Alekhojie"
        />
        <meta property="og:url" content="https://resubase-me.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Projects / Timi Alekhojie" />
        <meta property="og:description" content="Find out what timi is building" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1699833561/Timi_Lanndscape_bkpup9.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="resubase-me.vercel.app" />
        <meta property="twitter:url" content="https://resubase-me.vercel.app" />
        <meta name="twitter:title" content="Projects / Timi Alekhojie" />
        <meta name="twitter:description" content="Find out what timi is building" />
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
        <section className="md:p-8 md:px-32 lg:p-8 lg:px-32 p-4 px-4 flex flex-col mt-20">
          <hgroup className="flex flex-col gap-4 text-slate-400">
            <h2 className="text-5xl whitespace-nowrap overflow-hidden font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#998dd2] to-[#9f9be4]">
              Work. Work. Work
            </h2>
            <p>
              I&apos;m obsessed with side projects and{" "}
              <span className="text-white font-medium">building in public</span>
              . In here you can find my top projects I&apos;m working on.
            </p>
          </hgroup>
          <div id="featured" className="x mt-16">
            <hgroup>
              <h3 className="text-white font-medium text-3xl">
                Featured Projects
              </h3>
              <div id="projects">
                <div>
                  <div
                    id="tag"
                    className="flex md:flex-row lg:flex-row flex-col items-center gap-4 mt-4"
                  >
                    <Link
                      href="https://resubase-me.vercel.app/"
                      target="_blank"
                    >
                      <div className="p-4 bg-slate-600/40 transition-all hover:bg-slate-600/30 backdrop-blur-md border border-slate-600/40 rounded-md">
                        <Newspaper className="w-8 h-8 text-slate-200" />
                        <hgroup className="flex flex-col gap-2 mt-4">
                          <h4 className="text-3xl text-slate-50">
                            Resubase {"(2023)"}
                          </h4>
                          <p className="text-white/90">
                            Resubase is a place to read articles to improve
                            developer skills.
                          </p>
                        </hgroup>
                      </div>
                    </Link>
                    <div className="p-4 bg-slate-600/40 transition-all hover:bg-slate-600/30 backdrop-blur-md border border-slate-600/40 rounded-md">
                      <MessageCircle className="w-8 h-8 text-slate-200" />
                      <hgroup className="flex flex-col gap-2 mt-4">
                        <h4 className="text-3xl text-slate-50">
                          Relatalk {"(2023)"}
                        </h4>
                        <p className="text-white/90">
                          Relatalk is a chat application platform, chat with
                          friends and loved ones.
                        </p>
                      </hgroup>
                    </div>
                    <Link href="https://stashblobweb.vercel.app/" target="_blank">
                      <div className="p-4 bg-slate-600/40 transition-all hover:bg-slate-600/30 backdrop-blur-md border border-slate-600/40 rounded-md">
                        <Server className="w-8 h-8 text-slate-200" />
                        <hgroup className="flex flex-col gap-2 mt-4">
                          <h4 className="text-3xl text-slate-50">
                            StashBlob {"(2023)"}
                          </h4>
                          <p className="text-white/90">
                            A cloud storage platform, provides you the ability
                            to store your files.
                          </p>
                        </hgroup>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </hgroup>
          </div>
        </section>
      </main>
    </>
  );
}
