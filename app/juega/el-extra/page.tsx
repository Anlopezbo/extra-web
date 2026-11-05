import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CalendarDays,
  ChevronRight,
  Heart,
  Lightbulb,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

import { Container } from "@/components/common/container";

const features = [
  {
    title: "Tradición que nos inspira",
    description:
      "Más de 60 años acompañando a los colombianos con nuestros sorteos.",
    icon: Users,
  },
  {
    title: "Confianza y transparencia",
    description:
      "Operamos con los más altos estándares de seguridad, legalidad y transparencia.",
    icon: ShieldCheck,
  },
  {
    title: "Comprometidos con el país",
    description:
      "Aportamos al desarrollo social y al bienestar de miles de colombianos.",
    icon: Users,
  },
  {
    title: "Presencia nacional",
    description:
      "Llegamos a cada rincón del país a través de nuestra red de distribuidores.",
    icon: MapPinned,
  },
  {
    title: "Innovamos para ti",
    description:
      "Evolucionamos constantemente para ofrecerte la mejor experiencia de juego.",
    icon: Lightbulb,
  },
  {
    title: "Premios que cambian vidas",
    description:
      "Entregamos premios que hacen realidad sueños y transforman historias.",
    icon: Trophy,
  },
];

const stats = [
  {
    value: "+60",
    label: "Años de historia",
    icon: Users,
  },
  {
    value: "+2.500",
    label: "Sorteos realizados",
    icon: Award,
  },
  {
    value: "+7.000",
    label: "Puntos de venta autorizados",
    icon: MapPinned,
  },
  {
    value: "Millones",
    label: "De colombianos que confían en nosotros",
    icon: Heart,
  },
];

export default function ElExtraPage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#21105d]">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(99,62,192,0.35),transparent_30%),radial-gradient(circle_at_20%_60%,rgba(61,28,130,0.45),transparent_40%)]" />

        <Container>
          <div className="relative grid min-h-[360px] items-center gap-10 py-10 lg:grid-cols-[0.95fr_1.25fr] lg:py-0">
            {/* =====================================================
                TEXTO HERO
            ===================================================== */}
            <div className="relative z-10 py-4 lg:py-10">
              <div className="mb-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f6d331]">
                <Sparkles className="size-4" />
                <span>El Extra</span>
              </div>

              <h1 className="max-w-[520px] text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[46px]">
                Mucho más que un
                <br />
                <span className="text-[#f6d331]">sorteo, somos parte</span>
                <br />
                <span className="text-[#f6d331]">de tu historia.</span>
              </h1>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/75">
                Desde hace más de 60 años llevamos emoción, esperanza y sueños
                a millones de colombianos.
              </p>
            </div>

            {/* =====================================================
                PLACEHOLDER HERO MARKETING
            ===================================================== */}
            <div className="relative hidden h-full min-h-[360px] overflow-hidden lg:block">
              {/* Fondo decorativo */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(248,207,45,0.15),transparent_12%),radial-gradient(circle_at_70%_50%,rgba(90,51,183,0.55),transparent_40%)]" />

              {/* Líneas decorativas */}
              <div className="absolute right-[10%] top-[18%] h-[210px] w-[210px] rounded-full border border-yellow-300/30" />
              <div className="absolute right-[3%] top-[10%] h-[280px] w-[280px] rounded-full border border-yellow-300/15" />

              {/* Placeholder principal */}
              <div className="absolute right-[12%] top-1/2 flex h-[220px] w-[220px] -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#f6d331]/70 bg-gradient-to-br from-[#42218f] via-[#1f0e5e] to-[#110630] shadow-[0_0_60px_rgba(246,211,49,0.3)]">
                <div className="text-center">
                  <span className="block text-4xl font-black italic tracking-tight text-[#f6d331]">
                    EXTRA
                  </span>

                  <span className="mt-3 block text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
                    Imagen de marketing
                  </span>
                </div>
              </div>

              {/* Base decorativa */}
              <div className="absolute bottom-8 right-[2%] h-12 w-[330px] rounded-[100%] border border-yellow-300/40 bg-gradient-to-r from-[#5a2bc2] via-[#f6d331] to-[#e52d36] opacity-80 blur-[1px]" />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          BREADCRUMBS
      ========================================================= */}
      <div className="border-b border-slate-200 bg-white">
        <Container>
          <div className="flex h-12 items-center gap-2 text-xs text-slate-500">
            <Link
              href="/"
              className="transition-colors hover:text-[#29156f]"
            >
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

            <span className="font-medium text-[#29156f]">El Extra</span>
          </div>
        </Container>
      </div>

      {/* =========================================================
          ¿QUÉ HACE ÚNICO AL EXTRA?
      ========================================================= */}
      <section className="bg-slate-50 py-14 lg:py-16">
        <Container>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-black tracking-tight text-[#29156f] sm:text-3xl">
              ¿Qué hace único al EXTRA?
            </h2>

            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-[#f6d331]" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-xl border border-slate-200 bg-white px-5 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#f6d331]/50 hover:shadow-lg"
                >
                  <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-[#29156f]/5 text-[#29156f] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-7" strokeWidth={1.8} />
                  </div>

                  <h3 className="min-h-[42px] text-sm font-extrabold leading-5 text-[#29156f]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* =====================================================
              CONTENIDO INFERIOR
          ===================================================== */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
            {/* =====================================================
                CIFRAS
            ===================================================== */}
            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:p-7">
              <h2 className="text-lg font-black text-[#29156f]">
                Cifras que hablan de nosotros
              </h2>

              <div className="mt-7 grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.value}
                      className="px-3 text-center first:pl-0 last:pr-0"
                    >
                      <div className="mx-auto mb-3 flex size-11 items-center justify-center rounded-full bg-[#29156f] text-white">
                        <Icon className="size-5" />
                      </div>

                      <p className="text-xl font-black text-[#29156f]">
                        {stat.value}
                      </p>

                      <p className="mx-auto mt-1 max-w-[120px] text-[10px] leading-4 text-slate-500">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* =====================================================
                BLOQUE INSTITUCIONAL
            ===================================================== */}
            <section className="overflow-hidden rounded-xl bg-[#21105d] shadow-sm">
              <div className="grid min-h-[250px] md:grid-cols-[0.95fr_1.05fr]">
                {/* PLACEHOLDER IMAGEN FAMILIA */}
                <div className="relative min-h-[220px] overflow-hidden bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.6),transparent_25%),linear-gradient(135deg,rgba(41,21,111,0.08),rgba(0,0,0,0.15))]" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="flex size-14 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white">
                      <Users className="size-7" />
                    </div>

                    <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                      Imagen familiar
                    </span>

                    <span className="mt-1 text-[9px] uppercase tracking-wider text-white/45">
                      Pendiente marketing
                    </span>
                  </div>
                </div>

                {/* TEXTO */}
                <div className="flex flex-col justify-center p-7 lg:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-[#f6d331]">
                    El Extra
                  </p>

                  <h2 className="mt-2 text-2xl font-black leading-tight text-white">
                    Está en los grandes
                    <br />
                    <span className="text-[#f6d331]">momentos de tu vida</span>
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-white/70">
                    Gracias por hacer parte de nuestra gran familia y permitirnos
                    acompañar tus sueños.
                  </p>

                  <Link
                    href="/el-extra/quienes-somos"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-[#f6d331] px-4 py-3 text-[10px] font-black uppercase tracking-wide text-[#29156f] transition-all hover:bg-[#ffe15c] hover:shadow-lg"
                  >
                    Conoce más sobre nosotros

                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}