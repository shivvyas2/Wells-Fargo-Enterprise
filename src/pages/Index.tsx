import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, TrendingUp, BarChart3, Bell, CreditCard, Brain, CheckCircle2, Lock, FileCheck, ArrowRight, Target, Zap, Award, Database, Clock, Users } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import HeroBackground from "@/components/HeroBackground";

// Animated counter hook
function useCountUp(target: number, isInView: boolean, suffix = "") {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, isInView]);
  return count + suffix;
}

function MetricCard({ value, label, suffix = "", delay = 0 }: { value: number; label: string; suffix?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animatedValue = useCountUp(value, isInView, suffix);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center p-5 md:p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{animatedValue}</div>
      <div className="text-xs md:text-sm text-white/90 text-center font-medium leading-tight">{label}</div>
    </motion.div>
  );
}

function Index() {
  return (
    <PageLayout>
      {/* ==================== HERO SECTION ==================== */}
      <HeroBackground>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 w-full mx-auto">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start flex-1 lg:flex-[0.55] xl:flex-[0.5] w-full lg:w-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs sm:text-sm font-medium mb-5 sm:mb-6"
            >
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2.5} />
              Enterprise Credit Intelligence • Powered by LUMIQ AI
            </motion.div>

            <div className="text-white/80 text-[10px] sm:text-xs font-bold tracking-wider mb-4 sm:mb-5 uppercase">
              PILOT-READY FOR WELLS FARGO'S 3.3M+ SMB CUSTOMERS
            </div>

            <h1 className="font-display text-[32px] sm:text-[40px] md:text-[44px] lg:text-[52px] xl:text-[68px] 2xl:text-[76px] font-bold mb-6 sm:mb-8 leading-[1.1] text-white">
              Real-Time Business Credit Intelligence for Wells Fargo
            </h1>

            <p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-white/95 mb-4 sm:mb-5 leading-relaxed font-semibold max-w-2xl">
              Unify card, deposit, and bureau data into <span className="font-bold text-white">a single business credit view</span>—with risk scoring, pre-qualification, and portfolio intelligence securely integrated into Wells Fargo's underwriting workflow.
            </p>

            <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg text-white/80 mb-8 sm:mb-12 leading-relaxed max-w-2xl">
              Data stays inside Wells Fargo's environment—no new workflows, no external data movement.
            </p>

            {/* Single Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 sm:mb-10"
            >
              <a href="/contact">
                <Button size="lg" className="bg-[#FFB81C] hover:bg-[#FFB81C]/90 text-[#2B2B2B] font-semibold text-base sm:text-lg px-6 py-5 sm:px-10 sm:py-7 h-auto shadow-xl hover:shadow-2xl transition-all duration-300">
                  See Your Portfolio Through LUMIQ AI
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </a>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 w-full max-w-2xl"
            >
              <MetricCard value={25} label="Faster underwriting decisions" suffix="%" delay={0.5} />
              <MetricCard value={35} label="Reduction in manual reviews" suffix="%" delay={0.6} />
              <MetricCard value={100} label="Compliance-ready audit trail" suffix="%" delay={0.7} />
            </motion.div>
          </div>

          {/* Right Column - Phone Mockup Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 w-full lg:w-auto lg:flex-[0.45] xl:flex-[0.5] flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src="/Phone-Mockups/Hero_mockup.png"
                alt="Wells Fargo Business Credit Intelligence Mobile App"
                className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* ==================== VALUE & BENEFITS SECTION ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-[36px] md:text-[48px] font-bold mb-4 text-black">
              What This Delivers for Wells Fargo
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              Operational, regulatory, and revenue outcomes built specifically for Wells Fargo's SMB portfolio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl xl:max-w-[1400px] 2xl:max-w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                    <Clock className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">Faster Underwriting</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Reduce manual review time by 35%. Automated risk scoring accelerates pre-qualification from days to minutes.
                  </p>
                  <p className="text-xs text-gray-600 italic mb-2">
                    From 3–5 days → 10 minutes (based on A/B pilot results in comparable regional banks).
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    +20% uplift in decision accuracy.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                    <Shield className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">Better Risk Visibility</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Unified view of owner FICO + business credit scores. Detect risk signals earlier across your 3.3M SMB portfolio.
                  </p>
                  <p className="text-xs text-gray-600 italic mb-2">
                    Early warning detection 45–60 days sooner than traditional monitoring (TransUnion SMB credit study).
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    +18% improvement in risk tier accuracy.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                    <TrendingUp className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">Cross-Sell Opportunities</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    12% lift in qualified business card applications. Targeted product recommendations drive credit line expansions.
                  </p>
                  <p className="text-xs text-gray-600 italic mb-2">
                    Pilot cohorts showed 10–15% conversion lift when credit visibility was provided vs. control groups.
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    3.3M SMB customers provide large recommendation accuracy feedback loops.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                    <BarChart3 className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">Portfolio Health Monitoring</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Real-time early warning signals on credit deterioration. Proactive risk management across segments and industries.
                  </p>
                  <p className="text-xs text-gray-600 italic mb-2">
                    Institutions using unified monitoring reduced portfolio loss rates by 18–25% over 18-month periods.
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    Early risk signals surface 45–60 days sooner vs. manual review.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                    <FileCheck className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">Compliance Transparency</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Full audit trail with explainable decisioning. ECOA, FCRA, GLBA-aligned with data lineage tracking.
                  </p>
                  <p className="text-xs text-gray-600 italic mb-2">
                    100% audit-ready documentation with real-time explainability for regulatory exams and adverse action reporting.
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    Reduces adverse action turnaround time by 30–40%.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                    <Award className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">Revenue Growth</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Conservative $4M+ annual benefit from business card origination lift alone. Stage 2 expands to loans and LOCs.
                  </p>
                  <p className="text-xs text-gray-600 italic mb-2">
                    Based on 12% application lift × 3.3M customer base × 2% take-rate × $500 avg. annual revenue per card.
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    Expansion into LOCs and term loans increases revenue impact by 2–3×.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <p className="text-xs text-gray-700">
              <span className="font-medium text-black">Sources:</span> Regional bank pilot analysis (2024); TransUnion SMB Credit Study (2023); LUMIQ internal model testing; Industry-regulatory benchmarks (CFPB/ECOA/GLBA).
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== WHY NOW SECTION ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Market Context
            </div>
            <h2 className="font-display text-[36px] md:text-[48px] font-bold mb-4 text-black">
              Why This Matters Now
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              The competitive landscape, regulatory environment, and SMB expectations have fundamentally shifted.
            </p>
          </motion.div>

          <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-full mx-auto grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Competitive Pressure</CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <p className="text-sm text-gray-700">
                      30% of SMBs now use fintech credit tools—digital-first lenders offer integrated business credit visibility as standard.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <p className="text-sm text-gray-700">
                      Regional banks and challengers are actively deploying similar capabilities—timing matters for first-mover advantage.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <p className="text-sm text-gray-700">
                      SMB customers expect consumer-grade UX with real-time credit insights—table stakes for retention.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Cost of Inaction</CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0" />
                    <p className="text-sm text-gray-700">
                      Slower approvals mean lost business—SMBs choose lenders who move fast.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0" />
                    <p className="text-sm text-gray-700">
                      Blind risk exposure across portfolio—delayed detection of credit deterioration increases loss patterns.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0" />
                    <p className="text-sm text-gray-700">
                      Missed growth and cross-sell opportunities—every quarter without this capability is revenue left on the table.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto"
          >
            <Card className="bg-white">
              <CardContent className="p-6 sm:p-8 text-center">
                <p className="text-base text-gray-700 leading-relaxed">
                  <span className="font-semibold text-black">Market timing insight:</span> Regional competitors are evaluating similar solutions. SMB customers with access to integrated credit insights show 25-30% higher product engagement and lower attrition to fintech alternatives. Early deployment creates defensible competitive advantage.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto mt-12"
          >
            <Card className="bg-white">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg font-bold text-black mb-3 text-center">
                  Proven consumer behavior shift—now ready for business credit.
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <p>71% behavior change rate using consumer Credit Close-Up tools (TransUnion study).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <p>1 in 5 customers achieved 40+ point score improvements.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <p>Wells Fargo can extend the same proven mechanics to its 3.3M+ SMB customers.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS (3-STEP) ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              <Database className="w-4 h-4" strokeWidth={2.5} />
              How It Works
            </div>
            <h2 className="font-display text-[36px] md:text-[48px] lg:text-[56px] font-bold mb-4 text-black">
              Simple 3-step journey
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              A seamless process from data ingestion to actionable insights—all within Wells Fargo's secure environment.
            </p>
          </motion.div>

          {/* Three Steps - Horizontal Layout */}
          <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-start">
              {/* STEP 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative flex flex-col items-center px-4"
              >
                {/* Number Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 dark:from-primary dark:to-primary/90 text-white flex items-center justify-center font-bold text-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                  1
                </div>
                
                {/* Phone Mockup */}
                <div className="w-full mb-6 mt-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative flex justify-center"
                  >
                    <img
                      src="/Phone-Mockups/step 1.png"
                      alt="Step 1: Data Ingestion & Consolidation"
                      className="w-full h-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] object-contain drop-shadow-2xl rounded-lg"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center w-full px-2">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                    Data Ingestion & Consolidation
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Ingest card, deposit, and bureau data (owner FICO + business scores) → produce a unified SMB profile with full data lineage inside Wells Fargo's environment.
                  </p>
                </div>

                {/* Arrow to Step 2 */}
                <div className="hidden md:block absolute top-[15%] -right-5 lg:-right-6 xl:-right-8 z-10">
                  <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-primary/60" />
                </div>
              </motion.div>

              {/* STEP 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative flex flex-col items-center px-4"
              >
                {/* Number Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 dark:from-secondary dark:to-secondary/90 text-white flex items-center justify-center font-bold text-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                  2
                </div>
                
                {/* Phone Mockup */}
                <div className="w-full mb-6 mt-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative flex justify-center"
                  >
                    <img
                      src="/Phone-Mockups/step 2.png"
                      alt="Step 2: Intelligent Scoring & Signal Generation"
                      className="w-full h-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] object-contain drop-shadow-2xl rounded-lg"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center w-full px-2">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                    Intelligent Scoring & Signal Generation
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    AI-powered risk models analyze credit health, product fit, and early warning flags → generate explainable recommendations aligned with Wells Fargo policy overlays.
                  </p>
                </div>

                {/* Arrow to Step 3 */}
                <div className="hidden md:block absolute top-[15%] -right-5 lg:-right-6 xl:-right-8 z-10">
                  <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-secondary/60" />
                </div>
              </motion.div>

              {/* STEP 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex flex-col items-center px-4"
              >
                {/* Number Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 dark:from-primary dark:to-primary/90 text-white flex items-center justify-center font-bold text-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                  3
                </div>
                
                {/* Phone Mockup */}
                <div className="w-full mb-6 mt-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative flex justify-center"
                  >
                    <img
                      src="/Phone-Mockups/step 3.png"
                      alt="Step 3: Insights & Action"
                      className="w-full h-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] object-contain drop-shadow-2xl rounded-lg"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center w-full px-2">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                    Insights & Action
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Business owners see dual scores and pre-qualified offers in the banking app → Wells Fargo gets portfolio dashboards, underwriter queues, and compliance audit trails.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto mt-8 text-center"
          >
            <p className="text-sm text-gray-600 italic">
              Integration can start in a read-only "shadow mode" before any production decisioning is changed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== TRUST, SECURITY & COMPLIANCE ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-[36px] md:text-[48px] font-bold mb-4 text-black">
              Enterprise-Grade Security & Compliance
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-2">
              Built for banks—designed for audit readiness, data governance, and regulatory alignment.
            </p>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Designed so Wells Fargo's risk, compliance, and IT teams can say "yes" without rewriting existing controls.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl xl:max-w-[1400px] 2xl:max-w-full mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                    <Lock className="w-7 h-7 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-black">Data Security</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    SOC 2-aligned infrastructure. Encryption at rest and in transit. Role-based access controls. PII minimization.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                    <Shield className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-black">Regulatory Alignment</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ECOA • FCRA • GLBA • UDAP compliant. PATRIOT Act KYC/KYB screening. Adverse action reporting.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                    <FileCheck className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-black">Audit Readiness</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Full data lineage tracking. Explainable decisioning. Model governance with policy versioning. 100% decision traceability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" strokeWidth={2.5} />
              <span className="font-semibold text-black">SOC 2</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-secondary" strokeWidth={2.5} />
              <span className="font-semibold text-black">ISO 27001</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-secondary" strokeWidth={2.5} />
              <span className="font-semibold text-black">FCRA-aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" strokeWidth={2.5} />
              <span className="font-semibold text-black">Data Lineage Verified</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== IMPACT METRICS ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-[36px] md:text-[48px] font-bold mb-4 text-black">
              Projected Impact
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              Conservative estimates based on controlled pilots and internal modeling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl xl:max-w-[1400px] 2xl:max-w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">+12%</div>
                  <p className="text-sm font-semibold text-black mb-2">Card Application Lift</p>
                  <p className="text-xs text-gray-600">~7,900 additional business card applications annually</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">25%</div>
                  <p className="text-sm font-semibold text-black mb-2">Faster Decisioning</p>
                  <p className="text-xs text-gray-600">Automated scoring reduces time from days to minutes</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">–35%</div>
                  <p className="text-sm font-semibold text-black mb-2">Manual Reviews</p>
                  <p className="text-xs text-gray-600">AI-powered scoring eliminates low-value underwriting tasks</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">$4M+</div>
                  <p className="text-sm font-semibold text-black mb-2">Annual Revenue</p>
                  <p className="text-xs text-gray-700 mb-1">First-year projection from card origination lift alone</p>
                  <p className="text-xs text-gray-600 italic">Business cards only. LOC and term loans excluded from this estimate.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto mt-12"
          >
            <Card className="bg-white">
              <CardContent className="p-6 sm:p-8">
                <p className="text-sm text-gray-700 text-center leading-relaxed">
                  <span className="font-semibold text-black">Methodology:</span> Impact projections based on internal modeling and A/B pilot results from comparable financial institutions. Conservative assumptions applied. Stage 2 expansion to business loans and lines of credit expected to deliver additional uplift.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ==================== CALL TO ACTION ==================== */}
      <section id="cta" className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto"
          >
            <h2 className="font-display text-[40px] md:text-[56px] font-bold mb-6 text-white leading-[1.15]">
              See Your Portfolio Through LUMIQ AI
            </h2>
            <p className="text-xl text-white/95 mb-10 leading-relaxed">
              20-minute executive review. Sample output on your SMB segments. Integration, security, and pilot structure covered in one session.
            </p>
            
            <a href="/contact">
              <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-bold text-xl px-12 py-8 h-auto mb-6 shadow-xl">
                Request Executive Demo
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </a>

            <p className="text-sm text-white/70 max-w-2xl mx-auto">
              Vendor-ready integration. No disruption to existing underwriting pipeline. Data stays fully encrypted. 6–8 week pilot timeline from kickoff to live deployment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== FAQ / TECHNICAL DETAILS ==================== */}
      <section className="py-16 bg-white border-t border-border">
        <div className="mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-black">Technical Specifications & FAQ</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Data Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    Owner FICO® from Experian/Equifax/TransUnion. Business credit from FICO SBSS, Experian FSR, D&B Intelliscore. Wells Fargo internal relationship data.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Integration Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    RESTful API with sandbox testing environment. Zero workflow disruption. Wells-hosted or vendor VPC deployment options.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Score Refresh</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    Real-time on login with monthly scheduled refreshes. Proactive alerts for material credit events.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Deployment Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    6–8 weeks from kickoff to live pilot. Sandbox testing weeks 0-2, A/B pilot weeks 3-8, scale decision by week 12.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Access Controls</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    Business owners see their dual scores. Bankers see segmentation dashboards and portfolio insights with proper authorization.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Pilot Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    A/B testing with control groups. Tracks conversion lift, approval-rate delta, manual review reduction, loss patterns—full audit trail.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 space-y-6">
              <h4 className="text-lg font-bold text-center text-black mb-6">Frequently Asked Questions</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Where does the data live?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-600">
                      All data remains within Wells Fargo-controlled infrastructure. LUMIQ AI models can be deployed into a Wells-hosted environment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Does this change our existing credit policy?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-600">
                      No. Models are configured to reflect Wells Fargo's current policies; outputs appear as recommendations and can be rolled out in stages.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Who owns ongoing model governance?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-600">
                      Wells Fargo retains control over model approval, monitoring, and override thresholds. LUMIQ AI provides tools and documentation to support governance.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Index;
