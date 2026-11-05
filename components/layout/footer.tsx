export function Footer() {
  return (
    <footer className="bg-[#29156f] text-white">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <span className="text-[9px] font-semibold text-white/70">
            Entidades aliadas y vigilantes
          </span>

          <span className="text-[10px] font-bold text-white/90">
            GOV.CO
          </span>

          <span className="hidden text-[10px] font-bold text-white/90 sm:inline">
            SUPERINTENDENCIA
          </span>

          <span className="hidden text-[10px] font-bold text-white/90 md:inline">
            CNJSA
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[9px] text-white/60">
            Síguenos
          </span>

          <span className="text-[10px] font-bold">f</span>
          <span className="text-[10px] font-bold">X</span>
          <span className="text-[10px] font-bold">◎</span>
          <span className="text-[10px] font-bold">▶</span>
        </div>
      </div>
    </footer>
  );
}