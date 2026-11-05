import Link from "next/link";
import {
  Award,
  Car,
  ChevronRight,
  CircleDollarSign,
  Download,
  FileText,
  Gift,
  Home,
  Info,
  MapPin,
  Medal,
  Plane,
  RefreshCw,
  Sparkles,
  Ticket,
  Trophy,
} from "lucide-react";

const prizeSummary = [
  {
    title: "Premio mayor",
    value: "$15.000",
    suffix: "MILLONES",
    description: "1 ganador",
    icon: Trophy,
    iconClass: "bg-[#2b176f] text-white",
  },
  {
    title: "Premios secos",
    value: "25",
    suffix: "PREMIOS",
    description: "Desde $10 hasta $1.000 millones",
    icon: CircleDollarSign,
    iconClass: "bg-[#e52d36] text-white",
  },
  {
    title: "Aproximaciones",
    value: "Múltiples",
    suffix: "FORMAS DE GANAR",
    description: "Con serie y sin serie",
    icon: Sparkles,
    iconClass: "bg-[#f5c400] text-[#2b176f]",
  },
  {
    title: "Incentivos especiales",
    value: "4",
    suffix: "GRANDES INCENTIVOS",
    description: "Casa, carro, moto y viaje",
    icon: Gift,
    iconClass: "bg-[#2559a7] text-white",
  },
  {
    title: "Total en premios",
    value: "Más de $36.700",
    suffix: "MILLONES",
    description: "En premios",
    icon: Award,
    iconClass: "bg-[#2f8a4a] text-white",
  },
];

const mainPrizes = [
  {
    name: "Premio Mayor",
    prize: "$15.000 millones",
    winners: "1 ganador",
    featured: true,
  },
  {
    name: "Premio Seco",
    prize: "$1.000 millones",
    winners: "1 ganador",
  },
  {
    name: "Premio Seco",
    prize: "$500 millones",
    winners: "1 ganador",
  },
  {
    name: "Premio Seco",
    prize: "$300 millones",
    winners: "1 ganador",
  },
  {
    name: "Premio Seco",
    prize: "$200 millones",
    winners: "1 ganador",
  },
  {
    name: "Premio Seco",
    prize: "$100 millones",
    winners: "1 ganador",
  },
  {
    name: "Premios Secos",
    prize: "$20 millones",
    winners: "10 ganadores",
  },
  {
    name: "Premios Secos",
    prize: "$10 millones",
    winners: "10 ganadores",
  },
];

const approximationsLeft = [
  {
    name: "Mayor invertido",
    withSeries: "$78.000.000",
    withoutSeries: "$80.000",
  },
  {
    name: "Tres primeras cifras",
    withSeries: "$10.000.000",
    withoutSeries: "$34.000",
  },
  {
    name: "Tres últimas cifras",
    withSeries: "$10.000.000",
    withoutSeries: "$34.000",
  },
  {
    name: "Dos primeras y última cifra",
    withSeries: "$7.000.000",
    withoutSeries: "$30.000",
  },
  {
    name: "Primera y dos últimas cifras",
    withSeries: "$7.000.000",
    withoutSeries: "$30.000",
  },
  {
    name: "Combinado",
    withSeries: "$2.400.000",
    withoutSeries: "$20.000",
  },
];

const approximationsRight = [
  {
    name: "Dos últimas cifras",
    withSeries: "$2.000.000",
    withoutSeries: "$24.000",
  },
  {
    name: "Dos primeras cifras",
    withSeries: "$2.000.000",
    withoutSeries: "$24.000",
  },
  {
    name: "Dos cifras del centro",
    withSeries: "$2.000.000",
    withoutSeries: "$20.000",
  },
  {
    name: "Última cifra",
    withSeries: "$110.000",
    withoutSeries: "$20.000",
  },
];

const specialSeriesPrizes = [
  {
    name: "Serie del Mayor",
    prize: "$20.000",
  },
  {
    name: "Mayor en otras series",
    prize: "$2.000.000",
  },
  {
    name: "Secos en otras series",
    prize: "$20.000",
  },
];

const incentives = [
  {
    title: "Bono Casa",
    value: "$160.000.000",
    description: "Valor neto · 1 ganador",
    icon: Home,
  },
  {
    title: "Bono Carro",
    value: "$70.000.000",
    description: "Valor neto · 1 ganador",
    icon: Car,
  },
  {
    title: "Bono Moto",
    value: "$30.000.000",
    description: "Valor neto · 1 ganador",
    icon: Medal,
  },
  {
    title: "Bono Viaje de tus Sueños",
    value: "$40.000.000",
    description: "Valor neto · 1 ganador",
    icon: Plane,
  },
];

export default function PlanDePremiosPage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#21104f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(103,60,200,0.4),transparent_30%),radial-gradient(circle_at_10%_100%,rgba(64,29,145,0.5),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1fr_1.2fr] md:items-center md:py-14">
          {/* TEXTO */}
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f5cf3c]">
              <Trophy className="size-4" />
              <span>Plan de premios</span>
            </div>

            <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Plan de premios{" "}
              <span className="text-[#f5cf3c]">2026</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
              Más de $36.700 millones en premios para hacer tus sueños
              realidad.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {/* Preparado para el PDF oficial */}
              <button
                type="button"
                disabled
                title="El documento oficial estará disponible próximamente."
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-[#f5cf3c] px-5 py-3 text-sm font-extrabold text-[#21104f] opacity-80"
              >
                <Download className="size-4" />
                Plan completo en PDF
              </button>

              <a
                href="#premios"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Ver premios
                <ChevronRight className="size-4" />
              </a>
            </div>
          </div>

          {/* PLACEHOLDER MARKETING */}
          <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:min-h-[300px]">
            <div className="absolute size-52 rounded-full border-2 border-[#f5cf3c]/60 md:size-64" />

            <div className="absolute size-72 rounded-full border border-[#f5cf3c]/15 md:size-80" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="flex size-28 items-center justify-center rounded-full bg-[#f5cf3c]/10 backdrop-blur-sm">
                <Trophy className="size-14 text-[#f5cf3c]" />
              </div>

              <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-[#f5cf3c]">
                Imagen de marketing
              </p>

              <p className="mt-2 text-center text-xs text-white/45">
                Trofeo, balota y elementos promocionales
              </p>
            </div>

            <div className="absolute bottom-8 h-5 w-2/3 rounded-full bg-gradient-to-r from-transparent via-[#f5cf3c]/80 to-[#e52d36]/70 blur-md" />
          </div>
        </div>
      </section>

      {/* =========================================================
          BREADCRUMBS
      ========================================================= */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-4 text-xs text-slate-500">
          <Link href="/" className="transition-colors hover:text-[#29156f]">
            Inicio
          </Link>

          <ChevronRight className="size-3" />

          <Link
            href="/juega"
            className="transition-colors hover:text-[#29156f]"
          >
            Juega
          </Link>

          <ChevronRight className="size-3" />

          <span className="font-semibold text-[#29156f]">
            Plan de premios
          </span>
        </div>
      </div>

      {/* =========================================================
          RESUMEN
      ========================================================= */}
      <section id="premios" className="bg-[#f6f7fb] py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {prizeSummary.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex gap-4">
                    <div
                      className={`flex size-11 shrink-0 items-center justify-center rounded-full ${item.iconClass}`}
                    >
                      <Icon className="size-5" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xl font-extrabold text-[#29156f]">
                        {item.value}
                      </p>

                      <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                        {item.suffix}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PREMIOS PRINCIPALES
      ========================================================= */}
      <section className="bg-[#f6f7fb] pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#e52d36]">
                    Sorteo Extraordinario de Colombia
                  </p>

                  <h2 className="mt-1 text-2xl font-extrabold text-[#29156f]">
                    Premios principales y secos
                  </h2>
                </div>

                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f5cf3c]/15 px-4 py-2 text-xs font-bold text-[#7a6200]">
                  <Ticket className="size-4" />
                  Número de 4 cifras + serie de 3 cifras
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left">
                <thead className="bg-[#29156f] text-xs uppercase tracking-wide text-white">
                  <tr>
                    <th className="px-6 py-4 font-bold">Concepto</th>
                    <th className="px-6 py-4 text-center font-bold">
                      Premio
                    </th>
                    <th className="px-6 py-4 text-center font-bold">
                      Ganadores
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {mainPrizes.map((item, index) => (
                    <tr
                      key={`${item.name}-${item.prize}`}
                      className={`border-b border-slate-100 ${
                        index % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <span
                          className={`font-bold ${
                            item.featured
                              ? "text-[#29156f]"
                              : "text-slate-700"
                          }`}
                        >
                          {item.name}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-center font-extrabold text-[#29156f]">
                        {item.prize}
                      </td>

                      <td className="px-6 py-4 text-center text-sm font-medium text-slate-600">
                        {item.winners}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-slate-200 bg-[#fafafc] px-6 py-5">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 size-5 shrink-0 text-[#d29f00]" />

                <p className="text-sm leading-6 text-slate-600">
                  Cada premio seco corresponde a una combinación ganadora de{" "}
                  <strong className="text-[#29156f]">
                    número y serie
                  </strong>
                  . En los premios de múltiples ganadores, las combinaciones
                  premiadas son independientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APROXIMACIONES
      ========================================================= */}
      <section className="bg-[#f6f7fb] pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e52d36]">
              Más oportunidades para ganar
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-[#29156f]">
              Aproximaciones al Premio Mayor
            </h2>

            <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-[#f5cf3c]" />

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500">
              Existen diferentes formas de ganar según las cifras que
              coincidan con el número ganador y las condiciones relacionadas
              con la serie.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {/* TABLA IZQUIERDA */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-[#29156f] text-xs font-bold uppercase text-white">
                <div className="px-4 py-4">Aproximación</div>
                <div className="px-3 py-4 text-center">Con serie</div>
                <div className="px-3 py-4 text-center">Sin serie</div>
              </div>

              {approximationsLeft.map((item, index) => (
                <div
                  key={item.name}
                  className={`grid grid-cols-[1.5fr_1fr_1fr] items-center border-t border-slate-100 text-sm ${
                    index % 2 === 0 ? "bg-white" : "bg-slate-50"
                  }`}
                >
                  <div className="px-4 py-4 font-semibold text-slate-700">
                    {item.name}
                  </div>

                  <div className="px-3 py-4 text-center font-bold text-[#29156f]">
                    {item.withSeries}
                  </div>

                  <div className="px-3 py-4 text-center font-semibold text-slate-600">
                    {item.withoutSeries}
                  </div>
                </div>
              ))}
            </div>

            {/* TABLA DERECHA */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-[#29156f] text-xs font-bold uppercase text-white">
                <div className="px-4 py-4">Aproximación</div>
                <div className="px-3 py-4 text-center">Con serie</div>
                <div className="px-3 py-4 text-center">Sin serie</div>
              </div>

              {approximationsRight.map((item, index) => (
                <div
                  key={item.name}
                  className={`grid grid-cols-[1.5fr_1fr_1fr] items-center border-t border-slate-100 text-sm ${
                    index % 2 === 0 ? "bg-white" : "bg-slate-50"
                  }`}
                >
                  <div className="px-4 py-4 font-semibold text-slate-700">
                    {item.name}
                  </div>

                  <div className="px-3 py-4 text-center font-bold text-[#29156f]">
                    {item.withSeries}
                  </div>

                  <div className="px-3 py-4 text-center font-semibold text-slate-600">
                    {item.withoutSeries}
                  </div>
                </div>
              ))}

              <div className="border-t border-slate-200 bg-[#fffdf5]">
                {specialSeriesPrizes.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between border-b border-[#f5cf3c]/20 px-4 py-3 last:border-b-0"
                  >
                    <span className="text-sm font-bold uppercase text-[#29156f]">
                      {item.name}
                    </span>

                    <span className="font-extrabold text-[#29156f]">
                      {item.prize}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INCENTIVOS ESPECIALES
      ========================================================= */}
      <section className="bg-[#f6f7fb] pb-8">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* INCENTIVOS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e52d36]">
                Incentivos especiales 2026
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-[#29156f]">
                Más formas de cumplir tus sueños
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {incentives.map((item) => {
                const Icon = item.icon;

                return (

                <div

                    key={item.title}

                    className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-shadow hover:shadow-md"

                >

                    {/* ICONO */}

                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#29156f]/10 text-[#29156f]">

                    <Icon className="size-5" />

                    </div>

                    {/* INFORMACIÓN */}

                    <div className="min-w-0">

                    <h3 className="font-bold text-[#29156f]">

                        {item.title}

                    </h3>

                    {/* VALOR DEL BONO */}

                    <div className="mt-1 text-lg font-black leading-none text-[#e52d36]">

                        {item.value}

                    </div>

                    {/* DETALLES */}

                    <p className="mt-1.5 text-xs text-slate-500">

                        {item.description}

                    </p>

                    </div>

                </div>

                );
              })}
            </div>
          </div>

          {/* RECAMBIO GANADOR */}
          <div className="relative overflow-hidden rounded-2xl bg-[#29156f] p-6 text-white shadow-sm">
            <div className="absolute right-0 top-0 size-44 rounded-full bg-[#f5cf3c]/10 blur-3xl" />

            <div className="relative">
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#f5cf3c] text-[#29156f]">
                <RefreshCw className="size-6" />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#f5cf3c]">
                Incentivo especial
              </p>

              <h2 className="mt-2 text-2xl font-extrabold">
                Recambio Ganador
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/75">
                Una nueva oportunidad para ganar con tu billete.
              </p>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-[#f5cf3c]">
                  ¿Cómo participas?
                </p>

                <p className="mt-2 text-sm leading-6 text-white/80">
                  Juegas únicamente con las{" "}
                  <strong className="text-white">
                    últimas 2 cifras del número de tu billete
                  </strong>
                  .
                </p>

                <p className="mt-3 text-xs font-semibold text-[#f5cf3c]">
                  La serie no participa en esta mecánica.
                </p>
              </div>

              <p className="mt-5 text-xs text-white/55">
                Múltiples ganadores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INFORMACIÓN OFICIAL Y PDF
      ========================================================= */}
      <section className="bg-[#f6f7fb] pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-[#f5cf3c]/40 bg-gradient-to-r from-[#fff9df] to-white p-6 shadow-sm md:p-7">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#f5cf3c] text-[#29156f]">
                  <FileText className="size-6" />
                </div>

                <div>
                  <h2 className="text-xl font-extrabold text-[#29156f]">
                    Consulta el Plan de Premios completo
                  </h2>

                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                    El detalle completo del Plan de Premios, las
                    aproximaciones, condiciones y demás información oficial
                    también se encuentra en la parte trasera de tu billete
                    físico.
                  </p>
                </div>
              </div>

              {/* Se activará cuando exista el PDF */}
              <button
                type="button"
                disabled
                title="El documento oficial estará disponible próximamente."
                className="inline-flex shrink-0 cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-[#29156f] px-5 py-3 text-sm font-bold text-white opacity-50"
              >
                <Download className="size-4" />
                Descargar PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FRANJA FINAL
      ========================================================= */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#29156f]/10 text-[#29156f]">
              <MapPin className="size-5" />
            </div>

            <p className="max-w-3xl text-sm leading-6 text-slate-600">
              Este 2026, el Sorteo Extraordinario de Colombia llega con un
              Plan de Premios superior a{" "}
              <strong className="text-[#29156f]">
                $36.700 millones
              </strong>
              , diseñado para que tengas más formas de ganar.
            </p>
          </div>

          <div className="shrink-0 text-left md:text-right">
            <p className="text-lg font-extrabold text-[#29156f]">
              ¡La suerte llega a tu región!
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Juega legal, juega responsablemente.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}