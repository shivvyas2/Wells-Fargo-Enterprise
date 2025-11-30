import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutionLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
];

const resourceLinks = [
  { label: "Case Study", href: "/case-study" },
  { label: "Pilot", href: "/pilot" },
  { label: "Contact", href: "/contact" },
];

const policyLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Security", href: "/security" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black border-t border-gray-800">
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-16 pb-8 space-y-12">
        <div className="flex flex-col lg:flex-row gap-12 border-b border-gray-800 pb-12">
          <div className="flex-1 space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-gray-200">WELLS FARGO BUSINESS CREDIT CLOSE-UP</p>
            <p className="text-3xl md:text-4xl font-bold leading-tight max-w-xl text-white">
              Business-credit journeys grounded in proven consumer-scale outcomes.
            </p>
            <p className="text-xs text-gray-200 mt-4 italic">Designed for Wells Fargo Business Banking — Powered by FuteurCredX / LUMIQ AI</p>
            <p className="text-gray-200 max-w-lg">
              Designed for Wells Fargo Business Banking—deploy enterprise-grade underwriting workflows, explainable decisions, and measured uptake across cards, LOC, and term lending without leaving your existing controls.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm uppercase tracking-[0.2em] text-gray-200 mb-4">Solutions</h4>
              <ul className="space-y-3 text-gray-200 text-sm">
                {solutionLinks.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="hover:text-white transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-[0.2em] text-gray-200 mb-4">Resources</h4>
              <ul className="space-y-3 text-gray-200 text-sm">
                {resourceLinks.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="hover:text-white transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-200 mb-3">Ready to pilot</p>
            <p className="text-lg font-semibold text-white">Start a 6-week pilot with pre-agreed success metrics.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="/contact">
              <Button variant="solverSecondary" className="gap-3">
                Book Pilot Review
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </Button>
            </a>
            <Link to="/pilot">
              <Button variant="outline" className="border-gray-700 hover:bg-gray-900 text-white">
                Learn About Pilot
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-gray-200">
            <span>© {new Date().getFullYear()} Wells Fargo Business Credit Close-Up. All rights reserved.</span>
            <div className="flex flex-wrap gap-4">
              {policyLinks.map((item) => (
                <Link key={item.label} to={item.href} className="hover:text-white transition">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-xs text-gray-300 italic">
            For internal Wells Fargo evaluation only. LUMIQ AI is a third-party provider. No affiliation or endorsement implied.
          </div>
        </div>
      </div>
    </footer>
  );
}

