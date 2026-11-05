import {
  Bell,
  CreditCard,
  RotateCcw,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Container } from "@/components/common/container";

export function Header() {
  return (
    <header className="bg-white">
      {/* =========================================================
          UTILITY BAR
      ========================================================= */}
      <div className="bg-[#29156f] text-white">
        <Container>
          <div className="flex h-8 items-center justify-end gap-5 text-[9px]">
            <button
              type="button"
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-white/90 transition-colors hover:text-yellow-300"
            >
              <ShoppingCart className="size-3.5" />
              <span>Compra en línea</span>
            </button>

            <button
              type="button"
              className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap text-white/90 transition-colors hover:text-yellow-300 sm:flex"
            >
              <RotateCcw className="size-3.5" />
              <span>Devoluciones web</span>
            </button>

            <button
              type="button"
              className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap text-white/90 transition-colors hover:text-yellow-300 md:flex"
            >
              <CreditCard className="size-3.5" />
              <span>Pagos distribuidores</span>
            </button>

            <button
              type="button"
              className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap text-white/90 transition-colors hover:text-yellow-300 lg:flex"
            >
              <Users className="size-3.5" />
              <span>Distribuidores</span>
            </button>

            <button
              type="button"
              aria-label="Buscar"
              className="shrink-0 text-white/90 transition-colors hover:text-yellow-300"
            >
              <Search className="size-4" />
            </button>

            <button
              type="button"
              aria-label="Notificaciones"
              className="shrink-0 text-white/90 transition-colors hover:text-yellow-300"
            >
              <Bell className="size-4" />
            </button>
          </div>
        </Container>
      </div>
    </header>
  );
}