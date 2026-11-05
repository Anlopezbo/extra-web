"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Megaphone,
  Newspaper,
  Search,
  Tag,
  Trophy,
  Users,
  X,
} from "lucide-react";

type Category =
  | "Sorteos"
  | "Promociones"
  | "Institucional"
  | "Responsabilidad social"
  | "Comunicados";

type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: Category;
  featured?: boolean;
  image: string;
};

const categories: Category[] = [
  "Sorteos",
  "Promociones",
  "Institucional",
  "Responsabilidad social",
  "Comunicados",
];

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Lanzamos nuestra nueva campaña: Ganar te hace EXTRAordinario",
    excerpt:
      "Una campaña que reconoce a nuestros distribuidores y jugadores como protagonistas de grandes historias.",
    content:
      "En el EXTRA de Colombia seguimos creando experiencias que acercan a nuestros jugadores y distribuidores a nuevas oportunidades. Nuestra nueva campaña Ganar te hace EXTRAordinario celebra las historias de quienes creen, participan y convierten cada oportunidad en algo especial.",
    date: "30 de julio de 2026",
    category: "Promociones",
    featured: true,
    image: "campaign",
  },
  {
    id: 2,
    title: "Así se vivió el sorteo 2253 del EXTRA de Colombia",
    excerpt:
      "Conoce los números ganadores, los premios secos y los momentos más importantes de nuestro último sorteo.",
    content:
      "El sorteo 2253 estuvo lleno de emoción y nuevas oportunidades para nuestros jugadores. Durante la jornada se entregaron importantes premios y se revelaron los números ganadores correspondientes a esta edición del EXTRA de Colombia.",
    date: "28 de julio de 2026",
    category: "Sorteos",
    image: "draw",
  },
  {
    id: 3,
    title: "Reconocemos a nuestros distribuidores, el corazón del EXTRA",
    excerpt:
      "Historias que inspiran y nos motivan a seguir llevando sueños a todos los rincones del país.",
    content:
      "Nuestros distribuidores son una parte fundamental de la historia del EXTRA de Colombia. Su compromiso, cercanía y trabajo diario permiten que millones de personas encuentren nuevas oportunidades para cumplir sus sueños.",
    date: "25 de julio de 2026",
    category: "Institucional",
    image: "distributor",
  },
  {
    id: 4,
    title: "Conoce Mi EXTRA, tu cuenta para estar siempre conectado",
    excerpt:
      "Consulta resultados, promociones y muchos más beneficios desde nuestra plataforma.",
    content:
      "Mi EXTRA es el espacio digital creado para acercar aún más a nuestros jugadores a toda la información de interés. Desde allí podrás consultar resultados, conocer promociones y mantenerte informado sobre las novedades del EXTRA de Colombia.",
    date: "22 de julio de 2026",
    category: "Institucional",
    image: "mobile",
  },
  {
    id: 5,
    title: "Entregamos premios que cambian historias",
    excerpt:
      "Conoce a los ganadores del EXTRA y las historias detrás de cada premio entregado.",
    content:
      "Cada premio entregado representa una nueva historia. En el EXTRA de Colombia seguimos acompañando a nuestros ganadores en momentos que pueden marcar una diferencia importante en sus vidas y en las de sus familias.",
    date: "20 de julio de 2026",
    category: "Responsabilidad social",
    image: "winners",
  },
  {
    id: 6,
    title: "Vive la emoción del fútbol con nuestra promoción Mundialista",
    excerpt:
      "Participa, acumula oportunidades y gana increíbles premios con el EXTRA.",
    content:
      "La emoción del fútbol llega acompañada de nuevas oportunidades para nuestros jugadores. Con nuestra promoción Mundialista queremos llevar la pasión de este gran evento a cada rincón del país.",
    date: "18 de julio de 2026",
    category: "Promociones",
    image: "football",
  },
  {
    id: 7,
    title: "Información importante para nuestros jugadores",
    excerpt:
      "Conoce las recomendaciones y canales oficiales para consultar información del EXTRA.",
    content:
      "Recordamos a nuestros jugadores la importancia de consultar únicamente nuestros canales oficiales para verificar resultados, promociones y demás información relacionada con el EXTRA de Colombia.",
    date: "15 de julio de 2026",
    category: "Comunicados",
    image: "communication",
  },
  {
    id: 8,
    title: "El EXTRA continúa recorriendo Colombia",
    excerpt:
      "Seguimos fortaleciendo nuestra presencia y cercanía con las diferentes regiones del país.",
    content:
      "Nuestro compromiso con Colombia continúa creciendo. A través de nuestros distribuidores y diferentes iniciativas seguimos llegando a más personas y comunidades en todo el territorio nacional.",
    date: "12 de julio de 2026",
    category: "Institucional",
    image: "country",
  },
  {
    id: 9,
    title: "Nuevas oportunidades para ganar con el EXTRA",
    excerpt:
      "Conoce las novedades y próximas actividades que tenemos preparadas para nuestros jugadores.",
    content:
      "Estamos preparando nuevas experiencias y oportunidades para quienes hacen parte de la familia del EXTRA. Muy pronto estaremos compartiendo más información a través de nuestros canales oficiales.",
    date: "8 de julio de 2026",
    category: "Promociones",
    image: "opportunity",
  },
];

const categoryCounts: Record<Category, number> = {
  Sorteos: 12,
  Promociones: 18,
  Institucional: 10,
  "Responsabilidad social": 8,
  Comunicados: 6,
};

function getCategoryIcon(category: Category) {
  const className = "size-4";

  switch (category) {
    case "Sorteos":
      return <Trophy className={className} />;

    case "Promociones":
      return <Tag className={className} />;

    case "Institucional":
      return <Newspaper className={className} />;

    case "Responsabilidad social":
      return <Users className={className} />;

    default:
      return <Megaphone className={className} />;
  }
}

function NewsImage({
  type,
  compact = false,
}: {
  type: string;
  compact?: boolean;
}) {
  const heightClass = compact ? "h-full min-h-[72px]" : "h-44";

  const backgrounds: Record<string, string> = {
    campaign:
      "bg-[radial-gradient(circle_at_20%_55%,#f2c229_0%,#d99a09_7%,transparent_8%),radial-gradient(circle_at_80%_40%,#d72b32_0%,transparent_12%),linear-gradient(135deg,#1e0c55_0%,#35127e_45%,#13052f_100%)]",
    draw:
      "bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,.7)_0%,transparent_5%),radial-gradient(circle_at_50%_55%,#ffffff_0%,#d6d8d8_12%,#71777a_13%,transparent_18%),linear-gradient(135deg,#263338,#bfc7c8_55%,#596368_100%)]",
    distributor:
      "bg-[radial-gradient(circle_at_70%_25%,#d6a72c_0%,transparent_8%),linear-gradient(135deg,#5c321e_0%,#b97a43_45%,#202c30_100%)]",
    mobile:
      "bg-[linear-gradient(135deg,#2c1468_0%,#48219a_40%,#0e0630_100%)]",
    winners:
      "bg-[radial-gradient(circle_at_75%_30%,#ffffff_0%,transparent_15%),linear-gradient(135deg,#b82028_0%,#731219_45%,#271129_100%)]",
    football:
      "bg-[radial-gradient(circle_at_50%_75%,#ffffff_0%,#d8d8d8_15%,#252525_16%,transparent_27%),linear-gradient(135deg,#18064b_0%,#3e1585_55%,#16042d_100%)]",
    communication:
      "bg-[linear-gradient(135deg,#21104f_0%,#4d228f_55%,#f4c430_150%)]",
    country:
      "bg-[linear-gradient(135deg,#182f68_0%,#24643e_50%,#0f3621_100%)]",
    opportunity:
      "bg-[radial-gradient(circle_at_70%_35%,#f4c430_0%,transparent_10%),linear-gradient(135deg,#42147b_0%,#7d28b8_50%,#180833_100%)]",
  };

  return (
    <div
      className={`${heightClass} relative overflow-hidden ${backgrounds[type] || backgrounds.campaign}`}
    >
      {type === "campaign" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(244,196,48,.9)_0%,transparent_1%),radial-gradient(circle_at_25%_75%,rgba(244,196,48,.8)_0%,transparent_1%),radial-gradient(circle_at_70%_20%,rgba(244,196,48,.8)_0%,transparent_1%)]" />

          <div className="absolute left-1/2 top-1/2 flex h-[85%] w-[42%] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] flex-col items-center justify-center rounded-md bg-[#f4c430] px-2 text-center shadow-xl">
            <span className="text-xs font-black leading-tight text-[#29156f] sm:text-sm">
              GANAR
            </span>

            <span className="text-sm font-black leading-tight text-[#29156f] sm:text-lg">
              TE HACE
            </span>

            <span className="text-base font-black leading-tight text-[#29156f] sm:text-xl">
              EXTRA
            </span>
          </div>

          <div className="absolute bottom-5 left-8 flex size-14 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_28%,#fff,#d9d9d9_30%,#c78b00_31%,#f1b719_65%,#8f5d00)] shadow-xl sm:size-16">
            <span className="text-xl font-black text-slate-900 sm:text-2xl">
              7
            </span>
          </div>

          <div className="absolute bottom-5 right-8 flex size-14 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_28%,#fff,#d9d9d9_30%,#b71c1c_31%,#d9252d_65%,#8c1117)] shadow-xl sm:size-16">
            <span className="text-xl font-black text-slate-900 sm:text-2xl">
              3
            </span>
          </div>
        </>
      )}

      {type === "draw" && (
        <>
          <div className="absolute left-[18%] top-[30%] size-8 rounded-full border-2 border-white/50 bg-white/70 shadow-lg" />
          <div className="absolute left-[35%] top-[55%] size-10 rounded-full border-2 border-white/50 bg-white/70 shadow-lg" />
          <div className="absolute right-[20%] top-[30%] size-9 rounded-full border-2 border-white/50 bg-white/70 shadow-lg" />
          <div className="absolute bottom-[20%] right-[38%] size-7 rounded-full border-2 border-white/50 bg-white/70 shadow-lg" />
        </>
      )}

      {type === "football" && (
        <div className="absolute bottom-[-15px] left-1/2 flex size-24 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-2xl">
          <div className="size-8 rotate-45 bg-slate-900" />
        </div>
      )}

      {type === "mobile" && (
        <div className="absolute bottom-0 left-1/2 h-[85%] w-[36%] -translate-x-1/2 rounded-t-[24px] border-4 border-slate-900 bg-white shadow-xl">
          <div className="absolute inset-3 rounded-xl bg-slate-100" />
          <div className="absolute left-1/2 top-2 h-1 w-8 -translate-x-1/2 rounded-full bg-slate-900" />
        </div>
      )}

      {type === "distributor" && (
        <div className="absolute bottom-0 right-[20%] flex h-[78%] w-[28%] items-end justify-center rounded-t-full bg-[#182228]/80">
          <div className="mb-5 text-3xl font-black text-[#f4c430]">EXTRA</div>
        </div>
      )}

      {type === "winners" && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <div className="size-10 rounded-full bg-white/70" />
          <div className="size-12 rounded-full bg-white/90" />
          <div className="size-10 rounded-full bg-white/70" />
        </div>
      )}

      {type === "communication" && (
        <Megaphone className="absolute bottom-4 right-6 size-20 text-white/80" />
      )}

      {type === "country" && (
        <div className="absolute inset-x-[25%] bottom-5 h-[55%] rounded-[50%] bg-white/20 blur-sm" />
      )}

      {type === "opportunity" && (
        <Trophy className="absolute bottom-5 right-6 size-20 text-[#f4c430]/80" />
      )}
    </div>
  );
}

export default function NoticiasPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas las categorías");
  const [sortOrder, setSortOrder] = useState("Más recientes");
  const [visibleNews, setVisibleNews] = useState(6);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const filteredNews = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    let results = newsItems.filter((news) => {
      const matchesSearch =
        !normalizedSearch ||
        news.title.toLowerCase().includes(normalizedSearch) ||
        news.excerpt.toLowerCase().includes(normalizedSearch) ||
        news.category.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        selectedCategory === "Todas las categorías" ||
        news.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    if (sortOrder === "Más antiguos") {
      results = [...results].reverse();
    }

    if (sortOrder === "Alfabético") {
      results = [...results].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return results;
  }, [search, selectedCategory, sortOrder]);

  const mainNews = filteredNews.slice(0, 3);
  const secondaryNews = filteredNews.slice(3, visibleNews);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setVisibleNews(6);

    window.scrollTo({
      top: 280,
      behavior: "smooth",
    });
  };

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("Todas las categorías");
    setSortOrder("Más recientes");
    setVisibleNews(6);
  };

  const openNews = (news: NewsItem) => {
    setSelectedNews(news);
  };

  const featuredNews = newsItems.filter((news) => news.featured);

  const sidebarNews = [
    ...featuredNews,
    ...newsItems.filter((news) => news.id === 2 || news.id === 3),
  ].slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f6f6f8]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#18124c]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(65,27,139,.9),transparent_24%),radial-gradient(circle_at_15%_80%,rgba(37,20,98,.9),transparent_45%)]" />

        <div className="absolute left-[5%] top-[55%] size-2 rotate-45 bg-[#f4c430]" />
        <div className="absolute left-[1%] top-[70%] size-2 rotate-45 bg-[#f4c430]" />
        <div className="absolute right-[35%] top-[35%] size-2 rotate-45 bg-[#f4c430]" />
        <div className="absolute right-[30%] top-[70%] size-2 rotate-45 bg-[#f4c430]" />
        <div className="absolute right-[8%] top-[40%] size-2 rotate-45 bg-[#f4c430]" />

        <div className="absolute right-[12%] top-[-20px] hidden h-40 w-32 rotate-[7deg] rounded-lg bg-white/90 p-3 shadow-2xl lg:block">
          <div className="border-b-2 border-slate-300 pb-2 text-center text-2xl font-black italic text-slate-700">
            NOTICIAS
          </div>

          <div className="mt-3 h-2 rounded bg-slate-300" />
          <div className="mt-2 h-2 w-4/5 rounded bg-slate-200" />
          <div className="mt-2 h-2 w-3/5 rounded bg-slate-200" />

          <div className="absolute bottom-4 right-3 text-lg font-black text-[#f4c430]">
            EXTRA
          </div>
        </div>

        <div className="absolute right-[3%] top-[10px] hidden lg:block">
          <Megaphone className="size-32 rotate-[-20deg] text-slate-200 drop-shadow-2xl" />
          <div className="absolute -right-3 top-4 h-1 w-10 rotate-[-30deg] rounded bg-[#f4c430]" />
          <div className="absolute right-[-8px] top-10 h-1 w-9 rotate-[10deg] rounded bg-[#f4c430]" />
          <div className="absolute right-[-5px] top-[72px] h-1 w-8 rotate-[35deg] rounded bg-[#f4c430]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-6 md:py-7">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Noticias
          </h1>

          <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
            Entérate de todo lo que pasa en el EXTRA de Colombia,
            <br className="hidden sm:block" />
            nuestras novedades, logros y actividades.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTENIDO
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
        {/* =================================================
            FILTROS
        ================================================= */}
        <section className="mb-4">
          <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_190px_190px]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#29156f]" />

              <input
                type="text"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setVisibleNews(6);
                }}
                placeholder="Buscar noticias..."
                className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-xs text-[#29156f] outline-none transition-colors placeholder:text-slate-400 focus:border-[#29156f]"
              />
            </div>

            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(event) => {
                  setSelectedCategory(event.target.value);
                  setVisibleNews(6);
                }}
                className="h-11 w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 pr-10 text-xs font-medium text-[#29156f] outline-none transition-colors focus:border-[#29156f]"
              >
                <option>Todas las categorías</option>

                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>

              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#29156f]" />
            </div>

            <div className="relative">
              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
                className="h-11 w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 pr-10 text-xs font-medium text-[#29156f] outline-none transition-colors focus:border-[#29156f]"
              >
                <option>Más recientes</option>
                <option>Más antiguos</option>
                <option>Alfabético</option>
              </select>

              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#29156f]" />
            </div>
          </div>
        </section>

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
          {/* =================================================
              NOTICIAS
          ================================================= */}
          <div>
            {filteredNews.length > 0 ? (
              <>
                {/* =========================================
                    NOTICIAS PRINCIPALES
                ========================================= */}
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {mainNews.map((news) => (
                    <article
                      key={news.id}
                      className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="relative">
                        <NewsImage type={news.image} />

                        {news.featured && (
                          <div className="absolute left-3 top-3 rounded bg-[#2f9b4f] px-2 py-1 text-[8px] font-black uppercase tracking-wide text-white">
                            Destacada
                          </div>
                        )}
                      </div>

                      <div className="p-4">
                        <div className="flex items-center gap-2 text-[10px] text-slate-500">
                          <CalendarDays className="size-3.5 text-[#29156f]" />
                          {news.date}
                        </div>

                        <h2 className="mt-3 min-h-[42px] text-sm font-extrabold leading-5 text-[#29156f]">
                          {news.title}
                        </h2>

                        <p className="mt-2 min-h-[48px] text-[10px] leading-4 text-slate-500">
                          {news.excerpt}
                        </p>

                        <button
                          type="button"
                          onClick={() => openNews(news)}
                          className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-wide text-[#29156f] transition-colors hover:text-[#e52d36]"
                        >
                          Leer más
                          <ArrowRight className="size-4" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>

                {/* =========================================
                    NOTICIAS SECUNDARIAS
                ========================================= */}
                {secondaryNews.length > 0 && (
                  <div className="mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {secondaryNews.map((news) => (
                      <article
                        key={news.id}
                        className="group flex overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md md:block"
                      >
                        <div className="w-[38%] shrink-0 md:w-full">
                          <NewsImage type={news.image} compact />
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col p-3">
                          <div className="flex items-center gap-1.5 text-[9px] text-slate-500">
                            <CalendarDays className="size-3 text-[#29156f]" />
                            {news.date}
                          </div>

                          <h3 className="mt-2 text-xs font-extrabold leading-4 text-[#29156f]">
                            {news.title}
                          </h3>

                          <p className="mt-2 hidden text-[9px] leading-4 text-slate-500 lg:block">
                            {news.excerpt}
                          </p>

                          <button
                            type="button"
                            onClick={() => openNews(news)}
                            className="mt-auto pt-3 text-left text-[9px] font-black uppercase tracking-wide text-[#29156f] transition-colors hover:text-[#e52d36]"
                          >
                            <span className="inline-flex items-center gap-1">
                              Leer más
                              <ChevronRight className="size-3.5" />
                            </span>
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                )}

                {/* =========================================
                    VER MAS
                ========================================= */}
                {visibleNews < filteredNews.length && (
                  <div className="mt-5 flex justify-center">
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleNews((current) => current + 3)
                      }
                      className="flex h-10 items-center gap-3 rounded-lg border border-slate-200 bg-white px-5 text-[10px] font-black uppercase tracking-wide text-[#29156f] transition-colors hover:border-[#29156f] hover:bg-slate-50"
                    >
                      Ver más noticias
                      <ChevronDown className="size-4" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-[#29156f]/10">
                  <Search className="size-7 text-[#29156f]" />
                </div>

                <h2 className="mt-5 text-xl font-extrabold text-[#29156f]">
                  No encontramos noticias
                </h2>

                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  No existen noticias que coincidan con los filtros
                  seleccionados.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 rounded-lg bg-[#29156f] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#21104f]"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>

          {/* =================================================
              SIDEBAR
          ================================================= */}
          <aside className="space-y-4">
            {/* =============================================
                NOTICIAS DESTACADAS
            ============================================= */}
            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 px-5 py-4">
                <h2 className="text-lg font-extrabold text-[#29156f]">
                  Noticias destacadas
                </h2>
              </div>

              <div className="divide-y divide-slate-100">
                {sidebarNews.map((news) => (
                  <button
                    key={news.id}
                    type="button"
                    onClick={() => openNews(news)}
                    className="flex w-full gap-3 p-3 text-left transition-colors hover:bg-slate-50"
                  >
                    <div className="h-16 w-20 shrink-0 overflow-hidden rounded-md">
                      <NewsImage type={news.image} compact />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="line-clamp-2 text-[10px] font-bold leading-4 text-[#29156f]">
                        {news.title}
                      </h3>

                      <div className="mt-2 flex items-center gap-1 text-[9px] text-slate-500">
                        <CalendarDays className="size-3 text-[#29156f]" />
                        {news.date}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("Todas las categorías");
                  setVisibleNews(newsItems.length);

                  window.scrollTo({
                    top: 280,
                    behavior: "smooth",
                  });
                }}
                className="flex w-full items-center justify-center gap-3 border-t border-slate-100 px-5 py-4 text-[10px] font-black uppercase tracking-wide text-[#29156f] transition-colors hover:bg-slate-50"
              >
                Ver todas las noticias
                <ChevronRight className="size-4" />
              </button>
            </section>

            {/* =============================================
                CATEGORIAS
            ============================================= */}
            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 px-5 py-4">
                <h2 className="text-lg font-extrabold text-[#29156f]">
                  Categorías
                </h2>
              </div>

              <div className="divide-y divide-slate-100">
                {categories.map((category) => {
                  const isSelected = selectedCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => handleCategoryClick(category)}
                      className={`flex w-full items-center gap-3 px-5 py-3 text-left transition-colors ${
                        isSelected
                          ? "bg-[#29156f]/5"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <div
                        className={`${
                          isSelected
                            ? "text-[#e52d36]"
                            : "text-[#29156f]"
                        }`}
                      >
                        {getCategoryIcon(category)}
                      </div>

                      <span
                        className={`flex-1 text-xs ${
                          isSelected
                            ? "font-bold text-[#29156f]"
                            : "text-slate-600"
                        }`}
                      >
                        {category}
                      </span>

                      <span className="text-[10px] font-medium text-slate-500">
                        {categoryCounts[category]}
                      </span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("Todas las categorías");
                  setVisibleNews(newsItems.length);

                  window.scrollTo({
                    top: 280,
                    behavior: "smooth",
                  });
                }}
                className="flex w-full items-center justify-center gap-3 border-t border-slate-100 px-5 py-4 text-[10px] font-black uppercase tracking-wide text-[#29156f] transition-colors hover:bg-slate-50"
              >
                Ver todas las categorías
                <ChevronRight className="size-4" />
              </button>
            </section>
          </aside>
        </div>
      </section>

      {/* =====================================================
          MODAL DETALLE DE NOTICIA
      ===================================================== */}
      {selectedNews && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedNews(null)}
        >
          <article
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative">
              <NewsImage type={selectedNews.image} />

              <button
                type="button"
                onClick={() => setSelectedNews(null)}
                className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white text-[#29156f] shadow-lg transition-transform hover:scale-105"
                aria-label="Cerrar"
              >
                <X className="size-5" />
              </button>

              {selectedNews.featured && (
                <div className="absolute bottom-4 left-4 rounded bg-[#2f9b4f] px-3 py-1.5 text-[9px] font-black uppercase tracking-wide text-white">
                  Noticia destacada
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4 text-[#29156f]" />
                  {selectedNews.date}
                </span>

                <span className="rounded-full bg-[#29156f]/10 px-3 py-1 font-medium text-[#29156f]">
                  {selectedNews.category}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-extrabold leading-tight text-[#29156f] sm:text-3xl">
                {selectedNews.title}
              </h2>

              <p className="mt-5 text-sm font-medium leading-6 text-slate-600">
                {selectedNews.excerpt}
              </p>

              <div className="mt-6 border-t border-slate-100 pt-6">
                <p className="text-sm leading-7 text-slate-600">
                  {selectedNews.content}
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Esta es una publicación demostrativa de la plataforma del
                  EXTRA de Colombia. Posteriormente, esta estructura podrá
                  conectarse directamente con el sistema oficial de noticias
                  para cargar automáticamente el contenido completo.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedNews(null)}
                className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#29156f] transition-colors hover:text-[#e52d36]"
              >
                <ArrowRight className="size-4 rotate-180" />
                Volver a noticias
              </button>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}