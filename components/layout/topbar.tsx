import { Container } from "@/components/common/container";

export function Topbar() {
  return (
    <div className="bg-extra-blue-deep text-white">
      <Container>
        <div className="flex min-h-9 items-center justify-between gap-4 text-xs md:text-sm">
          <p className="truncate text-white/80">
            Sorteo Extraordinario de Colombia
          </p>

          <div className="hidden items-center gap-5 md:flex">
            <button
              type="button"
              className="text-white/75 transition-colors hover:text-white"
            >
              Accesibilidad
            </button>

            <span
              aria-hidden="true"
              className="h-3.5 w-px bg-white/20"
            />

            <button
              type="button"
              className="text-white/75 transition-colors hover:text-white"
            >
              Mapa del sitio
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}