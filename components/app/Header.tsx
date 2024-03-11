import Link from "next/link";
import Image from "next/image";
import OverflowMenu from "@/components/app/overflow-menu";
import { useEffect, useState } from "react";
import { AlignJustify } from "lucide-react";
import { isMobile } from "react-device-detect";
import Logo from "@/public/Timi Logo Remake.png";
export default function Header() {
  const [isMobileUse, setIsMobileUse] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isOverflowed, setIsOverflowed] = useState(false);

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
      <header className="w-full bg-[#00000]/40 backdrop-blur-md border-b border-white/10 z-10 fixed top-0 left-0 flex items-center justify-between md:p-6 lg:p-6 md:px-32 lg:px-32 p-4 px-4">
        <Link href="/">
          {" "}
          {isMobileUse ? (
            <Image src={Logo} width={30} height={30} alt="Logo" />
          ) : (
            <h1 className="text-white md:text-3xl lg:text-3xl text-xl font-medium">
              Timi
            </h1>
          )}
        </Link>
        {isMobileUse ? (
          <AlignJustify
            className="text-white md:hidden lg:hidden cursor-pointer"
            onClick={() => setIsOverflowed(true)}
          />
        ) : (
          <nav className="flex items-center gap-6">
            <Link
              href="/#projects"
              className="text-slate-400 hover:text-white uppercase"
            >
              Projects
            </Link>
            <Link
              href="/#services"
              className="text-slate-400 hover:text-white uppercase"
            >
              Services
            </Link>
            <Link
              href="/#skills"
              className="text-slate-400 hover:text-white uppercase"
            >
              Skills
            </Link>
          </nav>
        )}
      </header>
      <OverflowMenu isActive={isOverflowed} setIsOverflowed={setIsOverflowed} />
    </>
  );
}
