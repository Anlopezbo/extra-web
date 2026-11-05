import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  ChevronRight,
  ShoppingCart,
  Trophy,
  UserRound,
} from "lucide-react";

import { Container } from "@/components/common/container";
import { NumberChecker } from "@/components/home/number-checker";

const promotions = [
  {
    label: "PROMOCIÓN",
    title: "Región Ganadora",
    description: "El Extra llega a tu región.",
  },
  {
    label: "BONO",
    title: "Bono Casa",
    description: "Gana tu casa soñada.",
  },
  {
    label: "BONO",
    title: "Bono Carro",
    description: "Llévate tu carro 0 km.",
  },
  {
    label: "BONO",
    title: "Bono Viaje",
    description: "Viaja donde siempre quisiste.",
  },
];

const news = [
  {
    date: "4 de agosto de 2026",
    title: "¡El Gran Extraordinario del Quindío está de regreso!",
  },
  {
    date: "4 de agosto de 2026",
    title: "Celebramos juntos nuestra historia y nuestros premios.",
  },
  {
    date: "4 de agosto de 2026",
    title: "Por los mismos $20.000 pesos del billete.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#f5f7fb]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#29156f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,205,0,0.12),transparent_28%),radial-gradient(circle_at_85%_50%,rgba(255,70,50,0.16),transparent_30%)]" />

        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)]" />
        </div>

        <Container>
          <div className="relative grid min-h-[340px] grid-cols-1 items-center gap-8 py-8 md:grid-cols-12 md:gap-8">
            {/* HERO LEFT */}
            <div className="md:col-span-4">
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
                Extra de Colombia
              </div>

              <h1 className="text-[3rem] font-extrabold leading-[0.96] tracking-tight md:text-[3.5rem]">
                La suerte de los colombianos
                <span className="block font-serif italic text-yellow-300">
                  ¡eres tú!
                </span>
              </h1>

              <p className="mt-5 max-w-md text-base leading-7 text-white/80 md:text-[17px]">
                Más de 60 años haciendo historia, tradición y millones de
                sueños cumplidos.
              </p>
            </div>

            {/* NEXT DRAW */}
            <div className="md:col-span-4">
              <div className="mx-auto max-w-[390px] rounded-2xl border border-white/30 bg-black/10 p-5 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                    Próximo sorteo
                  </div>

                  <div className="mt-2 inline-flex rounded-full bg-yellow-300 px-5 py-1.5 text-sm font-extrabold text-[#29156f]">
                    SORTEO 2254
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold">
                  <CalendarDays className="size-5 text-yellow-300" />
                  15 DE AGOSTO DE 2026
                </div>

                <div className="mt-4 grid grid-cols-4 gap-2">
                  {[
                    ["02", "DÍAS"],
                    ["10", "HORAS"],
                    ["45", "MIN"],
                    ["33", "SEG"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/15 bg-white/10 px-2 py-3 text-center"
                    >
                      <div className="text-2xl font-extrabold leading-none">
                        {value}
                      </div>

                      <div className="mt-1.5 text-[10px] font-semibold uppercase text-white/60">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/juega/calendario"
                  className="mt-4 flex h-11 items-center justify-center gap-2 rounded-lg bg-yellow-300 px-4 text-xs font-extrabold uppercase text-[#29156f] transition-transform hover:scale-[1.02]"
                >
                  Ver calendario completo
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* HERO RIGHT - IMAGE PLACEHOLDER */}
            <div className="md:col-span-4">
              <div className="relative flex h-[250px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#402096] to-[#6b155e]">
                <div className="absolute right-[-25px] top-[-25px] size-40 rounded-full bg-yellow-300/20 blur-2xl" />

                <div className="relative text-center">
                  <div className="mb-3 text-base font-bold uppercase tracking-widest text-yellow-300">
                    Promoción destacada
                  </div>

                  <div className="text-5xl font-black italic tracking-tight">
                    RASPA
                    <span className="text-yellow-300"> & </span>
                    GANA
                  </div>

                  <div className="mt-3 text-sm font-semibold text-white/80">
                    Doble emoción
                  </div>

                  <div className="mx-auto mt-5 flex h-11 w-36 items-center justify-center rounded-lg bg-[#e52d36] text-xs font-bold uppercase">
                    Conoce más
                    <ArrowRight className="ml-1.5 size-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          QUICK INFORMATION
      ========================================================= */}
      <section className="relative z-10 -mt-1">
        <Container>
          <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,35,80,0.10)] md:grid-cols-4">

            {/* =====================================================
                LAST RESULT
            ===================================================== */}
            <div className="min-h-[170px] border-b border-slate-200 p-6 md:border-b-0 md:border-r">
              {/* HEADER */}
              <div className="flex h-6 items-start justify-between gap-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#29156f]">
                  Último sorteo
                </span>

                <span className="rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-bold leading-none text-green-700">
                  SORTEO 2253
                </span>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-3 text-xs leading-5 text-slate-500">
                9 de agosto de 2026 · 11:00 p. m.
              </div>

              {/* RESULT */}
              <div className="mt-4">
                <div className="text-[10px] font-semibold uppercase text-slate-400">
                  Premio mayor
                </div>

                <div className="mt-1 text-2xl font-black leading-none text-[#29156f]">
                  $15.000
                  <span className="ml-1 text-xs">MILLONES</span>
                </div>
              </div>

              {/* WINNING NUMBER */}
              <div className="mt-4 flex items-end justify-between border-t border-slate-100 pt-3">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    Número ganador
                  </div>

                  <div className="mt-1 text-2xl font-black leading-none tracking-[0.12em] text-red-500">
                    9484
                  </div>
                </div>

                <div className="rounded-xl bg-[#f3efff] px-3 py-2 text-center">
                  <div className="text-[9px] font-bold uppercase tracking-wide text-slate-400">
                    Serie
                  </div>

                  <div className="mt-1 text-base font-extrabold leading-none tracking-[0.08em] text-[#29156f]">
                    274
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                NUMBER CHECKER
            ===================================================== */}
            <div className="min-h-[170px] border-b border-slate-200 p-6 md:border-b-0 md:border-r">
              <div className="h-full">
                <NumberChecker />
              </div>
            </div>

            {/* =====================================================
                PRIZE PLAN
            ===================================================== */}
            <Link
              href="/juega/plan-de-premios"
              className="group min-h-[170px] border-b border-slate-200 p-6 transition-colors hover:bg-slate-50 md:border-b-0 md:border-r"
            >
              {/* HEADER */}
              <div className="flex h-6 items-start justify-between gap-3">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#29156f]">
                  Plan de premios 2026
                </div>

                <Trophy className="size-7 shrink-0 text-yellow-500" />
              </div>

              {/* DESCRIPTION */}
              <p className="mt-3 max-w-[235px] text-base leading-6 text-slate-500">
                Más de $36.700 millones en premios para ti.
              </p>

              {/* CTA */}
              <div className="mt-6 flex items-center text-sm font-bold text-[#29156f]">
                Ver plan de premios
                <ChevronRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* =====================================================
                CALENDAR
            ===================================================== */}
            <Link
              href="/juega/calendario"
              className="group min-h-[170px] p-6 transition-colors hover:bg-slate-50"
            >
              {/* HEADER */}
              <div className="flex h-6 items-start justify-between gap-3">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#29156f]">
                  Calendario de sorteos
                </div>

                <CalendarDays className="size-7 shrink-0 text-[#29156f]" />
              </div>

              {/* DESCRIPTION */}
              <p className="mt-3 max-w-[235px] text-base leading-6 text-slate-500">
                Conoce todas las fechas de nuestros sorteos.
              </p>

              {/* CTA */}
              <div className="mt-6 flex items-center text-sm font-bold text-[#29156f]">
                Ver calendario
                <ChevronRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* =========================================================
          PROMOTIONS + NEWS
      ========================================================= */}
      <section className="py-8 md:py-10">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* PROMOTIONS */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div className="text-xs font-extrabold uppercase tracking-wider text-red-500">
                  Promociones destacadas
                </div>

                <Link
                  href="/promociones"
                  className="flex items-center text-sm font-bold text-[#29156f]"
                >
                  Ver todas
                  <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
                {promotions.map((promotion) => (
                  <Link
                    key={promotion.title}
                    href="/promociones"
                    className="group relative flex h-[165px] flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-[#32157d] to-[#17468b] p-4 text-white"
                  >
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-yellow-300">
                      {promotion.label}
                    </div>

                    <div>
                      <div className="text-base font-black leading-5">
                        {promotion.title}
                      </div>

                      <div className="mt-2 text-xs leading-4 text-white/70">
                        {promotion.description}
                      </div>
                    </div>

                    <div className="flex items-center text-xs font-semibold text-white/80">
                      Conoce más
                      <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* NEWS */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div className="text-xs font-extrabold uppercase tracking-wider text-red-500">
                  Noticias recientes
                </div>

                <Link
                  href="/noticias"
                  className="flex items-center text-sm font-bold text-[#29156f]"
                >
                  Ver todas
                  <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {news.map((item) => (
                  <Link
                    key={item.title}
                    href="/noticias"
                    className="group overflow-hidden rounded-xl border border-slate-100 bg-slate-50"
                  >
                    <div className="flex h-[100px] items-center justify-center bg-gradient-to-br from-[#dce5f7] to-[#eef2fa]">
                      <Bell className="size-7 text-[#29156f]/50" />
                    </div>

                    <div className="p-3">
                      <div className="line-clamp-3 text-xs font-bold leading-4 text-[#142d58]">
                        {item.title}
                      </div>

                      <div className="mt-2 text-[10px] text-slate-400">
                        {item.date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          PURCHASE + MI EXTRA
      ========================================================= */}
      <section className="pb-8 md:pb-10">
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* PURCHASE */}
            <Link
              href="#"
              className="group flex h-[82px] items-center justify-between rounded-2xl bg-[#29156f] px-6 text-white shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-white/10">
                  <ShoppingCart className="size-6" />
                </div>

                <div>
                  <div className="text-base font-extrabold md:text-lg">
                    Compra tu billete en línea
                  </div>

                  <div className="mt-1 text-xs text-white/60">
                    Fácil, rápido y seguro desde donde estés.
                  </div>
                </div>
              </div>

              <div className="hidden h-10 items-center rounded-lg bg-yellow-300 px-5 text-sm font-extrabold text-[#29156f] sm:flex">
                Comprar ahora
                <ArrowRight className="ml-2 size-4" />
              </div>

              <ArrowRight className="size-5 text-yellow-300 sm:hidden" />
            </Link>

            {/* MI EXTRA */}
            <Link
              href="/mi-extra"
              className="group flex h-[82px] items-center justify-between rounded-2xl bg-[#e8f0ff] px-6 text-[#142d58] shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-white">
                  <UserRound className="size-6 text-[#1e559d]" />
                </div>

                <div>
                  <div className="text-base font-extrabold md:text-lg">
                    Regístrate en Mi Extra
                  </div>

                  <div className="mt-1 text-xs text-slate-500">
                    Guarda tus números y recibe notificaciones.
                  </div>
                </div>
              </div>

              <div className="hidden h-10 items-center rounded-lg bg-[#1e559d] px-5 text-sm font-extrabold text-white sm:flex">
                Crear cuenta
                <ArrowRight className="ml-2 size-4" />
              </div>

              <ArrowRight className="size-5 text-[#1e559d] sm:hidden" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}