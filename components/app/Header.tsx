import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import Logo from "@/public/Timi Logo Remake.png"
export default function Header() {
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
    <header className="w-full bg-[#07090c]/40 backdrop-blur-md fixed top-0 left-0 flex items-center justify-between md:p-8 md:px-32 lg:p-8 lg:px-32 p-4 px-4">
      <Link href="/">
        {" "}
        {isMobileUse ? <Image src={Logo} width={30} height={30} alt='Logo' /> : <h1 className="text-white md:text-3xl lg:text-3xl text-xl font-medium">Timi Alekhojie</h1>}
      </Link>
      <nav className="flex items-center gap-6">
        <Link
          href="/about"
          className="text-slate-400 hover:text-white uppercase"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="text-slate-400 hover:text-white uppercase"
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}
