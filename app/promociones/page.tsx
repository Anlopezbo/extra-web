"use client";

import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  FileText,
  Gift,
  History,
  Search,
  Sparkles,
  Ticket,
  Trophy,
  X,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";

type PromotionStatus = "vigente" | "proxima" | "finalizada";

type Promotion = {
  id: number;
  title: string;
  status: PromotionStatus;
  startDate: string;
  endDate: string;
  dateLabel: string;
  description: string;
  prize: string;
  prizeLabel: string;
  gradient: string;
  accent: string;
  graphic: "soccer" | "scratch" | "millions" | "bonus" | "double" | "travel" | "gold";
};

const promotions: Promotion[] = [
  {
    id: 1,
    title: "Extra Mundialista",
    status: "vigente",
    startDate: "2026-06-15",
    endDate: "2026-08-15",
    dateLabel: "15 jun - 15 ago 2026",
    description:
      "Si tu billete tiene las 4 últimas cifras iguales al resultado del sorteo, ganas.",
    prize: "$100.000.000",
    prizeLabel: "Premio mayor",
    gradient:
      "linear-gradient(135deg, #07133b 0%, #09245f 48%, #1555a6 100%)",
    accent: "#67b7ff",
    graphic: "soccer",
  },
  {
    id: 2,
    title: "Raspa y Gana EXTRA",
    status: "vigente",
    startDate: "2026-05-01",
    endDate: "2026-09-30",
    dateLabel: "01 may - 30 sep 2026",
    description:
      "Raspa la zona de tu billete y descubre si eres uno de los ganadores al instante.",
    prize: "$20.000.000",
    prizeLabel: "Premio mayor",
    gradient:
      "linear-gradient(135deg, #570000 0%, #a30000 52%, #db3a00 100%)",
    accent: "#ffcc2e",
    graphic: "scratch",
  },
  {
    id: 3,
    title: "Extra 500 Millones",
    status: "vigente",
    startDate: "2026-06-01",
    endDate: "2026-12-31",
    dateLabel: "01 jun - 31 dic 2026",
    description:
      "Por la compra de tu billete participas por el premio mayor de 500 millones.",
    prize: "$500.000.000",
    prizeLabel: "Premio mayor",
    gradient:
      "linear-gradient(135deg, #220652 0%, #4c137d 50%, #17114c 100%)",
    accent: "#f4c430",
    graphic: "millions",
  },
  {
    id: 4,
    title: "Bono Especial EXTRA",
    status: "proxima",
    startDate: "2026-09-01",
    endDate: "2026-11-30",
    dateLabel: "Próximamente",
    description:
      "Muy pronto una nueva promoción con premios increíbles para nuestros jugadores.",
    prize: "Próximamente",
    prizeLabel: "Premios especiales",
    gradient:
      "linear-gradient(135deg, #29156f 0%, #5c238c 48%, #8d5b00 100%)",
    accent: "#f4c430",
    graphic: "bonus",
  },
  {
    id: 5,
    title: "Duplica tus Ganas",
    status: "finalizada",
    startDate: "2026-03-01",
    endDate: "2026-04-30",
    dateLabel: "01 mar - 30 abr 2026",
    description:
      "Si ganas un premio seco, lo duplicamos. Una promoción para ganar aún más.",
    prize: "$200.000.000",
    prizeLabel: "Premio mayor",
    gradient:
      "linear-gradient(135deg, #062c1d 0%, #07592d 55%, #0b3523 100%)",
    accent: "#f4c430",
    graphic: "double",
  },
  {
    id: 6,
    title: "Viaja con el EXTRA",
    status: "proxima",
    startDate: "2026-10-01",
    endDate: "2026-12-20",
    dateLabel: "01 oct - 20 dic 2026",
    description:
      "Participa por una experiencia de viaje y premios especiales con tu billete.",
    prize: "$40.000.000",
    prizeLabel: "Valor del incentivo",
    gradient:
      "linear-gradient(135deg, #071c4f 0%, #164d9d 55%, #4e207f 100%)",
    accent: "#f4c430",
    graphic: "travel",
  },
  {
    id: 7,
    title: "Lluvia de Oro",
    status: "finalizada",
    startDate: "2026-01-10",
    endDate: "2026-02-28",
    dateLabel: "10 ene - 28 feb 2026",
    description:
      "Una promoción especial que entregó múltiples oportunidades de ganar.",
    prize: "$50.000.000",
    prizeLabel: "Premio mayor",
    gradient:
      "linear-gradient(135deg, #24154e 0%, #6d4b00 58%, #3f2600 100%)",
    accent: "#f4c430",
    graphic: "gold",
  },
  {
    id: 8,
    title: "EXTRA Navidad",
    status: "finalizada",
    startDate: "2025-12-01",
    endDate: "2025-12-31",
    dateLabel: "01 dic - 31 dic 2025",
    description:
      "La promoción de fin de año con premios y oportunidades adicionales.",
    prize: "$150.000.000",
    prizeLabel: "Premio mayor",
    gradient:
      "linear-gradient(135deg, #530914 0%, #941826 50%, #1f5c36 100%)",
    accent: "#f4c430",
    graphic: "double",
  },
  {
    id: 9,
    title: "EXTRA Premiado",
    status: "finalizada",
    startDate: "2025-08-01",
    endDate: "2025-10-15",
    dateLabel: "01 ago - 15 oct 2025",
    description:
      "Una campaña especial con premios adicionales para los jugadores.",
    prize: "$80.000.000",
    prizeLabel: "Premio mayor",
    gradient:
      "linear-gradient(135deg, #151049 0%, #34237b 52%, #a91c2b 100%)",
    accent: "#f4c430",
    graphic: "gold",
  },
  {
    id: 10,
    title: "Bono Ganador",
    status: "finalizada",
    startDate: "2025-04-01",
    endDate: "2025-06-30",
    dateLabel: "01 abr - 30 jun 2025",
    description:
      "Premios especiales y beneficios adicionales para los jugadores del EXTRA.",
    prize: "$70.000.000",
    prizeLabel: "Premio mayor",
    gradient:
      "linear-gradient(135deg, #09294d 0%, #0d5d76 52%, #29156f 100%)",
    accent: "#f4c430",
    graphic: "bonus",
  },
  {
    id: 11,
    title: "Sorpresa EXTRA",
    status: "finalizada",
    startDate: "2024-11-01",
    endDate: "2024-12-31",
    dateLabel: "01 nov - 31 dic 2024",
    description:
      "Una oportunidad adicional de ganar premios con tu participación.",
    prize: "$30.000.000",
    prizeLabel: "Premio mayor",
    gradient:
      "linear-gradient(135deg, #4d0a6d 0%, #79153d 55%, #16114c 100%)",
    accent: "#f4c430",
    graphic: "scratch",
  },
  {
    id: 12,
    title: "Gran EXTRA",
    status: "finalizada",
    startDate: "2024-06-01",
    endDate: "2024-08-31",
    dateLabel: "01 jun - 31 ago 2024",
    description:
      "Promoción histórica con múltiples oportunidades para nuestros jugadores.",
    prize: "$120.000.000",
    prizeLabel: "Premio mayor",
    gradient:
      "linear-gradient(135deg, #14205a 0%, #39277d 50%, #8a4e00 100%)",
    accent: "#f4c430",
    graphic: "millions",
  },
  {
    id: 13,
    title: "Premios de Verano",
    status: "finalizada",
    startDate: "2024-01-15",
    endDate: "2024-03-31",
    dateLabel: "15 ene - 31 mar 2024",
    description:
      "Una promoción especial con incentivos adicionales y grandes premios.",
    prize: "$60.000.000",
    prizeLabel: "Premio mayor",
    gradient:
      "linear-gradient(135deg, #064b70 0%, #147c92 50%, #31206e 100%)",
    accent: "#f4c430",
    graphic: "travel",
  },
];

const statusConfig: Record<
  PromotionStatus,
  {
    label: string;
    className: string;
  }
> = {
  vigente: {
    label: "ACTIVA",
    className: "bg-[#2d7d46] text-white",
  },
  proxima: {
    label: "PRÓXIMA",
    className: "bg-[#f4b400] text-[#29156f]",
  },
  finalizada: {
    label: "FINALIZADA",
    className: "bg-slate-500 text-white",
  },
};

function PromotionGraphic({
  type,
  title,
}: {
  type: Promotion["graphic"];
  title: string;
}) {
  if (type === "soccer") {
    return (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(69,142,255,0.4),transparent_35%)]" />

        <div className="absolute -bottom-8 left-1/2 flex size-28 -translate-x-1/2 items-center justify-center rounded-full bg-white text-5xl shadow-2xl">
          ⚽
        </div>

        <div className="relative z-10 pt-6 text-center">
          <p className="text-xl font-black leading-none text-white sm:text-2xl">
            EXTRA
          </p>

          <p className="mt-1 text-lg font-black leading-none text-white">
            MUNDIALISTA
          </p>
        </div>
      </>
    );
  }

  if (type === "scratch") {
    return (
      <>
        <div className="absolute right-3 top-2 size-6 rotate-12 rounded-lg bg-[#f4c430]/70" />
        <div className="absolute bottom-5 left-8 size-4 rotate-45 bg-[#f4c430]/70" />
        <div className="absolute right-14 top-14 size-5 rotate-45 bg-[#f4c430]/60" />

        <div className="relative z-10 pt-5 text-center">
          <p className="text-xl font-black leading-none text-white">
            RASPA
          </p>

          <p className="text-lg font-black leading-none text-[#f4c430]">
            Y GANA
          </p>

          <p className="mt-1 text-xl font-black leading-none text-white">
            EXTRA
          </p>
        </div>
      </>
    );
  }

  if (type === "millions") {
    return (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,rgba(244,196,48,0.16),transparent_40%)]" />

        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="absolute size-2 rotate-45 bg-[#f4c430]"
            style={{
              left: `${10 + ((index * 17) % 85)}%`,
              top: `${10 + ((index * 23) % 70)}%`,
            }}
          />
        ))}

        <div className="relative z-10 pt-5 text-center">
          <p className="text-xl font-black leading-none text-[#f4c430]">
            EXTRA
          </p>

          <p className="mt-1 text-4xl font-black leading-none text-[#f4c430]">
            500
          </p>

          <p className="text-xl font-black leading-none text-white">
            MILLONES
          </p>
        </div>
      </>
    );
  }

  if (type === "bonus") {
    return (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(244,196,48,0.2),transparent_35%)]" />

        <div className="absolute right-5 top-5 size-5 rotate-45 bg-[#f4c430]" />
        <div className="absolute bottom-6 left-8 size-3 rotate-45 bg-[#f4c430]" />

        <div className="absolute left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 rotate-[-7deg] rounded-lg border border-[#f4c430]/40 bg-[#29156f]/70 px-3 py-4 text-center shadow-xl">
          <p className="text-xl font-black leading-5 text-[#f4c430]">
            BONO
          </p>

          <p className="text-xl font-black leading-5 text-[#f4c430]">
            ESPECIAL
          </p>

          <p className="mt-1 text-sm font-black text-white">
            EXTRA
          </p>
        </div>
      </>
    );
  }

  if (type === "double") {
    return (
      <>
        <div className="absolute -right-5 top-0 size-24 rounded-full bg-[#f4c430]/10 blur-xl" />

        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="absolute size-2 rotate-45 bg-[#f4c430]"
            style={{
              left: `${5 + ((index * 19) % 90)}%`,
              top: `${8 + ((index * 29) % 80)}%`,
            }}
          />
        ))}

        <div className="relative z-10 pt-6 text-center">
          <p className="text-2xl font-black leading-none text-white">
            DUPLICA
          </p>

          <p className="mt-1 text-2xl font-black leading-none text-[#f4c430]">
            TUS GANAS
          </p>
        </div>
      </>
    );
  }

  if (type === "travel") {
    return (
      <>
        <div className="absolute -right-3 bottom-0 text-7xl opacity-30">
          ✈
        </div>

        <div className="relative z-10 pt-7 text-center">
          <p className="text-lg font-black text-white">VIAJA CON</p>

          <p className="text-3xl font-black leading-none text-[#f4c430]">
            EXTRA
          </p>

          <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            Nuevas experiencias
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      {[...Array(14)].map((_, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-[#f4c430]"
          style={{
            width: `${5 + (index % 3) * 4}px`,
            height: `${5 + (index % 3) * 4}px`,
            left: `${5 + ((index * 13) % 90)}%`,
            top: `${5 + ((index * 31) % 85)}%`,
          }}
        />
      ))}

      <div className="relative z-10 pt-7 text-center">
        <p className="text-2xl font-black text-[#f4c430]">
          {title.toUpperCase()}
        </p>

        <p className="mt-2 text-sm font-bold uppercase tracking-widest text-white">
          Grandes oportunidades
        </p>
      </div>
    </>
  );
}

export default function PromocionesPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [activeFilter, setActiveFilter] = useState<
    "todas" | PromotionStatus
  >("todas");

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("recent");
  const [selectedPromotion, setSelectedPromotion] =
    useState<Promotion | null>(null);

  const counts = useMemo(() => {
    return {
      todas: promotions.length,
      vigente: promotions.filter(
        (promotion) => promotion.status === "vigente"
      ).length,
      proxima: promotions.filter(
        (promotion) => promotion.status === "proxima"
      ).length,
      finalizada: promotions.filter(
        (promotion) => promotion.status === "finalizada"
      ).length,
    };
  }, []);

  const filteredPromotions = useMemo(() => {
    let result = [...promotions];

    if (activeFilter !== "todas") {
      result = result.filter(
        (promotion) => promotion.status === activeFilter
      );
    }

    const normalizedSearch = search.trim().toLowerCase();

    if (normalizedSearch) {
      result = result.filter((promotion) => {
        return (
          promotion.title.toLowerCase().includes(normalizedSearch) ||
          promotion.description.toLowerCase().includes(normalizedSearch) ||
          promotion.prize.toLowerCase().includes(normalizedSearch)
        );
      });
    }

    if (sortOrder === "oldest") {
      result.sort(
        (a, b) =>
          new Date(a.startDate).getTime() -
          new Date(b.startDate).getTime()
      );
    }

    if (sortOrder === "alphabetical") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortOrder === "recent") {
      result.sort(
        (a, b) =>
          new Date(b.startDate).getTime() -
          new Date(a.startDate).getTime()
      );
    }

    return result;
  }, [activeFilter, search, sortOrder]);

  const scrollPromotions = (direction: "left" | "right") => {
    if (!carouselRef.current) {
      return;
    }

    carouselRef.current.scrollBy({
      left: direction === "right" ? 420 : -420,
      behavior: "smooth",
    });
  };

  const handleFilterChange = (
    filter: "todas" | PromotionStatus
  ) => {
    setActiveFilter(filter);
  };

  const visiblePromotions = filteredPromotions.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#f6f6f8]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#18124c]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_40%,rgba(77,34,149,0.85),transparent_28%),radial-gradient(circle_at_20%_70%,rgba(45,22,108,0.85),transparent_45%)]" />

        {/* Decoración */}
        <div className="absolute right-[11%] top-[10%] hidden h-44 w-36 rotate-[8deg] rounded-xl border border-[#f4c430]/30 bg-[#2f1a71] p-5 shadow-2xl lg:block">
          <p className="text-center text-2xl font-black leading-tight text-[#f4c430]">
            GANAR
          </p>

          <p className="text-center text-2xl font-black leading-tight text-[#f4c430]">
            TE HACE
          </p>

          <p className="text-center text-2xl font-black leading-tight text-[#f4c430]">
            EXTRA
          </p>

          <p className="mt-2 text-center text-sm font-bold uppercase text-white">
            Ordinario
          </p>
        </div>

        <div className="absolute bottom-[-30px] right-[2%] hidden size-32 rounded-xl bg-[#5a168e] shadow-2xl lg:block">
          <div className="absolute -top-5 left-1/2 h-8 w-16 -translate-x-1/2 rounded-t-full bg-[#f4c430]" />

          <div className="absolute bottom-0 left-1/2 h-full w-6 -translate-x-1/2 bg-[#f4c430]" />
        </div>

        {[...Array(16)].map((_, index) => (
          <div
            key={index}
            className="absolute size-2 rotate-45 bg-[#f4c430]"
            style={{
              left: `${45 + ((index * 9) % 50)}%`,
              top: `${12 + ((index * 17) % 75)}%`,
              opacity: 0.35 + (index % 3) * 0.2,
            }}
          />
        ))}

        <div className="relative mx-auto max-w-7xl px-4 py-7 sm:px-6 md:py-8">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Promociones del EXTRA
            </h1>

            <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
              Encuentra todas nuestras promociones, beneficios y
              oportunidades para ganar increíbles premios.
            </p>

            {/* CONTADORES */}
            <div className="mt-5 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              <button
                type="button"
                onClick={() => handleFilterChange("vigente")}
                className={`rounded-xl border bg-white px-4 py-3 text-left shadow-lg transition-transform hover:-translate-y-0.5 ${
                  activeFilter === "vigente"
                    ? "border-[#2d7d46] ring-2 ring-[#2d7d46]/20"
                    : "border-white/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-[#2d7d46]/10 text-[#2d7d46]">
                    <CalendarDays className="size-5" />
                  </div>

                  <div>
                    <p className="text-xl font-black text-[#29156f]">
                      {counts.vigente}
                    </p>

                    <p className="text-[10px] font-bold uppercase tracking-wide text-[#2d7d46]">
                      Vigentes
                    </p>
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleFilterChange("proxima")}
                className={`rounded-xl border bg-white px-4 py-3 text-left shadow-lg transition-transform hover:-translate-y-0.5 ${
                  activeFilter === "proxima"
                    ? "border-[#f4b400] ring-2 ring-[#f4b400]/20"
                    : "border-white/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-[#f4c430]/15 text-[#b07d00]">
                    <CalendarDays className="size-5" />
                  </div>

                  <div>
                    <p className="text-xl font-black text-[#29156f]">
                      {counts.proxima}
                    </p>

                    <p className="text-[10px] font-bold uppercase tracking-wide text-[#b07d00]">
                      Próximas
                    </p>
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleFilterChange("finalizada")}
                className={`rounded-xl border bg-white px-4 py-3 text-left shadow-lg transition-transform hover:-translate-y-0.5 ${
                  activeFilter === "finalizada"
                    ? "border-slate-500 ring-2 ring-slate-500/20"
                    : "border-white/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                    <History className="size-5" />
                  </div>

                  <div>
                    <p className="text-xl font-black text-[#29156f]">
                      {counts.finalizada}
                    </p>

                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                      Finalizadas
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FILTROS
      ===================================================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex overflow-x-auto rounded-xl border border-slate-200 bg-[#f8f8fa] p-1">
            <button
              type="button"
              onClick={() => handleFilterChange("todas")}
              className={`flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition-colors ${
                activeFilter === "todas"
                  ? "bg-[#29156f] text-white shadow-sm"
                  : "text-slate-500 hover:bg-white"
              }`}
            >
              <Sparkles className="size-4" />
              Todas las promociones
            </button>

            <button
              type="button"
              onClick={() => handleFilterChange("vigente")}
              className={`flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition-colors ${
                activeFilter === "vigente"
                  ? "bg-[#29156f] text-white shadow-sm"
                  : "text-slate-500 hover:bg-white"
              }`}
            >
              <CalendarDays className="size-4" />
              Vigentes
            </button>

            <button
              type="button"
              onClick={() => handleFilterChange("proxima")}
              className={`flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition-colors ${
                activeFilter === "proxima"
                  ? "bg-[#29156f] text-white shadow-sm"
                  : "text-slate-500 hover:bg-white"
              }`}
            >
              <CalendarDays className="size-4" />
              Próximas
            </button>

            <button
              type="button"
              onClick={() => handleFilterChange("finalizada")}
              className={`flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition-colors ${
                activeFilter === "finalizada"
                  ? "bg-[#29156f] text-white shadow-sm"
                  : "text-slate-500 hover:bg-white"
              }`}
            >
              <History className="size-4" />
              Finalizadas
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_180px] lg:w-[520px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#29156f]" />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar promociones..."
                className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-xs text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#29156f]"
              />
            </div>

            <div className="relative">
              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
                className="h-11 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-9 text-xs font-medium text-slate-600 outline-none focus:border-[#29156f]"
              >
                <option value="recent">Más recientes</option>
                <option value="oldest">Más antiguas</option>
                <option value="alphabetical">A - Z</option>
              </select>

              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROMOCIONES
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 md:py-6">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d91520]">
              Oportunidades para ganar
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-[#29156f]">
              {activeFilter === "todas"
                ? "Todas las promociones"
                : activeFilter === "vigente"
                  ? "Promociones vigentes"
                  : activeFilter === "proxima"
                    ? "Próximas promociones"
                    : "Promociones finalizadas"}
            </h2>
          </div>

          <p className="text-xs text-slate-500">
            {filteredPromotions.length}{" "}
            {filteredPromotions.length === 1
              ? "promoción encontrada"
              : "promociones encontradas"}
          </p>
        </div>

        {filteredPromotions.length > 0 ? (
          <div className="relative">
            {filteredPromotions.length > 3 && (
              <>
                <button
                  type="button"
                  onClick={() => scrollPromotions("left")}
                  className="absolute -left-4 top-[42%] z-10 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#29156f] shadow-lg transition-colors hover:bg-[#29156f] hover:text-white xl:flex"
                  aria-label="Promociones anteriores"
                >
                  <ChevronLeft className="size-5" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollPromotions("right")}
                  className="absolute -right-4 top-[42%] z-10 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#29156f] shadow-lg transition-colors hover:bg-[#29156f] hover:text-white xl:flex"
                  aria-label="Siguientes promociones"
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}

            <div
              ref={carouselRef}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {visiblePromotions.map((promotion) => (
                <article
                  key={promotion.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Banner */}
                  <div
                    className="relative h-32 overflow-hidden"
                    style={{
                      background: promotion.gradient,
                    }}
                  >
                    <PromotionGraphic
                      type={promotion.graphic}
                      title={promotion.title}
                    />

                    <span
                      className={`absolute left-3 top-3 z-20 rounded px-2 py-1 text-[9px] font-black uppercase tracking-wide shadow-sm ${statusConfig[promotion.status].className}`}
                    >
                      {statusConfig[promotion.status].label}
                    </span>
                  </div>

                  {/* Contenido */}
                  <div className="p-4">
                    <h3 className="text-sm font-extrabold text-[#29156f]">
                      {promotion.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-1.5 text-[10px] font-medium text-slate-500">
                      <CalendarDays className="size-3.5 text-[#29156f]" />

                      <span>{promotion.dateLabel}</span>
                    </div>

                    <p className="mt-3 min-h-[54px] text-[10px] leading-4 text-slate-600">
                      {promotion.description}
                    </p>

                    <div className="mt-3 flex items-center gap-1.5 text-[10px] text-slate-600">
                      <Trophy className="size-3.5 text-[#29156f]" />

                      <span>{promotion.prizeLabel}:</span>

                      <strong className="text-[#29156f]">
                        {promotion.prize}
                      </strong>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedPromotion(promotion)}
                      className="mt-4 flex h-10 w-full items-center justify-between rounded-lg border border-slate-200 px-4 text-xs font-bold uppercase tracking-wide text-[#29156f] transition-all hover:border-[#29156f] hover:bg-[#29156f] hover:text-white"
                    >
                      Ver detalles

                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-[#29156f]/10 text-[#29156f]">
              <Search className="size-6" />
            </div>

            <h3 className="mt-4 text-lg font-extrabold text-[#29156f]">
              No encontramos promociones
            </h3>

            <p className="mt-2 max-w-sm text-xs leading-5 text-slate-500">
              Intenta cambiar los filtros o realizar una búsqueda diferente.
            </p>

            <button
              type="button"
              onClick={() => {
                setActiveFilter("todas");
                setSearch("");
              }}
              className="mt-4 rounded-lg bg-[#29156f] px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#21104f]"
            >
              Ver todas las promociones
            </button>
          </div>
        )}

        {filteredPromotions.length > visiblePromotions.length && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-[#29156f] px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#29156f] transition-colors hover:bg-[#29156f] hover:text-white"
              onClick={() =>
                setActiveFilter(
                  activeFilter === "todas" ? "finalizada" : activeFilter
                )
              }
            >
              Ver más promociones
              <ChevronRight className="size-4" />
            </button>
          </div>
        )}
      </section>

      {/* =====================================================
          INFORMACION INFERIOR
      ===================================================== */}
      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-6 sm:px-6 lg:grid-cols-[1.5fr_0.9fr]">
        {/* COMO PARTICIPAR */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d91520]">
              Es muy fácil
            </p>

            <h2 className="mt-1 text-xl font-extrabold text-[#29156f]">
              ¿Cómo participar?
            </h2>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <div className="relative flex gap-3 md:flex-col">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#29156f] text-sm font-black text-white">
                1
              </div>

              <div>
                <p className="text-sm font-bold text-[#29156f]">
                  Compra
                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-500">
                  Adquiere tu billete EXTRA en puntos de venta autorizados.
                </p>
              </div>

              <ChevronRight className="absolute -right-4 top-1/2 hidden size-5 -translate-y-1/2 text-slate-300 md:block" />
            </div>

            <div className="relative flex gap-3 md:flex-col">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#29156f] text-sm font-black text-white">
                2
              </div>

              <div>
                <p className="text-sm font-bold text-[#29156f]">
                  Participa
                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-500">
                  Tu billete participa automáticamente en las promociones
                  vigentes.
                </p>
              </div>

              <ChevronRight className="absolute -right-4 top-1/2 hidden size-5 -translate-y-1/2 text-slate-300 md:block" />
            </div>

            <div className="flex gap-3 md:flex-col">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#29156f] text-sm font-black text-white">
                3
              </div>

              <div>
                <p className="text-sm font-bold text-[#29156f]">
                  Gana
                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-500">
                  Si eres ganador, sigue las instrucciones para reclamar tu
                  premio.
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="mt-5 flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-5 text-xs font-bold uppercase tracking-wide text-[#29156f] transition-colors hover:border-[#29156f] hover:bg-[#f8f7fc]"
          >
            <FileText className="size-4" />
            Ver términos y condiciones
          </button>
        </section>

        {/* ACCESOS */}
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#f4c430]/20 text-[#b17a00]">
                <CircleHelp className="size-6" />
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-extrabold text-[#29156f]">
                  ¿Tienes dudas?
                </h3>

                <p className="mt-1 text-[10px] text-slate-500">
                  Nuestro equipo de atención está listo para ayudarte.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="mt-4 flex h-10 w-full items-center justify-between rounded-lg border border-slate-200 px-4 text-xs font-bold uppercase text-[#29156f] transition-colors hover:bg-[#29156f] hover:text-white"
            >
              Contáctanos
              <ChevronRight className="size-4" />
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#29156f]/10 text-[#29156f]">
                <History className="size-6" />
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-extrabold text-[#29156f]">
                  Promociones finalizadas
                </h3>

                <p className="mt-1 text-[10px] text-slate-500">
                  Revisa las promociones anteriores y sus ganadores.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleFilterChange("finalizada")}
              className="mt-4 flex h-10 w-full items-center justify-between rounded-lg border border-slate-200 px-4 text-xs font-bold uppercase text-[#29156f] transition-colors hover:bg-[#29156f] hover:text-white"
            >
              Ver histórico de promociones
              <ChevronRight className="size-4" />
            </button>
          </section>
        </div>
      </section>

      {/* =====================================================
          MODAL DETALLES
      ===================================================== */}
      {selectedPromotion && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedPromotion(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="relative h-44 overflow-hidden"
              style={{
                background: selectedPromotion.gradient,
              }}
            >
              <PromotionGraphic
                type={selectedPromotion.graphic}
                title={selectedPromotion.title}
              />

              <button
                type="button"
                onClick={() => setSelectedPromotion(null)}
                className="absolute right-4 top-4 z-30 flex size-9 items-center justify-center rounded-full bg-white/90 text-[#29156f] shadow-md transition-colors hover:bg-white"
                aria-label="Cerrar"
              >
                <X className="size-5" />
              </button>

              <span
                className={`absolute bottom-4 left-5 z-20 rounded px-2.5 py-1 text-[9px] font-black uppercase tracking-wide ${statusConfig[selectedPromotion.status].className}`}
              >
                {statusConfig[selectedPromotion.status].label}
              </span>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-extrabold text-[#29156f]">
                {selectedPromotion.title}
              </h2>

              <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                <CalendarDays className="size-4 text-[#29156f]" />
                {selectedPromotion.dateLabel}
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                {selectedPromotion.description}
              </p>

              <div className="mt-5 rounded-xl bg-[#f6f4fb] p-4">
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  {selectedPromotion.prizeLabel}
                </p>

                <p className="mt-1 text-2xl font-black text-[#29156f]">
                  {selectedPromotion.prize}
                </p>
              </div>

              <div className="mt-5 rounded-xl border border-slate-200 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#f4c430]/20 text-[#b17a00]">
                    <Gift className="size-5" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#29156f]">
                      Información de la promoción
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Esta es información simulada para la etapa actual del
                      desarrollo. Cuando las promociones oficiales estén
                      definidas, este contenido podrá conectarse directamente
                      con la información real.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPromotion(null)}
                className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#29156f] text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#21104f]"
              >
                Entendido
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}