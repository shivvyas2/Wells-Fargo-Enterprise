import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="bg-white dark:bg-[#070707] min-h-screen text-[#070707] dark:text-white font-sans relative antialiased transition-colors duration-500">
      <Header />
      
      <main className="relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}
