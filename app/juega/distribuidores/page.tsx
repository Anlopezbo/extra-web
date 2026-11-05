"use client";

import { useMemo, useRef, useState } from "react";
import {
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LocateFixed,
  MapPin,
  Phone,
  Search,
  Store,
  X,
} from "lucide-react";

type Distributor = {
  id: number;
  name: string;
  department: string;
  city: string;
  address: string;
  neighborhood: string;
  latitude: number;
  longitude: number;
  phone: string;
  status: "Abierto" | "Cerrado";
  schedule: string;
};

const distributors: Distributor[] = [
  {
    id: 1,
    name: "Cigarrería El Triángulo",
    department: "Bogotá D.C.",
    city: "Bogotá D.C.",
    address: "Cra. 15 # 93 - 45",
    neighborhood: "Chapinero",
    latitude: 4.668,
    longitude: -74.059,
    phone: "3001234567",
    status: "Abierto",
    schedule: "Hasta las 9:00 p. m.",
  },
  {
    id: 2,
    name: "Super Loterías 24 Horas",
    department: "Bogotá D.C.",
    city: "Bogotá D.C.",
    address: "Av. Caracas # 72 - 15",
    neighborhood: "Barrios Unidos",
    latitude: 4.657,
    longitude: -74.062,
    phone: "3002345678",
    status: "Abierto",
    schedule: "Abierto 24 horas",
  },
  {
    id: 3,
    name: "Punto de Suerte",
    department: "Bogotá D.C.",
    city: "Bogotá D.C.",
    address: "Calle 100 # 118 - 22",
    neighborhood: "Suba",
    latitude: 4.729,
    longitude: -74.096,
    phone: "3003456789",
    status: "Abierto",
    schedule: "Hasta las 8:00 p. m.",
  },
  {
    id: 4,
    name: "Loterías La Fortuna",
    department: "Bogotá D.C.",
    city: "Bogotá D.C.",
    address: "Cl. 80 # 68 - 21",
    neighborhood: "Engativá",
    latitude: 4.679,
    longitude: -74.096,
    phone: "3004567890",
    status: "Cerrado",
    schedule: "Abre mañana a las 8:00 a. m.",
  },
  {
    id: 5,
    name: "Distribuidora Ganar",
    department: "Bogotá D.C.",
    city: "Bogotá D.C.",
    address: "Cra. 27 # 45 - 12",
    neighborhood: "Teusaquillo",
    latitude: 4.637,
    longitude: -74.083,
    phone: "3005678901",
    status: "Abierto",
    schedule: "Hasta las 7:00 p. m.",
  },
  {
    id: 6,
    name: "Punto Extra Medellín",
    department: "Antioquia",
    city: "Medellín",
    address: "Cra. 43 # 10 - 35",
    neighborhood: "El Poblado",
    latitude: 6.208,
    longitude: -75.565,
    phone: "3006789012",
    status: "Abierto",
    schedule: "Hasta las 8:00 p. m.",
  },
  {
    id: 7,
    name: "Distribuciones La 70",
    department: "Antioquia",
    city: "Medellín",
    address: "Circular 1 # 70 - 30",
    neighborhood: "Laureles",
    latitude: 6.244,
    longitude: -75.588,
    phone: "3007890123",
    status: "Abierto",
    schedule: "Hasta las 9:00 p. m.",
  },
  {
    id: 8,
    name: "Suerte Caribe",
    department: "Atlántico",
    city: "Barranquilla",
    address: "Cra. 53 # 76 - 120",
    neighborhood: "Alto Prado",
    latitude: 10.99,
    longitude: -74.803,
    phone: "3008901234",
    status: "Abierto",
    schedule: "Hasta las 8:00 p. m.",
  },
  {
    id: 9,
    name: "Punto de Venta Cali",
    department: "Valle del Cauca",
    city: "Cali",
    address: "Av. 6N # 24 - 40",
    neighborhood: "Granada",
    latitude: 3.454,
    longitude: -76.533,
    phone: "3009012345",
    status: "Abierto",
    schedule: "Hasta las 8:00 p. m.",
  },
];

const citiesByDepartment: Record<string, string[]> = {
  "Bogotá D.C.": ["Bogotá D.C."],
  Antioquia: ["Medellín"],
  Atlántico: ["Barranquilla"],
  "Valle del Cauca": ["Cali"],
};

function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const radius = 6371;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return radius * c;
}

export default function DistributorsPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [searchMode, setSearchMode] = useState<"location" | "name">(
    "location"
  );

  const [department, setDepartment] = useState("");
  const [city, setCity] = useState("");
  const [zone, setZone] = useState("");
  const [reference, setReference] = useState("");
  const [nameSearch, setNameSearch] = useState("");

  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const filteredDistributors = useMemo(() => {
    let results = [...distributors];

    if (department) {
      results = results.filter(
        (distributor) => distributor.department === department
      );
    }

    if (city) {
      results = results.filter(
        (distributor) => distributor.city === city
      );
    }

    if (zone.trim()) {
      const searchValue = zone.toLowerCase();

      results = results.filter((distributor) =>
        distributor.neighborhood.toLowerCase().includes(searchValue)
      );
    }

    if (reference.trim()) {
      const searchValue = reference.toLowerCase();

      results = results.filter(
        (distributor) =>
          distributor.address.toLowerCase().includes(searchValue) ||
          distributor.neighborhood.toLowerCase().includes(searchValue)
      );
    }

    if (nameSearch.trim()) {
      const searchValue = nameSearch.toLowerCase();

      results = results.filter((distributor) =>
        distributor.name.toLowerCase().includes(searchValue)
      );
    }

    if (userLocation) {
      return results
        .map((distributor) => ({
          ...distributor,
          distance: calculateDistance(
            userLocation.latitude,
            userLocation.longitude,
            distributor.latitude,
            distributor.longitude
          ),
        }))
        .sort((a, b) => a.distance - b.distance);
    }

    return results;
  }, [
    department,
    city,
    zone,
    reference,
    nameSearch,
    userLocation,
  ]);

  const displayedDistributors = hasSearched
    ? filteredDistributors
    : distributors.filter(
        (distributor) =>
          distributor.department === "Bogotá D.C."
      );

  const handleDepartmentChange = (value: string) => {
    setDepartment(value);
    setCity("");
    setUserLocation(null);
    setHasSearched(false);
  };

  const handleSearch = () => {
    setUserLocation(null);
    setLocationError("");
    setHasSearched(true);
  };

  const handleNameSearch = () => {
    setUserLocation(null);
    setLocationError("");
    setHasSearched(true);
  };

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      setLocationError(
        "Tu navegador no permite utilizar la geolocalización."
      );

      return;
    }

    setIsLocating(true);
    setLocationError("");

    /*
      Al utilizar la ubicación actual, eliminamos todos los filtros
      anteriores para buscar sobre el total de distribuidores.
    */
    setDepartment("");
    setCity("");
    setZone("");
    setReference("");
    setNameSearch("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        setHasSearched(true);
        setIsLocating(false);
      },
      () => {
        setLocationError(
          "No fue posible obtener tu ubicación. Verifica los permisos del navegador."
        );

        setIsLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  const clearSearch = () => {
    setDepartment("");
    setCity("");
    setZone("");
    setReference("");
    setNameSearch("");
    setUserLocation(null);
    setLocationError("");
    setHasSearched(false);
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) {
      return;
    }

    carouselRef.current.scrollBy({
      left: direction === "right" ? 340 : -340,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-slate-50">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#21104f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(85,48,170,0.55),transparent_30%),radial-gradient(circle_at_20%_30%,rgba(56,29,130,0.45),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">
              <MapPin className="size-4" />
              Red de distribución
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white lg:text-5xl">
              Encuentra nuestros{" "}
              <span className="text-yellow-300">
                distribuidores
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
              Encuentra los puntos de venta autorizados del Sorteo
              Extraordinario de Colombia en todo el país.
            </p>
          </div>

          <div className="relative hidden min-h-[150px] lg:block">
            <div className="absolute right-10 top-2 h-28 w-44 rounded-t-3xl border-b-8 border-[#e7bd2b] bg-[#f5d65c] shadow-2xl">
              <div className="absolute inset-x-5 top-5 h-24 rounded-t-lg bg-[#5c351f]" />

              <div className="absolute left-8 top-8 grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, index) => (
                  <span
                    key={index}
                    className="size-4 rounded-sm bg-yellow-100/80"
                  />
                ))}
              </div>

              <div className="absolute -bottom-8 left-10 right-10 flex h-10 items-center justify-center bg-[#29156f] text-sm font-extrabold text-yellow-300 shadow-lg">
                EXTRA
              </div>
            </div>

            <div className="absolute bottom-0 right-0 h-24 w-64 rotate-[-8deg] rounded-xl border border-white/30 bg-slate-100/90 shadow-xl" />

            <MapPin className="absolute bottom-8 right-20 size-24 fill-[#e52d36] text-[#c91e27] drop-shadow-2xl" />

            <div className="absolute left-10 top-10 size-3 rotate-45 bg-yellow-400" />
            <div className="absolute right-4 top-8 size-3 rotate-45 bg-yellow-400" />
            <div className="absolute bottom-4 left-20 size-3 rotate-45 bg-yellow-400" />
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSCADOR
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-6 lg:grid-cols-[1.8fr_0.9fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div>
              <h2 className="text-xl font-extrabold text-[#29156f]">
                Encuentra un distribuidor
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Busca por departamento, ciudad, ubicación o punto de
                referencia.
              </p>
            </div>

            {/* TABS */}
            <div className="mt-5 flex overflow-hidden rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => {
                  setSearchMode("location");
                  setHasSearched(false);
                  setNameSearch("");
                }}
                className={`flex-1 px-4 py-3 text-xs font-bold transition-colors ${
                  searchMode === "location"
                    ? "bg-[#29156f] text-white"
                    : "bg-white text-slate-500 hover:bg-slate-50"
                }`}
              >
                Buscar por ubicación
              </button>

              <button
                type="button"
                onClick={() => {
                  setSearchMode("name");
                  setHasSearched(false);
                  setUserLocation(null);
                }}
                className={`flex-1 px-4 py-3 text-xs font-bold transition-colors ${
                  searchMode === "name"
                    ? "bg-[#29156f] text-white"
                    : "bg-white text-slate-500 hover:bg-slate-50"
                }`}
              >
                Buscar por nombre
              </button>
            </div>

            {/* BUSQUEDA UBICACION */}
            {searchMode === "location" && (
              <>
                <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {/* DEPARTAMENTO */}
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-bold text-[#29156f]">
                      Departamento
                    </span>

                    <div className="relative">
                      <select
                        value={department}
                        onChange={(event) =>
                          handleDepartmentChange(event.target.value)
                        }
                        className="h-12 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-10 text-xs text-slate-600 outline-none transition-colors focus:border-[#29156f]"
                      >
                        <option value="">
                          Selecciona un departamento
                        </option>

                        {Object.keys(citiesByDepartment).map(
                          (item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          )
                        )}
                      </select>

                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                    </div>
                  </label>

                  {/* CIUDAD */}
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-bold text-[#29156f]">
                      Ciudad
                    </span>

                    <div className="relative">
                      <select
                        value={city}
                        onChange={(event) => {
                          setCity(event.target.value);
                          setUserLocation(null);
                          setHasSearched(false);
                        }}
                        disabled={!department}
                        className="h-12 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-10 text-xs text-slate-600 outline-none transition-colors focus:border-[#29156f] disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                      >
                        <option value="">
                          {department
                            ? "Selecciona una ciudad"
                            : "Selecciona primero un departamento"}
                        </option>

                        {department &&
                          citiesByDepartment[department]?.map(
                            (item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            )
                          )}
                      </select>

                      <ChevronDown
                        className={`pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 ${
                          department
                            ? "text-slate-400"
                            : "text-slate-300"
                        }`}
                      />
                    </div>
                  </label>

                  {/* BARRIO / ZONA */}
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-bold text-[#29156f]">
                      Barrio / Zona{" "}
                      <span className="font-normal text-slate-400">
                        (opcional)
                      </span>
                    </span>

                    <input
                      type="text"
                      value={zone}
                      onChange={(event) => {
                        setZone(event.target.value);
                        setUserLocation(null);
                        setHasSearched(false);
                      }}
                      placeholder="Ej. Chapinero, El Centro"
                      className="h-12 w-full rounded-lg border border-slate-200 px-3 text-xs text-slate-600 outline-none transition-colors placeholder:text-slate-400 focus:border-[#29156f]"
                    />
                  </label>

                  {/* PUNTO DE REFERENCIA */}
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-bold text-[#29156f]">
                      Punto de referencia{" "}
                      <span className="font-normal text-slate-400">
                        (opcional)
                      </span>
                    </span>

                    <input
                      type="text"
                      value={reference}
                      onChange={(event) => {
                        setReference(event.target.value);
                        setUserLocation(null);
                        setHasSearched(false);
                      }}
                      placeholder="Ej. Cerca al parque"
                      className="h-12 w-full rounded-lg border border-slate-200 px-3 text-xs text-slate-600 outline-none transition-colors placeholder:text-slate-400 focus:border-[#29156f]"
                    />
                  </label>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleSearch}
                    className="flex items-center justify-center gap-2 rounded-lg bg-[#29156f] px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#21104f]"
                  >
                    <Search className="size-4" />
                    Buscar distribuidores
                  </button>

                  <button
                    type="button"
                    onClick={handleUseLocation}
                    disabled={isLocating}
                    className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-[#29156f] transition-colors hover:bg-slate-50 disabled:cursor-wait disabled:opacity-60"
                  >
                    <LocateFixed className="size-4" />

                    {isLocating
                      ? "Obteniendo ubicación..."
                      : "Usar mi ubicación"}
                  </button>
                </div>
              </>
            )}

            {/* BUSQUEDA NOMBRE */}
            {searchMode === "name" && (
              <div className="mt-5">
                <label>
                  <span className="mb-2 block text-[10px] font-bold text-[#29156f]">
                    Nombre del distribuidor
                  </span>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="text"
                      value={nameSearch}
                      onChange={(event) => {
                        setNameSearch(event.target.value);
                        setUserLocation(null);
                        setHasSearched(false);
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          handleNameSearch();
                        }
                      }}
                      placeholder="Escribe el nombre del distribuidor"
                      className="min-w-0 flex-1 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-600 outline-none transition-colors placeholder:text-slate-400 focus:border-[#29156f]"
                    />

                    <button
                      type="button"
                      onClick={handleNameSearch}
                      className="flex items-center justify-center gap-2 rounded-lg bg-[#29156f] px-6 py-3 text-[11px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#21104f]"
                    >
                      <Search className="size-4" />
                      Buscar
                    </button>
                  </div>
                </label>
              </div>
            )}

            {/* ERRORES Y LIMPIAR */}
            {(locationError || hasSearched) && (
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                {locationError ? (
                  <p className="text-xs text-[#e52d36]">
                    {locationError}
                  </p>
                ) : (
                  <p className="text-xs text-slate-500">
                    {filteredDistributors.length}{" "}
                    {filteredDistributors.length === 1
                      ? "distribuidor encontrado"
                      : "distribuidores encontrados"}
                  </p>
                )}

                <button
                  type="button"
                  onClick={clearSearch}
                  className="flex items-center gap-1 text-xs font-bold text-slate-500 transition-colors hover:text-[#29156f]"
                >
                  <X className="size-3.5" />
                  Limpiar búsqueda
                </button>
              </div>
            )}
          </section>

          {/* COBERTURA */}
          <aside className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="absolute -right-12 -top-12 size-40 rounded-full bg-[#29156f]/5" />
            <div className="absolute -bottom-16 -left-16 size-40 rounded-full bg-[#f2c430]/10" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex items-start gap-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#29156f]/10 text-[#29156f]">
                    <MapPin className="size-7" />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-[#29156f]">
                      Cobertura
                    </p>

                    <p className="text-sm font-bold text-[#29156f]">
                      en todo el país
                    </p>
                  </div>
                </div>

                <p className="mt-5 max-w-xs text-xs leading-5 text-slate-500">
                  Contamos con miles de distribuidores autorizados en
                  Colombia para que encuentres tu punto de venta más
                  cercano.
                </p>

                <div className="mt-5">
                  <span className="text-3xl font-extrabold text-[#29156f]">
                    +7.000
                  </span>

                  <p className="mt-1 text-xs text-slate-500">
                    Puntos de venta
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#29156f]">
                <Store className="size-4" />
                Distribuidores autorizados
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* =====================================================
          RESULTADOS
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 pb-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-[#29156f]">
                {hasSearched
                  ? "Resultados de tu búsqueda"
                  : "Distribuidores cercanos"}
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                {userLocation
                  ? "Ordenados según la distancia desde tu ubicación actual."
                  : hasSearched
                    ? "Estos son los distribuidores que coinciden con tu búsqueda."
                    : "Mostrando puntos de venta destacados en Bogotá D.C."}
              </p>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 self-start text-xs font-bold text-[#29156f] transition-colors hover:text-[#e52d36] sm:self-auto"
            >
              Ver todos en el mapa
              <ChevronRight className="size-4" />
            </button>
          </div>

          {displayedDistributors.length > 0 ? (
            <div className="relative mt-5">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                className="absolute left-0 top-1/2 z-10 hidden size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#29156f] shadow-md transition-colors hover:bg-slate-50 lg:flex"
                aria-label="Distribuidores anteriores"
              >
                <ChevronLeft className="size-5" />
              </button>

              <div
                ref={carouselRef}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scroll-smooth scrollbar-none"
              >
                {displayedDistributors.map((distributor) => {
                  const distance =
                    "distance" in distributor
                      ? distributor.distance
                      : null;

                  return (
                    <article
                      key={distributor.id}
                      className="min-w-[270px] flex-1 snap-start rounded-xl border border-slate-200 p-4 transition-shadow hover:shadow-md sm:min-w-[300px]"
                    >
                      <div className="flex gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#29156f]/10 text-[#29156f]">
                          <MapPin className="size-5" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-sm font-extrabold text-[#29156f]">
                            {distributor.name}
                          </h3>

                          <p className="mt-1 text-[10px] leading-4 text-slate-500">
                            {distributor.address}
                            <br />
                            {distributor.city}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div>
                          {distance !== null ? (
                            <p className="text-[10px] text-slate-500">
                              A{" "}
                              <span className="font-bold text-[#29156f]">
                                {distance < 1
                                  ? `${Math.round(distance * 1000)} m`
                                  : `${distance.toFixed(1)} km`}
                              </span>{" "}
                              de tu ubicación
                            </p>
                          ) : (
                            <p className="text-[10px] text-slate-500">
                              Distribuidor autorizado
                            </p>
                          )}

                          <div className="mt-2 flex items-center gap-2">
                            <span
                              className={`size-2 rounded-full ${
                                distributor.status === "Abierto"
                                  ? "bg-[#299447]"
                                  : "bg-[#e52d36]"
                              }`}
                            />

                            <span
                              className={`text-[9px] font-bold ${
                                distributor.status === "Abierto"
                                  ? "text-[#299447]"
                                  : "text-[#e52d36]"
                              }`}
                            >
                              {distributor.status}
                            </span>
                          </div>
                        </div>

                        <a
                          href={`tel:${distributor.phone}`}
                          className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-[#29156f] transition-colors hover:bg-[#29156f] hover:text-white"
                          aria-label={`Llamar a ${distributor.name}`}
                        >
                          <Phone className="size-4" />
                        </a>
                      </div>

                      <p className="mt-3 border-t border-slate-100 pt-3 text-[9px] text-slate-400">
                        {distributor.schedule}
                      </p>
                    </article>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                className="absolute right-0 top-1/2 z-10 hidden size-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#29156f] shadow-md transition-colors hover:bg-slate-50 lg:flex"
                aria-label="Siguientes distribuidores"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-14 text-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <Search className="size-6" />
              </div>

              <h3 className="mt-4 text-base font-extrabold text-[#29156f]">
                No encontramos distribuidores
              </h3>

              <p className="mt-2 max-w-md text-xs leading-5 text-slate-500">
                Intenta realizar la búsqueda con otros criterios o
                utiliza tu ubicación actual.
              </p>

              <button
                type="button"
                onClick={clearSearch}
                className="mt-5 rounded-lg bg-[#29156f] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#21104f]"
              >
                Limpiar búsqueda
              </button>
            </div>
          )}

          <div className="mt-5 flex justify-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              className="flex size-9 items-center justify-center rounded-lg border border-slate-200 text-[#29156f]"
              aria-label="Anterior"
            >
              <ChevronLeft className="size-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              className="flex size-9 items-center justify-center rounded-lg border border-slate-200 text-[#29156f]"
              aria-label="Siguiente"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUIERES SER DISTRIBUIDOR
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#29156f] text-white">
              <Building2 className="size-6" />
            </div>

            <div>
              <h2 className="text-base font-extrabold text-[#29156f]">
                ¿Quieres ser distribuidor?
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Únete a nuestra red de distribuidores autorizados y haz
                parte del EXTRA.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-[#29156f] transition-colors hover:bg-slate-50"
          >
            Más información
            <ChevronRight className="size-4" />
          </button>
        </div>
      </section>
    </main>
  );
}