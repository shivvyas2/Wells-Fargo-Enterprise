import { ReactNode } from "react";
import { motion, useScroll } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-white min-h-screen text-[#070707] font-sans relative antialiased">
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed left-0 top-0 right-0 h-0.5 z-50 origin-left"
        style={{
          scaleX: scrollYProgress,
          background: 'linear-gradient(to right, #0b2d78, #1146f2)',
        }}
      />

      <Header />
      
      <main className="relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}
