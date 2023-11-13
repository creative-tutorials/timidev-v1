import Link from "next/link";
export default function Header() {
  return (
    <header className="flex items-center justify-between md:p-8 md:px-32 lg:p-8 lg:px-32 p-4 px-4">
      <Link href="/">
        {" "}
        <h1 className="text-white text-3xl font-medium">Timi Alekhojie</h1>
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
