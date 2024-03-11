import Link from "next/link";
type EduProps = {
  certf: string;
  inst: string;
  school?: boolean;
  start: number | undefined;
  end: number | undefined;
  month: string | undefined;
  year: number | undefined;
  url?: string | undefined;
};

export function Edu({
  certf,
  inst,
  school,
  start,
  end,
  month,
  year,
  url,
}: EduProps) {
  return (
    <>
      {school ? (
        <Card
          certf={certf}
          inst={inst}
          school={school}
          start={start}
          end={end}
          month={month}
          year={year}
        />
      ) : (
        <LinkCard
          url={url}
          certf={certf}
          inst={inst}
          school={school}
          start={start}
          end={end}
          month={month}
          year={year}
        />
      )}
    </>
  );
}

function Card({ certf, inst, school, start, end, month, year }: EduProps) {
  return (
    <div id="ed-card" className="flex justify-between">
      <hgroup>
        <h3
          id="certificate"
          className="md:text-3xl lg:text-3xl text-xl text-indigo-600 shadow-2xl shadow-black uppercase font-semibold"
        >
          {certf}
        </h3>
        <h4
          id="institution"
          className="md:text-lg lg:text-lg text-base font-light text-zinc-300"
        >
          {inst}
        </h4>
      </hgroup>
      {school ? (
        <div id="timeframe" className="flex items-center gap-1 text-zinc-300">
          <p id="start">{start}</p>
          <p>-</p>
          <p id="end">{end}</p>
        </div>
      ) : (
        <div id="timeframe" className="flex items-center gap-1 text-zinc-300">
          <p id="start">{month}</p>
          <p id="end">{year}</p>
        </div>
      )}
    </div>
  );
}

function LinkCard({
  url,
  certf,
  inst,
  school,
  start,
  end,
  month,
  year,
}: EduProps) {
  return (
    <div id="ed-card" className="flex justify-between">
      <hgroup>
        <Link href={url as string} target="_blank">
          <h3
            id="certificate"
            className="md:text-3xl lg:text-3xl text-xl text-indigo-600 shadow-2xl shadow-black uppercase font-semibold hover:underline"
          >
            {certf}
          </h3>
        </Link>
        <h4
          id="institution"
          className="md:text-lg lg:text-lg text-base font-light text-zinc-300"
        >
          {inst}
        </h4>
      </hgroup>
      {school ? (
        <div id="timeframe" className="flex items-center gap-1 text-zinc-300">
          <p id="start">{start}</p>
          <p>-</p>
          <p id="end">{end}</p>
        </div>
      ) : (
        <div id="timeframe" className="flex items-center gap-1 text-zinc-300">
          <p id="start">{month}</p>
          <p id="end">{year}</p>
        </div>
      )}
    </div>
  );
}
