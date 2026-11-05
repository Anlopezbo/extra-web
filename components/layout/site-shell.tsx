import { ReactNode } from "react";

import { Topbar } from "@/components/layout/topbar";
import { Header } from "@/components/layout/header";
import { MainNav } from "@/components/layout/main-nav";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/common/back-to-top";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Topbar />
      <Header />
      <MainNav />

      <main>{children}</main>

      <Footer />
      <BackToTop />
    </div>
  );
}