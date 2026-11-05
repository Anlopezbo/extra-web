"use client";

import { useRef, useState } from "react";
import {
  Award,
  CalendarDays,
  Car,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileText,
  Gift,
  Home,
  Info,
  MapPin,
  Medal,
  Plane,
  RefreshCw,
  Rocket,
  Search,
  Star,
  Target,
  Ticket,
  X,
} from "lucide-react";

type DryPrize = {
  id: number;
  title: string;
  amount: string;
  number: string;
  series: string;
};

type SpecialIncentive = {
  id: number;
  title: string;
  amount: string;
  number: string;
  series: string;
  icon: "home" | "car" | "medal" | "plane";
};

type Approximation = {
  id: number;
  title: string;
  amount: string;
  winners: string;
  icon: "target" | "rocket" | "medal" | "ticket" | "star";
};

const dryPrizes: DryPrize[] = [
  {
    id: 1,
    title: "SECO 1",
    amount: "$1.000",
    number: "3174",
    series: "037",
  },
  {
    id: 2,
    title: "SECO 2",
    amount: "$500",
    number: "9200",
    series: "156",
  },
  {
    id: 3,
    title: "SECO 3",
    amount: "$300",
    number: "6431",
    series: "245",
  },
  {
    id: 4,
    title: "SECO 4",
    amount: "$200",
    number: "2701",
    series: "371",
  },
  {
    id: 5,
    title: "SECO 5",
    amount: "$100",
    number: "0136",
    series: "494",
  },
  {
    id: 6,
    title: "SECO 6",
    amount: "$20",
    number: "9291",
    series: "280",
  },
  {
    id: 7,
    title: "SECO 7",
    amount: "$20",
    number: "5842",
    series: "103",
  },
  {
    id: 8,
    title: "SECO 8",
    amount: "$20",
    number: "7169",
    series: "221",
  },
  {
    id: 9,
    title: "SECO 9",
    amount: "$20",
    number: "4528",
    series: "089",
  },
  {
    id: 10,
    title: "SECO 10",
    amount: "$20",
    number: "8037",
    series: "412",
  },
  {
    id: 11,
    title: "SECO 11",
    amount: "$20",
    number: "1684",
    series: "305",
  },
  {
    id: 12,
    title: "SECO 12",
    amount: "$20",
    number: "3745",
    series: "178",
  },
  {
    id: 13,
    title: "SECO 13",
    amount: "$20",
    number: "6259",
    series: "067",
  },
  {
    id: 14,
    title: "SECO 14",
    amount: "$20",
    number: "4912",
    series: "356",
  },
  {
    id: 15,
    title: "SECO 15",
    amount: "$20",
    number: "7306",
    series: "198",
  },
  {
    id: 16,
    title: "SECO 16",
    amount: "$10",
    number: "2147",
    series: "042",
  },
  {
    id: 17,
    title: "SECO 17",
    amount: "$10",
    number: "8693",
    series: "117",
  },
  {
    id: 18,
    title: "SECO 18",
    amount: "$10",
    number: "5061",
    series: "283",
  },
  {
    id: 19,
    title: "SECO 19",
    amount: "$10",
    number: "7824",
    series: "064",
  },
  {
    id: 20,
    title: "SECO 20",
    amount: "$10",
    number: "3958",
    series: "421",
  },
  {
    id: 21,
    title: "SECO 21",
    amount: "$10",
    number: "1470",
    series: "236",
  },
  {
    id: 22,
    title: "SECO 22",
    amount: "$10",
    number: "6582",
    series: "091",
  },
  {
    id: 23,
    title: "SECO 23",
    amount: "$10",
    number: "9216",
    series: "347",
  },
  {
    id: 24,
    title: "SECO 24",
    amount: "$10",
    number: "4360",
    series: "159",
  },
  {
    id: 25,
    title: "SECO 25",
    amount: "$10",
    number: "2753",
    series: "408",
  },
];

const specialIncentives: SpecialIncentive[] = [
  {
    id: 1,
    title: "Bono Casa",
    amount: "$160.000.000",
    number: "5831",
    series: "126",
    icon: "home",
  },
  {
    id: 2,
    title: "Bono Carro",
    amount: "$70.000.000",
    number: "2476",
    series: "389",
    icon: "car",
  },
  {
    id: 3,
    title: "Bono Moto",
    amount: "$30.000.000",
    number: "6194",
    series: "057",
    icon: "medal",
  },
  {
    id: 4,
    title: "Bono Viaje de tus Sueños",
    amount: "$40.000.000",
    number: "8302",
    series: "274",
    icon: "plane",
  },
];

const approximations: Approximation[] = [
  {
    id: 1,
    title: "Mayor invertido con serie",
    amount: "$78.000.000",
    winners: "1 ganador",
    icon: "target",
  },
  {
    id: 2,
    title: "Tres primeras cifras con serie",
    amount: "$10.000.000",
    winners: "9 ganadores",
    icon: "medal",
  },
  {
    id: 3,
    title: "Tres últimas cifras con serie",
    amount: "$10.000.000",
    winners: "9 ganadores",
    icon: "rocket",
  },
  {
    id: 4,
    title: "Combinado con serie",
    amount: "$3.000.000",
    winners: "22 ganadores",
    icon: "rocket",
  },
  {
    id: 5,
    title: "Mayor invertido sin serie",
    amount: "$80.000",
    winners: "539 ganadores",
    icon: "target",
  },
  {
    id: 6,
    title: "Dos últimas sin serie",
    amount: "$24.000",
    winners: "4.851 ganadores",
    icon: "ticket",
  },
];

const winningNumbers = ["9", "4", "8", "4"];

function ApproximationIcon({
  type,
}: {
  type: Approximation["icon"];
}) {
  const className = "size-6 text-[#29156f]";

  switch (type) {
    case "rocket":
      return <Rocket className={className} />;

    case "medal":
      return <Medal className={className} />;

    case "ticket":
      return <Ticket className={className} />;

    case "star":
      return <Star className={className} />;

    default:
      return <Target className={className} />;
  }
}

function IncentiveIcon({
  type,
}: {
  type: SpecialIncentive["icon"];
}) {
  const className = "size-6 text-[#29156f]";

  switch (type) {
    case "home":
      return <Home className={className} />;

    case "car":
      return <Car className={className} />;

    case "plane":
      return <Plane className={className} />;

    default:
      return <Medal className={className} />;
  }
}

function NumberBalls({
  number,
  size = "normal",
}: {
  number: string;
  size?: "small" | "normal";
}) {
  const sizeClass =
    size === "small"
      ? "size-8 text-xs"
      : "size-11 text-lg sm:size-12 sm:text-xl";

  return (
    <div className="flex justify-center gap-1.5">
      {number.split("").map((digit, index) => (
        <div
          key={`${digit}-${index}`}
          className={`flex ${sizeClass} items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#f34b51,#dc1722_58%,#b60d17)] font-black text-white shadow-md`}
        >
          {digit}
        </div>
      ))}
    </div>
  );
}

export default function ResultadosPage() {
  const dryPrizesRef = useRef<HTMLDivElement>(null);

  const [ticketNumber, setTicketNumber] = useState("");
  const [series, setSeries] = useState("");
  const [consulted, setConsulted] = useState(false);
  const [showAllResults, setShowAllResults] = useState(false);

  const featuredDryPrizes = dryPrizes.slice(0, 6);

  const twentyMillionPrizes = dryPrizes.filter(
    (prize) => prize.amount === "$20"
  );

  const tenMillionPrizes = dryPrizes.filter(
    (prize) => prize.amount === "$10"
  );

  const scrollDryPrizes = (direction: "left" | "right") => {
    if (!dryPrizesRef.current) {
      return;
    }

    dryPrizesRef.current.scrollBy({
      left: direction === "right" ? 340 : -340,
      behavior: "smooth",
    });
  };

  const handleConsult = () => {
    if (ticketNumber.length !== 4 || series.length !== 3) {
      return;
    }

    setConsulted(true);
  };

  return (
    <main className="min-h-screen bg-[#f6f6f8]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#18124c]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_35%,rgba(68,33,150,0.7),transparent_25%),radial-gradient(circle_at_15%_60%,rgba(46,24,116,0.8),transparent_40%)]" />

        {/* Estrellas decorativas */}
        <div className="absolute left-[3%] top-[45%] size-2 rotate-45 bg-[#f4c430]" />
        <div className="absolute left-[6%] top-[65%] size-2 rotate-45 bg-[#f4c430]" />
        <div className="absolute right-[36%] top-[32%] size-2 rotate-45 bg-[#f4c430]" />
        <div className="absolute right-[32%] top-[65%] size-2 rotate-45 bg-[#f4c430]" />
        <div className="absolute right-[8%] top-[38%] size-2 rotate-45 bg-[#f4c430]" />

        {/* Balotas decorativas */}
        <div className="absolute -right-10 bottom-[-60px] hidden size-44 rounded-full bg-[radial-gradient(circle_at_35%_28%,#ffffff_0%,#d9d9d9_28%,#b71c1c_29%,#d9252d_65%,#8c1117_100%)] shadow-2xl md:block">
          <div className="absolute inset-5 flex items-center justify-center rounded-full bg-white/85 text-5xl font-black text-slate-900 shadow-inner">
            3
          </div>
        </div>

        <div className="absolute right-[10%] top-[-35px] hidden size-36 rounded-full bg-[radial-gradient(circle_at_35%_28%,#ffffff_0%,#d9d9d9_28%,#c88b00_29%,#f1b719_65%,#9c6200_100%)] shadow-2xl lg:block">
          <div className="absolute inset-5 flex items-center justify-center rounded-full bg-white/85 text-5xl font-black text-slate-900">
            1
          </div>
        </div>

        <div className="absolute right-[18%] top-[-50px] hidden size-40 rounded-full bg-[radial-gradient(circle_at_35%_28%,#ffffff_0%,#d9d9d9_28%,#258743_29%,#48a75d_65%,#17602f_100%)] shadow-2xl lg:block">
          <div className="absolute inset-5 flex items-center justify-center rounded-full bg-white/85 text-5xl font-black text-slate-900">
            7
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-7 md:py-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Resultados
          </h1>

          <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
            Consulta aquí todos los resultados
            <br className="hidden sm:block" />
            y comprueba si eres uno de nuestros ganadores.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTENIDO PRINCIPAL
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:py-5">
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
          {/* =================================================
              COLUMNA PRINCIPAL
          ================================================= */}
          <div className="space-y-4">
            {/* RESULTADO PRINCIPAL */}
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="grid lg:grid-cols-[280px_minmax(0,1fr)]">
                {/* INFORMACION DEL SORTEO */}
                <div className="border-b border-slate-100 p-5 lg:border-b-0 lg:border-r">
                  <h2 className="text-2xl font-extrabold text-[#29156f]">
                    Sorteo 2253
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Jueves 30 de julio de 2026
                  </p>

                  <div className="mt-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="text-[#29156f]">
                        <Clock3 className="size-6" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-[#29156f]">
                          11:00 p. m.
                        </p>

                        <p className="text-[10px] text-slate-500">
                          Hora del sorteo
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-[#29156f]">
                        <CalendarDays className="size-6" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-[#29156f]">
                          Canal Trece
                        </p>

                        <p className="text-[10px] text-slate-500">
                          Transmisión
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* NUMERO GANADOR */}
                <div className="p-5 lg:px-8">
                  <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-[#29156f]">
                        Premio mayor
                      </p>

                      <p className="mt-2 text-4xl font-black leading-none text-slate-900 md:text-5xl">
                        $15.000
                      </p>

                      <p className="mt-1 text-2xl font-extrabold text-slate-900">
                        MILLONES
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-xs text-slate-600">
                        <MapPin className="size-4 fill-[#29156f] text-[#29156f]" />

                        <span>
                          Despachado a:{" "}
                          <strong className="text-[#29156f]">
                            Bogotá D.C.
                          </strong>
                        </span>
                      </div>
                    </div>

                    <div className="text-center lg:text-right">
                      <p className="mb-3 text-xs font-medium text-[#29156f]">
                        Número ganador
                      </p>

                      <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-end">
                        {winningNumbers.map((number, index) => (
                          <div
                            key={`${number}-${index}`}
                            className="flex size-12 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#f34b51,#dc1722_58%,#b60d17)] text-xl font-black text-white shadow-md md:size-14 md:text-2xl"
                          >
                            {number}
                          </div>
                        ))}

                        <div className="ml-1 flex flex-col items-center">
                          <span className="mb-1 rounded bg-[#f4c430] px-2 py-0.5 text-[9px] font-black uppercase text-[#29156f]">
                            Serie
                          </span>

                          <div className="flex size-14 items-center justify-center rounded-full bg-[#21104f] text-lg font-black text-white shadow-md">
                            274
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* PREMIOS SECOS */}
            <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-extrabold text-[#29156f]">
                  Premios secos
                </h2>

                <button
                  type="button"
                  onClick={() => setShowAllResults(true)}
                  className="hidden items-center gap-1 text-xs font-medium text-[#29156f] transition-colors hover:text-[#e52d36] sm:flex"
                >
                  Ver todos los resultados
                  <ChevronRight className="size-4" />
                </button>
              </div>

              <div className="relative mt-4">
                <button
                  type="button"
                  onClick={() => scrollDryPrizes("left")}
                  className="absolute left-0 top-1/2 z-10 hidden size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#29156f] shadow-md lg:flex"
                  aria-label="Premios anteriores"
                >
                  <ChevronLeft className="size-4" />
                </button>

                <div
                  ref={dryPrizesRef}
                  className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 scrollbar-none"
                >
                  {featuredDryPrizes.map((prize) => (
                    <article
                      key={prize.id}
                      className="min-w-[145px] flex-1 snap-start rounded-xl border border-slate-100 bg-white p-3 text-center shadow-sm transition-shadow hover:shadow-md"
                    >
                      <p className="text-[10px] font-bold text-[#29156f]">
                        {prize.title}
                      </p>

                      <p className="mt-2 text-xl font-black leading-none text-slate-900">
                        {prize.amount}
                      </p>

                      <p className="mt-1 text-[10px] font-medium text-slate-500">
                        MILLONES
                      </p>

                      <div className="mt-4 flex justify-center gap-1">
                        {prize.number.split("").map((digit, index) => (
                          <span
                            key={`${digit}-${index}`}
                            className="flex size-5 items-center justify-center rounded-full bg-[#d91520] text-[10px] font-black text-white"
                          >
                            {digit}
                          </span>
                        ))}
                      </div>

                      <div className="mt-3 rounded bg-[#21104f] px-2 py-1.5 text-[9px] font-bold uppercase tracking-wide text-white">
                        SERIE {prize.series}
                      </div>
                    </article>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => scrollDryPrizes("right")}
                  className="absolute right-0 top-1/2 z-10 hidden size-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#29156f] shadow-md lg:flex"
                  aria-label="Siguientes premios"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>

              <div className="mt-2 flex justify-center gap-2">
                <span className="size-2 rounded-full bg-[#29156f]" />
                <span className="size-2 rounded-full bg-slate-300" />
                <span className="size-2 rounded-full bg-slate-300" />
                <span className="size-2 rounded-full bg-slate-300" />
              </div>

              <button
                type="button"
                onClick={() => setShowAllResults(true)}
                className="mt-4 flex w-full items-center justify-center gap-1 text-xs font-medium text-[#29156f] sm:hidden"
              >
                Ver todos los resultados
                <ChevronRight className="size-4" />
              </button>
            </section>

            {/* APROXIMACIONES */}
            <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-extrabold text-[#29156f]">
                  Aproximaciones destacadas
                </h2>

                <button
                  type="button"
                  className="hidden items-center gap-1 text-xs font-medium text-[#29156f] transition-colors hover:text-[#e52d36] sm:flex"
                >
                  Ver todas las aproximaciones
                  <ChevronRight className="size-4" />
                </button>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {approximations.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-xl border border-slate-100 bg-[#fafafa] p-3 text-center transition-shadow hover:shadow-sm"
                  >
                    <div className="flex justify-center">
                      <ApproximationIcon type={item.icon} />
                    </div>

                    <p className="mt-2 min-h-[28px] text-[9px] font-medium leading-3 text-slate-500">
                      {item.title}
                    </p>

                    <p className="mt-2 text-sm font-black text-[#29156f]">
                      {item.amount}
                    </p>

                    <p className="mt-1 text-[9px] text-slate-500">
                      {item.winners}
                    </p>
                  </article>
                ))}
              </div>

              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-1 text-xs font-medium text-[#29156f] sm:hidden"
              >
                Ver todas las aproximaciones
                <ChevronRight className="size-4" />
              </button>
            </section>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-4">
            {/* CONSULTA TU NUMERO */}
            <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="pointer-events-none absolute -right-8 top-3 opacity-10">
                <Ticket className="size-36 rotate-[-18deg] text-[#29156f]" />
              </div>

              <div className="relative">
                <h2 className="text-xl font-extrabold text-[#29156f]">
                  Consulta tu número
                </h2>

                <p className="mt-2 max-w-[230px] text-xs leading-5 text-slate-500">
                  Verifica si eres uno de nuestros ganadores ingresando
                  tu número y serie del billete.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    value={ticketNumber}
                    onChange={(event) => {
                      const value = event.target.value
                        .replace(/\D/g, "")
                        .slice(0, 4);

                      setTicketNumber(value);
                      setConsulted(false);
                    }}
                    placeholder="Número (4 cifras)"
                    className="h-11 min-w-0 rounded-lg border border-slate-200 bg-white px-3 text-xs text-[#29156f] outline-none transition-colors placeholder:text-slate-400 focus:border-[#29156f]"
                  />

                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={3}
                    value={series}
                    onChange={(event) => {
                      const value = event.target.value
                        .replace(/\D/g, "")
                        .slice(0, 3);

                      setSeries(value);
                      setConsulted(false);
                    }}
                    placeholder="Serie (3 cifras)"
                    className="h-11 min-w-0 rounded-lg border border-slate-200 bg-white px-3 text-xs text-[#29156f] outline-none transition-colors placeholder:text-slate-400 focus:border-[#29156f]"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleConsult}
                  disabled={
                    ticketNumber.length !== 4 || series.length !== 3
                  }
                  className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#29156f] text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#21104f] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Search className="size-4" />
                  Consultar
                </button>

                {consulted && (
                  <div className="mt-4 rounded-lg border border-[#f4c430]/30 bg-[#f4c430]/10 p-3">
                    <p className="text-xs font-bold text-[#29156f]">
                      Consulta registrada
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-slate-500">
                      El resultado detallado de tu número será conectado
                      posteriormente con el sistema oficial de sorteos.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* ACCESOS RAPIDOS */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="p-5 pb-3">
                <h2 className="text-xl font-extrabold text-[#29156f]">
                  Accesos rápidos
                </h2>
              </div>

              <div className="divide-y divide-slate-100">
                <button
                  type="button"
                  className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50"
                >
                  <Star className="size-7 shrink-0 text-[#29156f]" />

                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#29156f]">
                      Ver aproximaciones
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Consulta los premios por aproximación
                    </p>
                  </div>

                  <ChevronRight className="size-5 shrink-0 text-[#29156f]" />
                </button>

                <button
                  type="button"
                  className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50"
                >
                  <FileText className="size-7 shrink-0 text-[#29156f]" />

                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#29156f]">
                      Descargar acta oficial
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Acta del sorteo 2253
                    </p>
                  </div>

                  <ChevronRight className="size-5 shrink-0 text-[#29156f]" />
                </button>

                <button
                  type="button"
                  className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50"
                >
                  <CalendarDays className="size-7 shrink-0 text-[#29156f]" />

                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#29156f]">
                      Histórico de sorteos
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Resultados de sorteos anteriores
                    </p>
                  </div>

                  <ChevronRight className="size-5 shrink-0 text-[#29156f]" />
                </button>

                <button
                  type="button"
                  className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50"
                >
                  <Award className="size-7 shrink-0 text-[#29156f]" />

                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#29156f]">
                      Cómo reclamar tu premio
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Pasos, términos y condiciones
                    </p>
                  </div>

                  <ChevronRight className="size-5 shrink-0 text-[#29156f]" />
                </button>
              </div>
            </section>
          </aside>
        </div>
      </section>

      {/* BANNER INFORMATIVO */}
      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6">
        <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#29156f] text-white">
              <Info className="size-5" />
            </div>

            <p className="text-sm text-slate-600">
              Los premios se reclaman dentro de los{" "}
              <strong className="text-[#29156f]">
                12 meses siguientes
              </strong>{" "}
              a la fecha del sorteo.
            </p>
          </div>

          <button
            type="button"
            className="flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#29156f] transition-colors hover:text-[#e52d36]"
          >
            ¿Cómo reclamar tu premio?
            <ChevronRight className="size-4" />
          </button>
        </div>
      </section>

      {/* =====================================================
          MODAL - TODOS LOS RESULTADOS
      ===================================================== */}
      {showAllResults && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Todos los resultados del sorteo"
        >
          <div className="flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-[#f6f6f8] shadow-2xl">
            {/* CABECERA */}
            <div className="flex items-start justify-between border-b border-slate-200 bg-white px-5 py-5 sm:px-7">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e52d36]">
                  Sorteo extraordinario de Colombia
                </p>

                <h2 className="mt-1 text-2xl font-extrabold text-[#29156f] sm:text-3xl">
                  Todos los resultados
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Sorteo 2253 · Jueves 30 de julio de 2026
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowAllResults(false)}
                className="flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-[#29156f] transition-colors hover:bg-slate-100"
                aria-label="Cerrar resultados"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* CONTENIDO */}
            <div className="overflow-y-auto px-4 py-5 sm:px-7 sm:py-7">
              <div className="space-y-8">
                {/* PREMIO MAYOR */}
                <section>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#29156f] text-white">
                      <Award className="size-5" />
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-[#29156f]">
                        Premio Mayor
                      </h3>

                      <p className="text-xs text-slate-500">
                        1 ganador · $15.000 millones
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#29156f]/10 bg-white p-5 shadow-sm">
                    <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-[#29156f]">
                          Premio Mayor
                        </p>

                        <p className="mt-2 text-3xl font-black text-slate-900">
                          $15.000 millones
                        </p>
                      </div>

                      <div className="text-center">
                        <p className="mb-3 text-xs font-medium text-[#29156f]">
                          Número y serie ganadores
                        </p>

                        <div className="flex flex-wrap items-end justify-center gap-3">
                          <NumberBalls number="9484" />

                          <div className="flex flex-col items-center">
                            <span className="mb-2 rounded bg-[#f4c430] px-2 py-1 text-[9px] font-black uppercase text-[#29156f]">
                              Serie
                            </span>

                            <div className="flex size-12 items-center justify-center rounded-full bg-[#21104f] text-lg font-black text-white shadow-md">
                              274
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* PREMIOS SECOS PRINCIPALES */}
                <section>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#e52d36] text-white">
                      <Gift className="size-5" />
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-[#29156f]">
                        Premios secos
                      </h3>

                      <p className="text-xs text-slate-500">
                        25 resultados ganadores
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {dryPrizes.slice(0, 5).map((prize) => (
                      <article
                        key={prize.id}
                        className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-xs font-bold uppercase text-[#29156f]">
                              {prize.title}
                            </p>

                            <p className="mt-1 text-xl font-black text-slate-900">
                              {prize.amount} millones
                            </p>
                          </div>

                          <span className="rounded-full bg-[#f6f6f8] px-2 py-1 text-[9px] font-bold text-slate-500">
                            1 ganador
                          </span>
                        </div>

                        <div className="mt-5">
                          <p className="mb-2 text-[10px] font-medium text-slate-500">
                            Número ganador
                          </p>

                          <NumberBalls
                            number={prize.number}
                            size="small"
                          />
                        </div>

                        <div className="mt-4 rounded-lg bg-[#21104f] px-3 py-2 text-center text-[10px] font-bold uppercase tracking-wide text-white">
                          Serie {prize.series}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                {/* PREMIOS DE 20 MILLONES */}
                <section>
                  <div className="mb-4">
                    <h3 className="text-lg font-extrabold text-[#29156f]">
                      Premios secos de $20 millones
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      10 resultados ganadores
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    {twentyMillionPrizes.map((prize) => (
                      <article
                        key={prize.id}
                        className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm"
                      >
                        <p className="text-[10px] font-bold text-[#29156f]">
                          {prize.title}
                        </p>

                        <p className="mt-1 text-sm font-black text-slate-900">
                          $20 millones
                        </p>

                        <div className="mt-3">
                          <NumberBalls
                            number={prize.number}
                            size="small"
                          />
                        </div>

                        <div className="mt-3 rounded bg-[#21104f] px-2 py-1.5 text-[9px] font-bold text-white">
                          SERIE {prize.series}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                {/* PREMIOS DE 10 MILLONES */}
                <section>
                  <div className="mb-4">
                    <h3 className="text-lg font-extrabold text-[#29156f]">
                      Premios secos de $10 millones
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      10 resultados ganadores
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    {tenMillionPrizes.map((prize) => (
                      <article
                        key={prize.id}
                        className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm"
                      >
                        <p className="text-[10px] font-bold text-[#29156f]">
                          {prize.title}
                        </p>

                        <p className="mt-1 text-sm font-black text-slate-900">
                          $10 millones
                        </p>

                        <div className="mt-3">
                          <NumberBalls
                            number={prize.number}
                            size="small"
                          />
                        </div>

                        <div className="mt-3 rounded bg-[#21104f] px-2 py-1.5 text-[9px] font-bold text-white">
                          SERIE {prize.series}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                {/* INCENTIVOS ESPECIALES */}
                <section>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#f4c430] text-[#29156f]">
                      <Gift className="size-5" />
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-[#29156f]">
                        Incentivos especiales
                      </h3>

                      <p className="text-xs text-slate-500">
                        4 resultados ganadores
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {specialIncentives.map((incentive) => (
                      <article
                        key={incentive.id}
                        className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#f6f6f8]">
                            <IncentiveIcon type={incentive.icon} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="text-base font-extrabold text-[#29156f]">
                              {incentive.title}
                            </p>

                            <p className="mt-1 text-lg font-black text-[#e52d36]">
                              {incentive.amount}
                            </p>

                            <p className="mt-4 text-[10px] font-medium text-slate-500">
                              Número ganador
                            </p>

                            <div className="mt-2">
                              <NumberBalls
                                number={incentive.number}
                                size="small"
                              />
                            </div>

                            <div className="mt-4 inline-flex rounded bg-[#21104f] px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-white">
                              Serie {incentive.series}
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                {/* RECAMBIO GANADOR */}
                <section>
                  <div className="overflow-hidden rounded-2xl bg-[#29156f] p-5 text-white shadow-lg sm:p-7">
                    <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="flex size-11 items-center justify-center rounded-full bg-[#f4c430] text-[#29156f]">
                            <RefreshCw className="size-5" />
                          </div>

                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f4c430]">
                              Incentivo especial
                            </p>

                            <h3 className="text-2xl font-extrabold">
                              Recambio Ganador
                            </h3>
                          </div>
                        </div>

                        <p className="mt-5 max-w-xl text-sm leading-6 text-white/80">
                          Una nueva oportunidad para ganar con tu billete.
                          Para esta mecánica únicamente participan las
                          últimas 2 cifras del número.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/15 bg-white/5 p-4">
                          <p className="text-[10px] font-bold uppercase tracking-wide text-[#f4c430]">
                            Importante
                          </p>

                          <p className="mt-2 text-sm font-medium leading-6 text-white">
                            Juega únicamente con las{" "}
                            <strong>
                              últimas 2 cifras del número de tu billete.
                            </strong>
                          </p>

                          <p className="mt-2 text-xs font-bold text-[#f4c430]">
                            La serie NO participa en esta mecánica.
                          </p>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
                        <p className="text-xs font-bold uppercase tracking-wide text-[#29156f]">
                          Número ganador
                        </p>

                        <div className="mt-4 flex justify-center gap-3">
                          {["2", "4"].map((digit, index) => (
                            <div
                              key={`${digit}-${index}`}
                              className="flex size-16 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#f34b51,#dc1722_58%,#b60d17)] text-2xl font-black text-white shadow-md"
                            >
                              {digit}
                            </div>
                          ))}
                        </div>

                        <p className="mt-4 max-w-[210px] text-[10px] leading-4 text-slate-500">
                          Coincide con las últimas 2 cifras del número
                          de tu billete.
                        </p>

                        <p className="mt-1 text-[10px] font-bold text-[#e52d36]">
                          La serie no cuenta.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* NOTA */}
                <div className="rounded-xl border border-[#f4c430]/30 bg-[#f4c430]/10 p-4">
                  <div className="flex items-start gap-3">
                    <Info className="mt-0.5 size-5 shrink-0 text-[#b88900]" />

                    <p className="text-xs leading-5 text-slate-600">
                      Las aproximaciones no se muestran en este listado.
                      Para verificar si tu número ganó por aproximación,
                      utiliza el buscador ingresando el número y la serie
                      de tu billete.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PIE */}
            <div className="flex justify-end border-t border-slate-200 bg-white px-5 py-4 sm:px-7">
              <button
                type="button"
                onClick={() => setShowAllResults(false)}
                className="flex h-10 items-center justify-center rounded-lg bg-[#29156f] px-5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#21104f]"
              >
                Cerrar resultados
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}