import Link from "next/link";
import {
  Award,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  MapPin,
  MonitorSmartphone,
  ShoppingBag,
  Ticket,
  Trophy,
  WalletCards,
} from "lucide-react";

import { Container } from "@/components/common/container";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";

const steps = [
  {
    number: "1",
    title: "Elige cómo quieres jugar",
    description:
      "Puedes comprar tu billete físico en nuestros puntos autorizados o jugar en línea desde donde estés.",
    icon: ShoppingBag,
  },
  {
    number: "2",
    title: "Selecciona tu número y serie",
    description:
      "Elige el número de 4 cifras y una serie de 3 cifras que más te guste y participa en nuestros sorteos.",
    icon: Ticket,
  },
  {
    number: "3",
    title: "Compra tu billete",
    description:
      "Realiza el pago de forma segura y recibe tu billete virtual al instante o tu billete físico.",
    icon: WalletCards,
  },
  {
    number: "4",
    title: "Espera el sorteo",
    description:
      "Consulta la fecha y hora del sorteo y mantente atento a los resultados.",
    icon: CalendarDays,
  },
  {
    number: "5",
    title: "¡Ganas!",
    description:
      "Si tu número y serie coinciden, te llevas grandes premios y haces realidad tus sueños.",
    icon: Trophy,
  },
];

const faqs = [
  "¿Desde qué edad puedo jugar?",
  "¿Dónde puedo comprar un billete?",
  "¿Cómo sé si mi billete es ganador?",
  "¿Qué hago si pierdo mi billete físico?",
  "¿Cómo y cuándo se realizan los sorteos?",
];

export default function ComoJugarPage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#21105b]">
        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_72%_40%,rgba(93,53,190,0.32),transparent_30%),radial-gradient(circle_at_95%_50%,rgba(255,204,30,0.08),transparent_18%)]
          "
        />

        <Container>
          <div className="relative grid min-h-[390px] items-center gap-10 py-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* CONTENIDO */}
            <div className="relative z-10">
              <div className="mb-5 flex items-center gap-2 text-xs text-white/70">
                <span>Inicio</span>
                <ChevronRight className="size-3" />
                <span>Juega</span>
                <ChevronRight className="size-3" />
                <span className="text-white">Cómo jugar</span>
              </div>

              <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                Cómo{" "}
                <span className="text-[#ffd52e]">
                  jugar
                </span>
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/75 md:text-base">
                Es muy fácil jugar y hacer realidad tus sueños con el Sorteo
                Extraordinario de Colombia.
              </p>
            </div>

            {/* =====================================================
                PLACEHOLDER HERO MARKETING
                Reemplazar cuando marketing entregue los assets.
            ===================================================== */}
            <div className="relative hidden min-h-[310px] lg:block">
              {/* Brillo de fondo */}
              <div
                aria-hidden="true"
                className="
                  absolute inset-0
                  bg-[radial-gradient(circle_at_55%_52%,rgba(245,191,38,0.18),transparent_20%),radial-gradient(circle_at_70%_45%,rgba(111,65,210,0.35),transparent_42%)]
                "
              />

              {/* Tarjeta virtual */}
              <div
                className="
                  absolute
                  left-[22%]
                  top-[18%]
                  flex
                  h-[160px]
                  w-[125px]
                  rotate-[-9deg]
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  border border-white/15
                  bg-gradient-to-br
                  from-[#2d1972]
                  to-[#160b42]
                  shadow-2xl
                "
              >
                <MonitorSmartphone className="mb-3 size-9 text-[#ffd52e]" />

                <span className="text-xs font-bold tracking-wider text-[#ffd52e]">
                  EXTRA
                </span>

                <span className="mt-2 text-3xl font-black text-white">
                  1234
                </span>

                <div className="mt-4 rounded-full bg-[#ffd52e] px-4 py-1 text-[8px] font-extrabold uppercase text-[#241260]">
                  Compra
                </div>
              </div>

              {/* Billete físico */}
              <div
                className="
                  absolute
                  left-[45%]
                  top-[16%]
                  flex
                  h-[160px]
                  w-[125px]
                  rotate-[7deg]
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  border border-white/20
                  bg-gradient-to-br
                  from-[#fffdf3]
                  to-[#ddd8c6]
                  shadow-2xl
                "
              >
                <span className="text-sm font-black text-[#261362]">
                  EXTRA
                </span>

                <span className="mt-3 text-4xl font-black text-[#261362]">
                  1234
                </span>

                <div className="mt-3 h-px w-16 bg-[#261362]/20" />

                <span className="mt-2 text-[9px] text-slate-500">
                  Serie 123
                </span>
              </div>

              {/* Esfera */}
              <div
                className="
                  absolute
                  right-[7%]
                  top-[15%]
                  flex
                  size-[150px]
                  items-center
                  justify-center
                  rounded-full
                  border-[5px]
                  border-[#ffd52e]
                  bg-[radial-gradient(circle_at_35%_30%,#fff8d2_0%,#f2d35e_12%,#321875_48%,#16083f_100%)]
                  shadow-[0_0_45px_rgba(255,209,38,0.3)]
                "
              >
                <span className="text-4xl font-black italic tracking-tighter text-[#ffd52e]">
                  EXTRA
                </span>
              </div>

              {/* Placeholder */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/35">
                  Imagen de marketing
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          BREADCRUMB
      ========================================================= */}
      <div className="border-b border-slate-200 bg-white">
        <Container>
          <Breadcrumbs
            items={[
              {
                label: "Juega",
                href: "/juega",
              },
              {
                label: "Cómo jugar",
                href: "/juega/como-jugar",
              },
            ]}
          />
        </Container>
      </div>

      {/* =========================================================
          CONTENIDO PRINCIPAL
      ========================================================= */}
      <main className="bg-[#f7f8fc] py-14 md:py-16">
        <Container>
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_390px]">
            {/* =====================================================
                COLUMNA PRINCIPAL
            ===================================================== */}
            <div>
              {/* ===================================================
                  PASOS
              =================================================== */}
              <section>
                <div className="mb-9 text-center">
                  <h2 className="text-2xl font-extrabold tracking-tight text-[#21165d] md:text-3xl">
                    JUGAR ES ASÍ DE{" "}
                    <span className="text-[#e6b81f]">FÁCIL</span>
                  </h2>

                  <div className="mx-auto mt-3 h-[3px] w-10 rounded-full bg-[#e6b81f]" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                  {steps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.number}
                        className="relative"
                      >
                        <div
                          className="
                            relative
                            flex
                            min-h-[250px]
                            flex-col
                            items-center
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            px-5
                            pb-6
                            pt-8
                            text-center
                            shadow-sm
                          "
                        >
                          {/* Número */}
                          <div
                            className="
                              absolute
                              -top-4
                              flex
                              size-8
                              items-center
                              justify-center
                              rounded-full
                              bg-[#21165d]
                              text-sm
                              font-extrabold
                              text-white
                              shadow-md
                            "
                          >
                            {step.number}
                          </div>

                          {/* Icono */}
                          <div
                            className="
                              mb-5
                              flex
                              size-16
                              items-center
                              justify-center
                              rounded-full
                              bg-[#f3f1fa]
                              text-[#21165d]
                            "
                          >
                            <Icon className="size-8" />
                          </div>

                          <h3 className="min-h-[48px] text-sm font-extrabold leading-5 text-[#21165d]">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-xs leading-5 text-slate-500">
                            {step.description}
                          </p>
                        </div>

                        {/* Flecha conectora */}
                        {index < steps.length - 1 && (
                          <div
                            className="
                              absolute
                              right-[-17px]
                              top-1/2
                              z-10
                              hidden
                              size-8
                              -translate-y-1/2
                              items-center
                              justify-center
                              rounded-full
                              bg-white
                              text-[#e6b81f]
                              shadow-sm
                              xl:flex
                            "
                          >
                            <ChevronRight className="size-5" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ===================================================
                  TIPOS DE BILLETE
              =================================================== */}
              <section className="mt-8">
                <div className="mb-5">
                  <h2 className="text-xl font-extrabold text-[#21165d]">
                    Tipos de billete
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Elige la opción que mejor se adapte a ti.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {/* BILLETE FÍSICO */}
                  <div
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-6
                      shadow-sm
                    "
                  >
                    <div className="flex gap-4">
                      <div
                        className="
                          flex
                          size-14
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#e9f4ff]
                          text-[#21165d]
                        "
                      >
                        <Ticket className="size-7" />
                      </div>

                      <div>
                        <h3 className="font-extrabold text-[#21165d]">
                          Billete físico
                        </h3>

                        <ul className="mt-3 space-y-2 text-xs leading-5 text-slate-500">
                          <li className="flex gap-2">
                            <span className="text-[#e6b81f]">◉</span>
                            Lo recibes en el punto de venta.
                          </li>

                          <li className="flex gap-2">
                            <span className="text-[#e6b81f]">◉</span>
                            Puedes comprarlo en cualquier lugar autorizado.
                          </li>

                          <li className="flex gap-2">
                            <span className="text-[#e6b81f]">◉</span>
                            Participas con tu número y serie.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* BILLETE VIRTUAL */}
                  <div
                    className="
                      rounded-2xl
                      border
                      border-[#d9c9ff]
                      bg-white
                      p-6
                      shadow-sm
                    "
                  >
                    <div className="flex gap-4">
                      <div
                        className="
                          flex
                          size-14
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#f0eaff]
                          text-[#5c2ab3]
                        "
                      >
                        <MonitorSmartphone className="size-7" />
                      </div>

                      <div>
                        <h3 className="font-extrabold text-[#21165d]">
                          Billete virtual
                        </h3>

                        <ul className="mt-3 space-y-2 text-xs leading-5 text-slate-500">
                          <li className="flex gap-2">
                            <span className="text-[#7b3fc4]">◉</span>
                            Lo recibes en tu correo electrónico.
                          </li>

                          <li className="flex gap-2">
                            <span className="text-[#7b3fc4]">◉</span>
                            Participas con tu número y serie.
                          </li>

                          <li className="flex gap-2">
                            <span className="text-[#7b3fc4]">◉</span>
                            Puedes consultarlo siempre en nuestra plataforma.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ===================================================
                  BANNER
              =================================================== */}
              <section
                className="
                  relative
                  mt-8
                  overflow-hidden
                  rounded-2xl
                  bg-[#21105b]
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-[radial-gradient(circle_at_25%_30%,rgba(104,63,197,0.4),transparent_30%)]
                  "
                />

                <div className="relative grid min-h-[220px] md:grid-cols-[1.05fr_0.95fr]">
                  {/* TEXTO */}
                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffd52e]">
                      El Extra
                    </span>

                    <h2 className="mt-3 max-w-md text-2xl font-extrabold leading-tight text-white">
                      ¡Más que un sorteo, una oportunidad para cambiar tu vida!
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
                      Con tu billete del EXTRA haces parte de una historia de
                      ilusión, esperanza y grandes oportunidades.
                    </p>

                    <Link
                      href="/juega/el-extra"
                      className="
                        mt-6
                        inline-flex
                        w-fit
                        items-center
                        gap-2
                        rounded-lg
                        bg-[#ffd52e]
                        px-5
                        py-3
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-wide
                        text-[#21165d]
                        transition-transform
                        hover:-translate-y-0.5
                      "
                    >
                      Conoce más sobre el Extra
                      <ChevronRight className="size-4" />
                    </Link>
                  </div>

                  {/* PLACEHOLDER IMAGEN */}
                  <div
                    className="
                      relative
                      hidden
                      min-h-[220px]
                      items-center
                      justify-center
                      overflow-hidden
                      md:flex
                    "
                  >
                    <div
                      aria-hidden="true"
                      className="
                        absolute inset-0
                        bg-[radial-gradient(circle_at_50%_50%,rgba(255,214,45,0.2),transparent_30%)]
                      "
                    />

                    <div
                      className="
                        relative
                        flex
                        h-full
                        w-full
                        items-center
                        justify-center
                        border-l
                        border-white/10
                        bg-gradient-to-br
                        from-white/10
                        to-transparent
                      "
                    >
                      <div className="text-center">
                        <UsersPlaceholder />

                        <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">
                          Imagen familiar
                        </p>

                        <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/25">
                          Pendiente marketing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* =====================================================
                SIDEBAR
            ===================================================== */}
            <aside className="space-y-7">
              {/* ===================================================
                  FAQ
              =================================================== */}
              <section
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                "
              >
                <div className="border-b border-slate-100 px-6 py-5">
                  <h2 className="text-lg font-extrabold text-[#21165d]">
                    Preguntas frecuentes
                  </h2>
                </div>

                <div className="divide-y divide-slate-100">
                  {faqs.map((faq) => (
                    <details
                      key={faq}
                      className="group"
                    >
                      <summary
                        className="
                          flex
                          cursor-pointer
                          list-none
                          items-center
                          justify-between
                          gap-4
                          px-6
                          py-4
                          text-sm
                          font-semibold
                          text-[#21165d]
                        "
                      >
                        {faq}

                        <ChevronDown
                          className="
                            size-4
                            shrink-0
                            transition-transform
                            group-open:rotate-180
                          "
                        />
                      </summary>

                      <div className="px-6 pb-4 text-sm leading-6 text-slate-500">
                        Aquí encontrarás información detallada sobre esta
                        pregunta. Este contenido podrá ajustarse posteriormente
                        con la información oficial.
                      </div>
                    </details>
                  ))}
                </div>

                <Link
                  href="/atencion/preguntas-frecuentes"
                  className="
                    flex
                    items-center
                    justify-between
                    px-6
                    py-5
                    text-sm
                    font-bold
                    text-[#21165d]
                    transition-colors
                    hover:bg-slate-50
                  "
                >
                  Ver todas las preguntas

                  <ChevronRight className="size-4" />
                </Link>
              </section>

              {/* ===================================================
                  CANALES DE COMPRA
              =================================================== */}
              <section>
                <h2 className="mb-4 text-lg font-extrabold text-[#21165d]">
                  Canales oficiales de compra
                </h2>

                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                  "
                >
                  {/* COMPRA FÍSICA */}
                  <Link
                    href="/juega/distribuidores"
                    className="
                      flex
                      items-center
                      gap-4
                      border-b
                      border-slate-100
                      p-5
                      transition-colors
                      hover:bg-slate-50
                    "
                  >
                    <div
                      className="
                        flex
                        size-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#21165d]
                        text-white
                      "
                    >
                      <MapPin className="size-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-[#21165d]">
                        Compra física
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        En más de 7.000 puntos de venta autorizados en todo el
                        país.
                      </p>
                    </div>

                    <ChevronRight className="size-5 shrink-0 text-[#21165d]" />
                  </Link>

                  {/* COMPRA VIRTUAL */}
                  <Link
                    href="#"
                    className="
                      flex
                      items-center
                      gap-4
                      p-5
                      transition-colors
                      hover:bg-slate-50
                    "
                  >
                    <div
                      className="
                        flex
                        size-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#5b2ca3]
                        text-white
                      "
                    >
                      <MonitorSmartphone className="size-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-[#21165d]">
                        Compra virtual
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Compra tu billete en línea de forma segura y juega desde
                        cualquier lugar.
                      </p>
                    </div>

                    <ChevronRight className="size-5 shrink-0 text-[#21165d]" />
                  </Link>
                </div>
              </section>

              {/* APOYO */}
              <div
                className="
                  rounded-2xl
                  border
                  border-[#f0e3a8]
                  bg-[#fffdf4]
                  p-6
                "
              >
                <div className="flex gap-4">
                  <div
                    className="
                      flex
                      size-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#fff3bf]
                      text-[#b78b00]
                    "
                  >
                    <CircleHelp className="size-5" />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#21165d]">
                      ¿Necesitas ayuda?
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Nuestro equipo está disponible para resolver tus dudas.
                    </p>

                    <Link
                      href="/el-extra/contacto"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#21165d]"
                    >
                      Contáctanos
                      <ChevronRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </main>
    </>
  );
}

/* =============================================================
   PLACEHOLDER DE IMAGEN FAMILIAR
   Temporal hasta recibir el material de marketing.
============================================================= */
function UsersPlaceholder() {
  return (
    <div
      className="
        mx-auto
        flex
        size-20
        items-center
        justify-center
        rounded-full
        border
        border-white/20
        bg-white/5
        text-white/40
      "
    >
      <Award className="size-9" />
    </div>
  );
}