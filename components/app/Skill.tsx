import Image from "next/image";
export function Skill({
  name,
  icon,
  invert,
  borderColor,
}: {
  name: string;
  icon: string;
  invert?: boolean;
  borderColor: string;
}) {
  return (
    <div
      id="f-card"
      className={`p-4 cursor-pointer bg-zinc-900 transition-all hover:bg-[#131316] border border-transparent hover:border-[${borderColor}] rounded-lg flex items-center justify-center gap-3 flex-col`}
      // style={{ borderColor: customize ? borderColor : "transparent" }}
      key={name}
    >
      <div id="top">
        <Image
          src={icon}
          width={70}
          height={70}
          alt="Picture of the author"
          className="md:w-20 lg:w-20 md:h-20 lg:h-20 w-16 h-16"
          style={{ filter: invert ? "invert(1)" : "invert(0)" }}
        />
      </div>
      <div id="bottom">
        <p>{name}</p>
      </div>
    </div>
  );
}
