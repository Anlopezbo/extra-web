import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";

import { navigation } from "@/data/navigation";
import { Container } from "@/components/common/container";
import { NavMenu } from "@/components/navigation/nav-menu";

export function MainNav() {
  const mainNavigation = navigation.filter(
    (item) => item.href !== "/mi-extra"
  );

  return (
    <nav className="relative z-20 hidden border-b border-slate-200 bg-white md:block">
      <Container>
        <div className="relative flex h-[88px] items-center gap-5 overflow-visible">
          {/* =====================================================
              LOGO
          ===================================================== */}
          <Link
            href="/"
            aria-label="Extra de Colombia - Inicio"
            className="relative z-30 flex h-[88px] w-[92px] shrink-0 overflow-visible"
          >
            <Image
              src="/images/brand/extra-logo.png"
              alt="Extra de Colombia"
              width={180}
              height={140}
              priority
              className="
                absolute
                left-0
                top-1
                h-[118px]
                w-auto
                max-w-none
                object-contain
              "
            />
          </Link>

          {/* =====================================================
              SEPARADOR
          ===================================================== */}
          <div
            aria-hidden="true"
            className="h-9 w-px shrink-0 bg-slate-200"
          />

          {/* =====================================================
              NAVEGACIÓN PRINCIPAL
          ===================================================== */}
          <div className="min-w-0 flex-1">
            <NavMenu items={mainNavigation} />
          </div>

          {/* =====================================================
              MI EXTRA
          ===================================================== */}
          <Link
            href="/mi-extra"
            className="
              flex
              shrink-0
              items-center
              gap-2
              whitespace-nowrap
              rounded-md
              bg-[#e52d36]
              px-4
              py-2.5
              text-[10px]
              font-extrabold
              uppercase
              tracking-wide
              text-white
              shadow-sm
              transition-all
              hover:bg-[#d6252f]
              hover:shadow-md
            "
          >
            <Users className="size-3.5 shrink-0" />
            <span>Mi Extra</span>
          </Link>
        </div>
      </Container>
    </nav>
  );
}