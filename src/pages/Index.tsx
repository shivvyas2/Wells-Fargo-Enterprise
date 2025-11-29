import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, TrendingUp, BarChart3, Bell, CreditCard, Brain, CheckCircle2, Lock, FileCheck, ArrowRight, Target, Zap, Award } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{animatedValue}</div>
      <div className="text-sm text-white/90 text-center font-medium">{label}</div>
    </motion.div>
  );
}

function Index() {
  return (
    <PageLayout>
      {/* PHASE 2: Hero Section */}
      <HeroBackground>
        <div className="flex flex-col items-start max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-8"
          >
            <Shield className="w-4 h-4" />
            Powered by LUMIQ AI
          </motion.div>

          <h1 className="font-display text-[48px] md:text-[64px] lg:text-[80px] font-bold mb-4 leading-[1.1] text-white">
            Your Business Credit, Up Close.
          </h1>

          <p className="text-sm text-white/70 mb-6 font-medium">
            Supports: Experian Intelliscore Plus • FICO SBSS • FSR (Financial Stability Risk)
          </p>

          <p className="text-xl md:text-2xl text-white/95 mb-4 max-w-3xl leading-relaxed font-semibold">
            The Business Credit Journey—Built for Wells Fargo.
          </p>

          <p className="text-lg text-white/85 mb-10 max-w-2xl leading-relaxed">
            Real-time business-credit signals, pre-qualification routing, and explainable credit decisions—inside Wells Fargo's risk appetite.
          </p>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="/#cta">
              <Button size="lg" className="bg-[#FFB81C] hover:bg-[#FFB81C]/90 text-[#2B2B2B] font-semibold text-lg px-8 py-6 h-auto">
                Request Pilot Review – 20 Minutes
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="/demo">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 h-auto">
                Download One-Pager
              </Button>
            </a>
          </motion.div>

          {/* Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl"
          >
            <MetricCard value={12} label="Lift in product conversion (estimated)" suffix="%" delay={0.5} />
            <MetricCard value={30} label="Faster Prequalification decisions" suffix="%" delay={0.6} />
            <MetricCard value={100} label="Audit-ready lineage" suffix="%" delay={0.7} />
          </motion.div>
        </div>
      </HeroBackground>

      {/* Supported Scores & Data Section */}
      <section className="py-8 bg-muted/50 border-b border-border">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <p className="text-sm md:text-base text-muted-foreground">
              <span className="font-semibold text-foreground">Supported Scores & Data:</span> Owner FICO® (Experian / Equifax / TransUnion) • Business Credit Score (via SBFE: Experian Business, D&B, Equifax) • Relationship & Transactional Data
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pilot Timeline Banner */}
      <section className="py-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-b border-border">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h3 className="text-center text-xl md:text-2xl font-bold text-foreground mb-8">Pilot Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all">
                <div className="text-3xl font-bold text-primary mb-2">Week 0-2</div>
                <div className="text-sm text-muted-foreground">Setup</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:border-secondary/50 transition-all">
                <div className="text-3xl font-bold text-secondary mb-2">Week 3-8</div>
                <div className="text-sm text-muted-foreground">Live A/B Pilot</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all">
                <div className="text-3xl font-bold text-primary mb-2">Week 9-12</div>
                <div className="text-sm text-muted-foreground">Scale Decision</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center p-6 rounded-[20px] bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] hover:border-primary/40 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">+10–15%</div>
                <div className="text-sm text-muted-foreground">Qualified Application Lift</div>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-[20px] bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] hover:border-secondary/40 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">20–35%</div>
                <div className="text-sm text-muted-foreground">Faster Credit Decisioning</div>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-[20px] bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] hover:border-primary/40 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Audit Trail & Explainability</div>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-[20px] bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] hover:border-secondary/40 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">100%</div>
                <div className="text-sm text-muted-foreground">WF compliance compatible</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Flow Diagram */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-[32px] md:text-[44px] font-bold mb-4 text-foreground">
              The Product Flow
            </h2>
            <p className="text-lg text-muted-foreground">Four steps from insight to conversion</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                step: "1",
                title: "View Business Profile",
                desc: "Score models + account signals pulled on login.",
                icon: BarChart3,
                color: "primary"
              },
              {
                step: "2",
                title: "Get Pre-Qualified Offers",
                desc: "Cards (Phase 1) → LOC/Term Loans (Phase 2).",
                icon: Target,
                color: "secondary"
              },
              {
                step: "3",
                title: "Apply in 1 Tap",
                desc: "Push into Wells Fargo's existing credit funnel.",
                icon: Zap,
                color: "primary"
              },
              {
                step: "4",
                title: "Book Account + Track Results",
                desc: "All logged in dashboard for monitoring + conversions.",
                icon: Award,
                color: "secondary"
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="h-full bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] hover:border-primary/40 rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                    <CardContent className="pt-8 pb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-4xl font-bold text-primary/30">{item.step}</div>
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PHASE 3: Context Section — "Why It Matters" */}
      <section className="py-16 md:py-24 bg-background transition-colors duration-500">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-[36px] md:text-[52px] font-bold mb-6 text-foreground leading-[1.15]">
              Wells Fargo revolutionized consumer credit transparency.<br />
              <span className="text-primary">Now we're doing the same for business.</span>
            </h2>
            <div className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed space-y-3">
              <p><strong className="text-foreground">• Millions</strong> of customers use Wells Fargo Credit Close-Up to understand and improve their credit.</p>
              <p><strong className="text-foreground">• Drove</strong> stronger engagement, improved credit outcomes, and greater trust.</p>
              <p><strong className="text-foreground">• Business owners</strong> deserve the same clarity — and that's exactly what LUMIQ AI delivers.</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Consumer Credit Close-Up */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="bg-muted rounded-2xl p-8 mb-6 aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <CreditCard className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Credit Close-Up Consumer Interface</p>
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2 text-foreground">Personal Credit Close-Up</h3>
              <p className="text-muted-foreground">30M+ consumers monitoring FICO scores and improving credit health</p>
            </motion.div>

            {/* LUMIQ AI Business Version */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-6 aspect-[4/3] flex items-center justify-center border-2 border-primary/30">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">LUMIQ AI Business Interface</p>
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2 text-foreground">Business Credit Close-Up</h3>
              <p className="text-muted-foreground">Personal FICO + Business Intelliscore in one unified dashboard</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
              From Personal Credit Close-Up → to <span className="text-primary">Business Credit Close-Up</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance + Risk Module */}
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-[32px] md:text-[44px] font-bold mb-4 text-foreground">
              Enterprise-Grade Compliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built to meet Wells Fargo Risk & Compliance standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/40">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileCheck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">Audit Trail</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">100% logged:</strong> inputs • transformations • outputs • model versions.
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
              <Card className="h-full bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 hover:border-secondary/40">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">Explainability</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Clear reasons for all model overlays + adverse action codes.
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
              <Card className="h-full bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/40">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">Data Security</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    SOC2-aligned • Encryption • PII minimization • Access controls.
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
              <Card className="h-full bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 hover:border-secondary/40">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">Regulatory Alignment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    ECOA • FCRA • GLBA • UDAP • CRA-friendly.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHASE 4: Feature Modules (LUMIQ AI Experience) */}
      <section className="py-16 md:py-24 bg-muted/30 transition-colors duration-500">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-[36px] md:text-[52px] font-bold mb-6 text-foreground leading-[1.15]">
              The LUMIQ AI Experience
            </h2>
            <div className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto space-y-2">
              <p><strong className="text-foreground">• 5 powerful features</strong> that transform business credit management</p>
              <p><strong className="text-foreground">• Real-time insights</strong> with actionable recommendations</p>
              <p><strong className="text-foreground">• Seamlessly embedded</strong> in Wells Fargo Business Banking</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Feature 1: Dual Credit Insights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer hover:border-primary/40">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <BarChart3 className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">Dual Credit Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Personal FICO + Business Credit Intelliscore, together at a glance. Dynamic score gauges with historical trend lines.</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 2: Score Intelligence */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer hover:border-primary/40">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Brain className="w-7 h-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-bold">Score Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">AI pinpoints what helps or hurts your credit — instantly. Clear, actionable insights in business-friendly language.</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 3: Alerts & Monitoring */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer hover:border-primary/40">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Bell className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">Alerts & Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Get real-time alerts from Experian, D&B, and FICO SBSS data streams. Never miss a critical credit event.</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 4: 1-Tap Prequalification */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer hover:border-primary/40">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Zap className="w-7 h-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-bold">1-Tap Prequalification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Instantly see which Wells Fargo products your business qualifies for. Apply in seconds, no impact to credit.</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 5: AI Credit Coach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer hover:border-primary/40">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">AI Credit Coach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Built-in tips and projections to improve business and owner scores. Like having a credit consultant on call.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHASE 5: Demo Strip */}
      <section id="demo" className="py-16 md:py-24 bg-background transition-colors duration-500">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-[36px] md:text-[52px] font-bold mb-6 text-foreground leading-[1.15]">
              Credit Close-Up for Business,<br />Powered by LUMIQ AI
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Demo Screenshot Placeholders */}
            {[
              { title: "Dashboard Overview", desc: "Dual credit scores at a glance" },
              { title: "Insight Cards", desc: "Actionable improvement areas" },
              { title: "Prequalification", desc: "Product offers with 1-tap apply" },
              { title: "Alert Notification", desc: "Real-time credit event alerts" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-[3/4] bg-gradient-to-br from-muted to-muted/50 rounded-t-lg flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">{idx + 1}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.title}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold text-foreground text-center">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <a href="/#cta">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-10 py-6 h-auto">
                Request Pilot Review – 20 Minutes
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* PHASE 6: Results Section - HIGH URGENCY */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-destructive/5 via-primary/10 to-secondary/5 border-y-4 border-primary/30 transition-colors duration-500">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          {/* Urgent Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-destructive/10 border-2 border-destructive/30 text-destructive font-bold text-sm md:text-base mb-8">
              <TrendingUp className="w-5 h-5" />
              COMPETITIVE WINDOW CLOSING
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-[44px] md:text-[64px] lg:text-[72px] font-extrabold mb-8 text-foreground leading-[1.1]">
              Why Wells Fargo Must Act <span className="text-primary">Now</span>
            </h2>
            <div className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto space-y-4 font-semibold">
              <p className="flex items-center justify-center gap-3">
                <span className="text-primary text-3xl">✓</span>
                <span><strong className="text-primary">Consumer Credit Close-Up proved it works.</strong> Your competitors are watching.</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-secondary text-3xl">✓</span>
                <span><strong className="text-secondary">3.3M+ business customers waiting.</strong> Every quarter without this is revenue left on the table.</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-primary text-3xl">✓</span>
                <span><strong className="text-primary">The SMB credit gap is massive.</strong> First mover advantage won't last forever.</span>
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            {/* Left - Proven Consumer Success */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-4 border-primary/40 bg-gradient-to-br from-primary/5 to-background shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-7xl md:text-8xl font-black text-primary mb-2">71%</div>
                    <p className="text-lg font-bold text-foreground uppercase tracking-wide">Behavior Change Rate</p>
                  </div>
                  <p className="text-base text-muted-foreground text-center leading-relaxed">
                    <strong className="text-foreground">TransUnion study confirms:</strong> Monitored users actively improve their credit behaviors. <span className="text-destructive font-bold">This isn't theory—it's proven consumer data ready for business deployment.</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-4 border-secondary/40 bg-gradient-to-br from-secondary/5 to-background shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-7xl md:text-8xl font-black text-secondary mb-2">1 in 5</div>
                    <p className="text-lg font-bold text-foreground uppercase tracking-wide">Dramatic Score Improvements</p>
                  </div>
                  <p className="text-base text-muted-foreground text-center leading-relaxed">
                    <strong className="text-foreground">40+ point score increases</strong> using Credit Close-Up tools. <span className="text-destructive font-bold">Imagine that impact on SMB loan qualification rates and credit line expansions.</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom - Urgent Market Opportunity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="border-4 border-primary bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 shadow-2xl">
              <CardContent className="p-10 text-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-6">
                  <div>
                    <div className="text-7xl md:text-9xl font-black text-primary mb-2">3.3M+</div>
                    <p className="text-xl font-bold text-foreground uppercase">Business Customers Ready</p>
                  </div>
                  <div className="hidden md:block w-px h-32 bg-border"></div>
                  <div className="max-w-md">
                    <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4 uppercase">Untapped Opportunity</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      <span className="text-destructive font-bold">Every day delayed = missed conversions.</span> Integrated business credit visibility drives higher SMB loan origination and deepens customer relationships.
                    </p>
                  </div>
                </div>
                <div className="pt-6 border-t-2 border-primary/30">
                  <p className="text-base md:text-lg text-foreground font-bold">
                    <span className="text-destructive">⚠️ FIRST-MOVER ADVANTAGE:</span> Regional and fintech competitors are evaluating similar solutions. The window to differentiate is <span className="underline decoration-destructive decoration-2">now</span>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Wells Fargo Pilot Parameters */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="font-display text-[32px] md:text-[44px] font-bold mb-8 text-foreground text-center">
              Wells Fargo Pilot Parameters
            </h2>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Pilot Audience
                    </h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Digitally active SMBs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>$100k–$25M revenue range</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Business checking active</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      Pilot Sample Size
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      <strong className="text-foreground">25k–75k</strong> business accounts
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      Credit Focus
                    </h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">Phase 1:</span>
                        <span>Business credit cards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">Phase 2:</span>
                        <span>LOC/Term loans</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Measurement
                    </h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Lift & approval-rate delta</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Manual review reduction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Loss patterns analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Expected Outcomes
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/5">
                      <div className="text-3xl font-bold text-primary">+10–15%</div>
                      <div className="text-sm text-muted-foreground">conversion lift</div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/5">
                      <div className="text-3xl font-bold text-secondary">+20–35%</div>
                      <div className="text-sm text-muted-foreground">faster decisions</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Bank Dashboard Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center mb-12"
          >
            <h2 className="font-display text-[32px] md:text-[44px] font-bold mb-6 text-foreground">
              Wells Fargo Credit & Conversion Console
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Flagged opportunities, pre-qualified segments, and product eligibility insights in one unified dashboard.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="border-2 border-primary/30 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-muted to-background flex items-center justify-center overflow-hidden">
                <img 
                  src="/dashboard/dashboard.png" 
                  alt="Wells Fargo Credit & Conversion Console Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 bg-background">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-primary" />
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">Segment</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Revenue size, Industry, Time in Business, Utilization</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-4 h-4 text-secondary" />
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">Signals</span>
                    </div>
                    <p className="text-xs text-muted-foreground">FICO SBSS • Intelliscore • FSR • Cash-flow overlays</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">Actions</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Pre-qualify • Route • Monitor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Compliance & Governance Block */}
      <section className="py-16 md:py-20 bg-[#1a1a1a] text-white">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="font-display text-[32px] md:text-[44px] font-bold mb-8 text-center text-white">
              Compliance & Governance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#FFB81C]/20 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#FFB81C]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">SOC 2-aligned</h3>
                <p className="text-sm text-white/70">Enterprise security standards and controls</p>
              </div>
              
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#FFB81C]/20 flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-[#FFB81C]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">Model Risk Governance Ready</h3>
                <p className="text-sm text-white/70">Full documentation and validation</p>
              </div>
              
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#FFB81C]/20 flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-[#FFB81C]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">ECOA/FCRA/GLBA Compliant</h3>
                <p className="text-sm text-white/70">Regulatory alignment built-in</p>
              </div>
              
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#FFB81C]/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FFB81C]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">Full Data Lineage</h3>
                <p className="text-sm text-white/70">Complete audit trail and traceability</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHASE 7: Security + Compliance Strip */}
      <section className="py-12 bg-[#2B2B2B] text-white">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">SOC 2</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                <span className="font-semibold">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5" />
                <span className="font-semibold">FCRA-aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold">Data Lineage Verified</span>
              </div>
            </div>
            <p className="text-white/80">Designed for audit readiness, data transparency, and compliance integrity.</p>
          </motion.div>
        </div>
      </section>

      {/* PHASE 8: Pilot CTA Section */}
      <section id="cta" className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-secondary transition-colors duration-500">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-display text-[40px] md:text-[56px] font-bold mb-6 text-white leading-[1.15]">
              Launch the 6-Week Pilot
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed">
              We'll define success metrics, run a limited rollout, and deliver measurable conversion data.
            </p>
            <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-bold text-xl px-12 py-8 h-auto mb-4">
              Request Pilot Review – 20 Minutes
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <p className="text-sm text-white/70 mt-6">
              Trusted by enterprise clients. Data stays fully encrypted.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Index;
