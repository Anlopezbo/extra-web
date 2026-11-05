"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      aria-label="Volver al inicio de la página"
      className="fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full bg-extra-blue text-white shadow-lg transition-all duration-200 hover:bg-extra-blue-dark hover:shadow-xl focus-visible:outline-none"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}