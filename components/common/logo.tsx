import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Extra de Colombia - Inicio"
      className="relative block h-full w-full"
    >
      <Image
        src="/images/brand/extra-logo.png"
        alt="Extra de Colombia"
        width={110}
        height={110}
        priority
        className="
          absolute
          left-0
          top-1/2
          z-30
          h-[108px]
          w-auto
          max-w-none
          -translate-y-1/2
          object-contain
        "
      />
    </Link>
  );
}