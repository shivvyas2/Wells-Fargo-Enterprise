import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/case-study", label: "Case Study" },
    { to: "/pilot", label: "Pilot" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-background/80 dark:bg-card/90 backdrop-blur-2xl rounded-full border border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] px-4 md:px-6 py-3 md:py-4 flex justify-between items-center transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.16)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.6)]">
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 md:gap-2.5">
          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:text-white"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white text-black">
              <SheetHeader>
                <SheetTitle className="text-left text-black">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-black hover:bg-gray-100 rounded-lg transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full"
                  >
                    <Button variant="refined" size="default" className="w-full">
                      Contact Us
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Contact Button */}
          <Link to="/contact" className="hidden lg:block">
            <Button variant="refined" size="sm">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
