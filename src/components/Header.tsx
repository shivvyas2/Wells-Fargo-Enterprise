import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-background/80 dark:bg-card/90 backdrop-blur-2xl rounded-full border border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] px-4 md:px-8 py-3 md:py-4 flex justify-between items-center transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.16)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.6)]">
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-sm shadow-lg group-hover:scale-105 transition-transform">
            WF
          </div>
          <div className="hidden md:block">
            <div className="font-semibold text-sm md:text-base tracking-tight leading-tight text-foreground group-hover:text-primary transition-colors">
              Wells Fargo Business Credit Close-Up
            </div>
            <div className="text-[10px] text-muted-foreground">Powered by LUMIQ AI</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link to="/how-it-works" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-all">
            How It Works
          </Link>
          <Link to="/case-study" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-all">
            Case Study
          </Link>
          <Link to="/pilot" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-all">
            Pilot
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a href="/#cta">
            <Button variant="refined" size="sm">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
