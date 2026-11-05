"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Bell,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Download,
  Gift,
  Grid2X2,
  List,
  Trophy,
  Wallet,
} from "lucide-react";

type DrawType = "Propio" | "En convenio";

type Draw = {
  number: string;
  date: string;
  dateTime: string;
  day: string;
  type: DrawType;
  time: string;
  channel: string;
};

const draws: Draw[] = [
  {
    number: "2253",
    date: "30 de julio de 2026",
    dateTime: "2026-07-30T23:00:00-05:00",
    day: "Jueves",
    type: "Propio",
    time: "11:00 p. m.",
    channel: "Trece",
  },
  {
    number: "2254",
    date: "15 de agosto de 2026",
    dateTime: "2026-08-15T23:00:00-05:00",
    day: "Sábado",
    type: "En convenio",
    time: "11:00 p. m.",
    channel: "Trece",
  },
  {
    number: "2255",
    date: "29 de agosto de 2026",
    dateTime: "2026-08-29T23:00:00-05:00",
    day: "Domingo",
    type: "Propio",
    time: "11:00 p. m.",
    channel: "Trece",
  },
  {
    number: "2256",
    date: "13 de septiembre de 2026",
    dateTime: "2026-09-13T23:00:00-05:00",
    day: "Domingo",
    type: "En convenio",
    time: "11:00 p. m.",
    channel: "Trece",
  },
  {
    number: "2257",
    date: "27 de septiembre de 2026",
    dateTime: "2026-09-27T23:00:00-05:00",
    day: "Domingo",
    type: "Propio",
    time: "11:00 p. m.",
    channel: "Trece",
  },
  {
    number: "2258",
    date: "11 de octubre de 2026",
    dateTime: "2026-10-11T23:00:00-05:00",
    day: "Domingo",
    type: "En convenio",
    time: "11:00 p. m.",
    channel: "Trece",
  },
  {
    number: "2259",
    date: "25 de octubre de 2026",
    dateTime: "2026-10-25T23:00:00-05:00",
    day: "Domingo",
    type: "Propio",
    time: "11:00 p. m.",
    channel: "Trece",
  },
  {
    number: "2260",
    date: "8 de noviembre de 2026",
    dateTime: "2026-11-08T23:00:00-05:00",
    day: "Domingo",
    type: "En convenio",
    time: "11:00 p. m.",
    channel: "Trece",
  },
];

const summaryCards = [
  {
    title: "Premio mayor",
    value: "$15.000",
    suffix: "MILLONES",
    description: "1 GANADOR",
    icon: Trophy,
    color: "bg-[#29156f]",
  },
  {
    title: "Premios secos",
    value: "$1.000",
    suffix: "MILLONES",
    description: "7 PREMIOS SECOS",
    icon: Wallet,
    color: "bg-[#e52d36]",
  },
  {
    title: "Aproximaciones",
    value: "Múltiples",
    suffix: "",
    description: "CON Y SIN SERIE",
    icon: Trophy,
    color: "bg-yellow-400",
  },
  {
    title: "Incentivos especiales",
    value: "$300",
    suffix: "MILLONES",
    description: "EN BONOS Y SORTEOS",
    icon: Gift,
    color: "bg-[#2563a8]",
  },
  {
    title: "Total en premios",
    value: "$36.700",
    suffix: "MILLONES",
    description: "EN PREMIOS",
    icon: Wallet,
    color: "bg-[#299447]",
  },
];

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const WEEK_DAYS = [
  "LUN",
  "MAR",
  "MIÉ",
  "JUE",
  "VIE",
  "SÁB",
  "DOM",
];

const ITEMS_PER_PAGE = 6;

function getCountdown(targetDate: string) {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const totalSeconds = Math.floor(difference / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(
    new Date(2026, 7, 1)
  );

  const [filter, setFilter] = useState("Todos");

  const [viewMode, setViewMode] = useState<"list" | "grid">(
    "list"
  );

  const [currentPage, setCurrentPage] = useState(1);

  const [now, setNow] = useState(new Date());

  /* =====================================================
      ACTUALIZAR CONTADOR
  ===================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /* =====================================================
      PROXIMO SORTEO
  ===================================================== */

  const nextDraw = useMemo(() => {
    const currentTime = now.getTime();

    return (
      draws.find(
        (draw) =>
          new Date(draw.dateTime).getTime() > currentTime
      ) ?? draws[draws.length - 1]
    );
  }, [now]);

  const countdown = useMemo(() => {
    return getCountdown(nextDraw.dateTime);
  }, [nextDraw, now]);

  /* =====================================================
      FILTRO
  ===================================================== */

  const filteredDraws = useMemo(() => {
    if (filter === "Propios") {
      return draws.filter(
        (draw) => draw.type === "Propio"
      );
    }

    if (filter === "Convenio") {
      return draws.filter(
        (draw) => draw.type === "En convenio"
      );
    }

    return draws;
  }, [filter]);

  /* =====================================================
      PAGINACION
  ===================================================== */

  const totalPages = Math.ceil(
    filteredDraws.length / ITEMS_PER_PAGE
  );

  const paginatedDraws = useMemo(() => {
    const start =
      (currentPage - 1) * ITEMS_PER_PAGE;

    return filteredDraws.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [filteredDraws, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  /* =====================================================
      DATOS DEL CALENDARIO
  ===================================================== */

  const calendarData = useMemo(() => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    const firstDay = new Date(year, month, 1);

    /*
      JavaScript:
      Domingo = 0

      Nuestro calendario:
      Lunes = 0
    */

    const firstDayOfWeek =
      (firstDay.getDay() + 6) % 7;

    const daysInMonth = new Date(
      year,
      month + 1,
      0
    ).getDate();

    const previousMonthDays = new Date(
      year,
      month,
      0
    ).getDate();

    const days = [];

    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: previousMonthDays - i,
        monthOffset: -1,
      });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        monthOffset: 0,
      });
    }

    const totalCells =
      Math.ceil(days.length / 7) * 7;

    let nextDay = 1;

    while (days.length < totalCells) {
      days.push({
        day: nextDay,
        monthOffset: 1,
      });

      nextDay++;
    }

    return days;
  }, [selectedDate]);

  /* =====================================================
      CAMBIAR MES
  ===================================================== */

  function handlePreviousMonth() {
    setSelectedDate(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() - 1,
        1
      )
    );
  }

  function handleNextMonth() {
    setSelectedDate(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        1
      )
    );
  }

  /* =====================================================
      IDENTIFICAR SORTEOS EN CALENDARIO
  ===================================================== */

  function getDrawForCalendarDay(
    day: number,
    monthOffset: number
  ) {
    const targetDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + monthOffset,
      day
    );

    return draws.find((draw) => {
      const drawDate = new Date(draw.dateTime);

      return (
        drawDate.getFullYear() ===
          targetDate.getFullYear() &&
        drawDate.getMonth() ===
          targetDate.getMonth() &&
        drawDate.getDate() ===
          targetDate.getDate()
      );
    });
  }

  /* =====================================================
      DESCARGAR CALENDARIO
  ===================================================== */

  function handleDownloadCalendar() {
    const headers = [
      "Número",
      "Fecha",
      "Día",
      "Tipo de sorteo",
      "Hora",
      "Canal",
    ];

    const rows = draws.map((draw) => [
      draw.number,
      draw.date,
      draw.day,
      draw.type,
      draw.time,
      draw.channel,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row
          .map((item) => `"${item}"`)
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      "calendario-sorteos-extra-2026.csv";

    link.click();

    URL.revokeObjectURL(url);
  }

  /* =====================================================
      RANGO DE PAGINAS
  ===================================================== */

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <main className="bg-slate-50">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#21104f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(93,51,180,0.35),transparent_28%),radial-gradient(circle_at_15%_30%,rgba(67,36,143,0.4),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1fr_1.35fr] lg:items-center">
          {/* HERO TEXT */}

          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">
              <Calendar className="size-4" />
              Calendario
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white lg:text-5xl">
              Calendario de{" "}
              <span className="text-yellow-300">
                sorteos 2026
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
              Consulta todas las fechas de nuestros próximos
              sorteos y mantente informado para no perder
              ninguna oportunidad.
            </p>
          </div>

          {/* PROXIMO SORTEO */}

          <div className="rounded-2xl border border-white/15 bg-[#160b3e]/70 p-5 shadow-2xl backdrop-blur-sm">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-300">
                  <Calendar className="size-6" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                    Próximo sorteo
                  </p>

                  <h2 className="mt-1 text-2xl font-extrabold text-yellow-300">
                    Sorteo {nextDraw.number}
                  </h2>

                  <p className="mt-1 text-xs text-white/70">
                    {nextDraw.date} · {nextDraw.time}
                  </p>

                  <p className="mt-2 text-[10px] font-medium text-white/50">
                    Canal {nextDraw.channel}
                  </p>
                </div>
              </div>

              {/* CONTADOR */}

              <div className="grid grid-cols-4 gap-2">
                {[
                  [
                    countdown.days,
                    "DÍAS",
                  ],
                  [
                    countdown.hours,
                    "HORAS",
                  ],
                  [
                    countdown.minutes,
                    "MIN",
                  ],
                  [
                    countdown.seconds,
                    "SEG",
                  ],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="flex min-w-[52px] flex-col items-center rounded-lg border border-white/10 bg-white/5 px-2 py-3"
                  >
                    <span className="text-xl font-extrabold text-white">
                      {value}
                    </span>

                    <span className="mt-1 text-[8px] font-bold uppercase tracking-wide text-white/50">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESUMEN
      ===================================================== */}

      <section className="relative z-10 border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-6 py-4 sm:grid-cols-2 lg:grid-cols-5">
          {summaryCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex min-h-[110px] items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div
                  className={`flex size-11 shrink-0 items-center justify-center rounded-full text-white ${item.color}`}
                >
                  <Icon className="size-5" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wide text-slate-500">
                    {item.title}
                  </p>

                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-lg font-extrabold leading-none text-[#29156f]">
                      {item.value}
                    </span>

                    {item.suffix && (
                      <span className="text-[9px] font-bold text-[#29156f]">
                        {item.suffix}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-[8px] font-bold uppercase tracking-wide text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          CONTENIDO
      ===================================================== */}

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[240px_minmax(0,1fr)_280px]">
        {/* =====================================================
            CALENDARIO LATERAL
        ===================================================== */}

        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-extrabold text-[#29156f]">
            Calendario{" "}
            {selectedDate.getFullYear()}
          </h2>

          {/* MES */}

          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePreviousMonth}
              className="rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-[#29156f]"
              aria-label="Mes anterior"
            >
              <ChevronLeft className="size-4" />
            </button>

            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-[#29156f]" />

              <span className="text-sm font-bold text-[#29156f]">
                {
                  MONTHS[
                    selectedDate.getMonth()
                  ]
                }{" "}
                {selectedDate.getFullYear()}
              </span>
            </div>

            <button
              type="button"
              onClick={handleNextMonth}
              className="rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-[#29156f]"
              aria-label="Mes siguiente"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>

          {/* DIAS */}

          <div className="mt-5 grid grid-cols-7 gap-y-3 text-center">
            {WEEK_DAYS.map((day) => (
              <span
                key={day}
                className="text-[8px] font-bold text-slate-400"
              >
                {day}
              </span>
            ))}

            {calendarData.map(
              (
                calendarDay,
                index
              ) => {
                const draw =
                  getDrawForCalendarDay(
                    calendarDay.day,
                    calendarDay.monthOffset
                  );

                const isOutsideMonth =
                  calendarDay.monthOffset !== 0;

                return (
                  <div
                    key={`${calendarDay.day}-${calendarDay.monthOffset}-${index}`}
                    className={`mx-auto flex size-7 items-center justify-center rounded-full text-[10px] font-medium transition-transform ${
                      draw
                        ? draw.type ===
                          "Propio"
                          ? "bg-[#29156f] font-bold text-white shadow-md"
                          : "bg-yellow-400 font-bold text-[#29156f] shadow-md"
                        : isOutsideMonth
                          ? "text-slate-300"
                          : "text-slate-600"
                    }`}
                    title={
                      draw
                        ? `Sorteo ${draw.number} - ${draw.type}`
                        : undefined
                    }
                  >
                    {calendarDay.day}
                  </div>
                );
              }
            )}
          </div>

          {/* LEYENDA */}

          <div className="mt-7 space-y-4 border-t border-slate-100 pt-5">
            <div className="flex items-start gap-3">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[#29156f]" />

              <div>
                <p className="text-[10px] font-bold text-[#29156f]">
                  Sorteos propios
                </p>

                <p className="mt-1 text-[9px] leading-4 text-slate-500">
                  Realizados únicamente por el Sorteo
                  Extraordinario de Colombia.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-yellow-400" />

              <div>
                <p className="text-[10px] font-bold text-[#29156f]">
                  Sorteos en convenio
                </p>

                <p className="mt-1 text-[9px] leading-4 text-slate-500">
                  Realizados en convenio con loterías
                  aliadas.
                </p>
              </div>
            </div>
          </div>

          {/* DESCARGAR */}

          <button
            type="button"
            onClick={handleDownloadCalendar}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-[10px] font-bold text-[#29156f] transition-colors hover:bg-slate-100"
          >
            <Download className="size-4" />
            Descargar calendario completo 2026
          </button>
        </aside>

        {/* =====================================================
            TABLA DE SORTEOS
        ===================================================== */}

        <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-extrabold text-[#29156f]">
                Todos los sorteos programados
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Consulta las fechas, horarios y
                características de cada sorteo.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={filter}
                onChange={(event) =>
                  setFilter(event.target.value)
                }
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 outline-none focus:border-[#29156f]"
              >
                <option value="Todos">
                  Todos los sorteos
                </option>

                <option value="Propios">
                  Sorteos propios
                </option>

                <option value="Convenio">
                  Sorteos en convenio
                </option>
              </select>

              <button
                type="button"
                onClick={() =>
                  setViewMode("list")
                }
                className={`flex size-9 items-center justify-center rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-[#29156f] text-white"
                    : "border border-slate-200 text-slate-400 hover:bg-slate-50"
                }`}
                aria-label="Vista de lista"
              >
                <List className="size-4" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setViewMode("grid")
                }
                className={`flex size-9 items-center justify-center rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#29156f] text-white"
                    : "border border-slate-200 text-slate-400 hover:bg-slate-50"
                }`}
                aria-label="Vista de cuadrícula"
              >
                <Grid2X2 className="size-4" />
              </button>
            </div>
          </div>

          {/* =====================================================
              VISTA LISTA
          ===================================================== */}

          {viewMode === "list" && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse">
                <thead>
                  <tr className="bg-[#29156f] text-left">
                    <th className="rounded-l-lg px-4 py-3 text-[9px] font-bold uppercase tracking-wide text-white">
                      Número
                    </th>

                    <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-wide text-white">
                      Fecha
                    </th>

                    <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-wide text-white">
                      Día
                    </th>

                    <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-wide text-white">
                      Tipo de sorteo
                    </th>

                    <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-wide text-white">
                      Hora
                    </th>

                    <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-wide text-white">
                      Canal
                    </th>

                    <th className="rounded-r-lg px-4 py-3" />
                  </tr>
                </thead>

                <tbody>
                  {paginatedDraws.map(
                    (draw) => {
                      const isNextDraw =
                        draw.number ===
                        nextDraw.number;

                      return (
                        <tr
                          key={draw.number}
                          className={`border-b border-slate-100 transition-colors hover:bg-slate-50 ${
                            isNextDraw
                              ? "bg-yellow-50/70"
                              : ""
                          }`}
                        >
                          <td className="px-4 py-3">
                            <span
                              className={`rounded-md px-2 py-1 text-[10px] font-extrabold ${
                                isNextDraw
                                  ? "bg-yellow-300 text-[#29156f]"
                                  : "bg-[#29156f]/10 text-[#29156f]"
                              }`}
                            >
                              {draw.number}
                            </span>
                          </td>

                          <td className="px-4 py-3 text-[10px] text-slate-600">
                            {draw.date}
                          </td>

                          <td className="px-4 py-3 text-[10px] text-slate-600">
                            {draw.day}
                          </td>

                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <span
                                className={`size-1.5 rounded-full ${
                                  draw.type ===
                                  "Propio"
                                    ? "bg-[#29156f]"
                                    : "bg-yellow-400"
                                }`}
                              />

                              <span className="text-[10px] text-slate-600">
                                {draw.type}
                              </span>
                            </div>
                          </td>

                          <td className="px-4 py-3 text-[10px] text-slate-600">
                            {draw.time}
                          </td>

                          <td className="px-4 py-3 text-[10px] text-slate-600">
                            {draw.channel}
                          </td>

                          <td className="px-4 py-3 text-right">
                            <button
                              type="button"
                              className="text-slate-400 transition-colors hover:text-[#29156f]"
                              aria-label={`Ver sorteo ${draw.number}`}
                            >
                              <ChevronRight className="size-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* =====================================================
              VISTA CUADRICULA
          ===================================================== */}

          {viewMode === "grid" && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {paginatedDraws.map(
                (draw) => {
                  const isNextDraw =
                    draw.number ===
                    nextDraw.number;

                  return (
                    <div
                      key={draw.number}
                      className={`rounded-xl border p-4 transition-shadow hover:shadow-md ${
                        isNextDraw
                          ? "border-yellow-300 bg-yellow-50"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span
                          className={`rounded-md px-2 py-1 text-xs font-extrabold ${
                            draw.type ===
                            "Propio"
                              ? "bg-[#29156f] text-white"
                              : "bg-yellow-400 text-[#29156f]"
                          }`}
                        >
                          Sorteo {draw.number}
                        </span>

                        <span className="text-[9px] font-bold uppercase text-slate-400">
                          {draw.type}
                        </span>
                      </div>

                      <h3 className="mt-4 text-sm font-extrabold text-[#29156f]">
                        {draw.date}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {draw.day}
                      </p>

                      <div className="mt-4 border-t border-slate-100 pt-3">
                        <p className="text-[10px] text-slate-500">
                          {draw.time} · Canal{" "}
                          {draw.channel}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          )}

          {/* =====================================================
              PAGINACION
          ===================================================== */}

          {totalPages > 1 && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setCurrentPage(
                    Math.max(
                      1,
                      currentPage - 1
                    )
                  )
                }
                disabled={currentPage === 1}
                className="flex size-8 items-center justify-center rounded-md border border-slate-200 text-slate-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="size-4" />
              </button>

              {pages.map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() =>
                    setCurrentPage(page)
                  }
                  className={`flex size-8 items-center justify-center rounded-md text-xs font-bold transition-colors ${
                    page === currentPage
                      ? "bg-[#29156f] text-white"
                      : "border border-slate-200 text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() =>
                  setCurrentPage(
                    Math.min(
                      totalPages,
                      currentPage + 1
                    )
                  )
                }
                disabled={
                  currentPage ===
                  totalPages
                }
                className="flex size-8 items-center justify-center rounded-md border border-slate-200 text-slate-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          )}

          {/* NOTA */}

          <div className="mt-5 flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3">
            <Calendar className="size-4 shrink-0 text-[#29156f]" />

            <p className="text-[10px] text-slate-500">
              Los sorteos en convenio pueden estar sujetos
              a cambios de acuerdo con las condiciones de
              las loterías aliadas.
            </p>
          </div>
        </section>

        {/* =====================================================
            SIDEBAR DERECHO
        ===================================================== */}

        <aside className="space-y-5">
          {/* TIPOS */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-extrabold text-[#29156f]">
              ¿Qué tipos de sorteos realizamos?
            </h2>

            <div className="mt-5 space-y-4">
              <div className="flex gap-3 border-b border-slate-100 pb-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#29156f]/10">
                  <Trophy className="size-5 text-[#29156f]" />
                </div>

                <div>
                  <h3 className="text-xs font-bold text-[#29156f]">
                    Sorteos propios
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-slate-500">
                    Son realizados exclusivamente por
                    el Sorteo Extraordinario de Colombia.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-yellow-400/20">
                  <Calendar className="size-5 text-yellow-600" />
                </div>

                <div>
                  <h3 className="text-xs font-bold text-[#29156f]">
                    Sorteos en convenio
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-slate-500">
                    Son realizados en convenio con
                    nuestras loterías aliadas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PROXIMO SORTEO */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Próximo sorteo
            </p>

            <div className="mt-3 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-extrabold text-[#29156f]">
                  Sorteo {nextDraw.number}
                </h2>

                <p className="mt-1 text-xs font-medium text-[#e52d36]">
                  {nextDraw.type}
                </p>

                <p className="mt-2 text-[10px] leading-4 text-slate-500">
                  {nextDraw.date}
                  <br />
                  {nextDraw.time} · Canal{" "}
                  {nextDraw.channel}
                </p>

                <p className="mt-2 text-[10px] text-slate-500">
                  Extraordinario de Colombia
                </p>
              </div>

              <div className="grid grid-cols-2 gap-1 rounded-lg border border-slate-200 bg-slate-50 p-2">
                {[
                  [
                    countdown.days,
                    "DÍAS",
                  ],
                  [
                    countdown.hours,
                    "HORAS",
                  ],
                  [
                    countdown.minutes,
                    "MIN",
                  ],
                  [
                    countdown.seconds,
                    "SEG",
                  ],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="text-center"
                  >
                    <span className="block text-sm font-extrabold text-[#29156f]">
                      {value}
                    </span>

                    <span className="text-[7px] font-bold text-slate-400">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/juega/el-extra"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-3 text-[10px] font-bold text-[#29156f] transition-colors hover:bg-slate-50"
            >
              Ver detalle del sorteo
              <ChevronRight className="size-4" />
            </Link>
          </div>

          {/* RECORDATORIOS */}

          <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-5">
            <div className="flex gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-yellow-400/30 text-yellow-700">
                <Bell className="size-5" />
              </div>

              <div>
                <h2 className="text-sm font-extrabold text-[#29156f]">
                  ¿Quieres recibir recordatorios?
                </h2>

                <p className="mt-2 text-[10px] leading-4 text-slate-600">
                  Activa tus notificaciones y recibe
                  recordatorios antes de cada sorteo.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-3 py-3 text-[10px] font-bold text-[#29156f] shadow-sm transition-colors hover:bg-slate-50"
            >
              Activar recordatorios
              <ChevronRight className="size-4" />
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}