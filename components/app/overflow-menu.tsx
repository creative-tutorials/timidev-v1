import Link from "next/link";
import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type typeOverflow = {
  isActive: boolean;
  setIsOverflowed: Dispatch<SetStateAction<boolean>>;
};

export default function OverflowMenu({
  isActive,
  setIsOverflowed,
}: typeOverflow) {
  return (
    <>
      {isActive ? (
        <div className="fixed top-0 left-0 w-full transition-all delay-150 duration-300 rounded-none h-full opacity-100 pointer-events-auto bg-black backdrop-blur-sm z-40">
          <span className="flex items-end justify-end p-4">
            <X onClick={() => setIsOverflowed(false)} />
          </span>
          <nav className="flex items-center justify-center mt-24 flex-col gap-32">
            <Link
              href="/#projects"
              className="text-3xl"
              onClick={() => setIsOverflowed(false)}
            >
              Projects
            </Link>
            <Link
              href="/#services"
              className="text-3xl"
              onClick={() => setIsOverflowed(false)}
            >
              Services
            </Link>
            <Link
              href="/#skills"
              className="text-3xl"
              onClick={() => setIsOverflowed(false)}
            >
              Skills
            </Link>
          </nav>
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-full transition-all delay-150 duration-300 rounded-full h-10 opacity-0 pointer-events-none bg-black backdrop-blur-sm z-40"></div>
      )}
    </>
  );
}
