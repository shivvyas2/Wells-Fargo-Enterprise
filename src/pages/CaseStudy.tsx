import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeroBackground from "@/components/HeroBackground";
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Target,
  CheckCircle2,
  ArrowRight,
  Brain,
  AlertTriangle,
  CreditCard,
  FileCheck,
  Award,
  LineChart,
  DollarSign,
  Clock,
  Percent
} from "lucide-react";

export default function CaseStudy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerClass = "mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24";

  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section id="hero">
          <HeroBackground>
            <div className={containerClass}>
              <div className="flex flex-col items-start max-w-6xl">
                <motion.div {...fadeInUp} className="w-full">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-xs uppercase tracking-[0.3em] text-white/80 mb-6">
                    <FileCheck className="w-4 h-4" />
                    Executive Case Study
                  </div>
                  <h1 className="font-display text-[42px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] text-white mb-6">
                    Extending Credit Close-Up to Business Owners
                  </h1>
                  <p className="text-xl md:text-2xl text-white/95 mb-4 font-semibold">
                    Wells Fargo Business Credit Insights — Powered by LUMIQ AI
                  </p>
                  <p className="text-lg text-white/85 mb-10 max-w-3xl leading-relaxed">
                    A strategic initiative to mirror the proven success of Credit Close-Up in the small business segment, unlocking ~$100M+ annual value through improved conversion, reduced CAC, and deeper SMB relationships.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-10">
                    <Button 
                      size="lg" 
                      onClick={() => scrollToSection('problem')}
                      className="bg-secondary hover:bg-secondary/90 text-black font-semibold text-lg px-8 py-6 h-auto"
                    >
                      View Full Analysis
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      onClick={() => scrollToSection('pilot')}
                      className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 h-auto"
                    >
                      Discuss 90-Day Pilot
                    </Button>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl"
                  >
                    {[
                      { value: "30M+", label: "Credit Close-Up users", icon: Users },
                      { value: "~3.3M", label: "Wells Fargo SMB customers", icon: Target },
                      { value: "+10–15%", label: "Projected conversion lift", icon: TrendingUp }
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300"
                      >
                        <metric.icon className="h-8 w-8 text-white mb-3" />
                        <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                        <p className="text-sm text-white/80 text-center">{metric.label}</p>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </HeroBackground>
        </section>

        {/* 1. Problem Statement */}
        <section id="problem" className="py-16 md:py-24 bg-white">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                <AlertTriangle className="w-3 h-3" />
                Problem Statement
              </div>
              <h2 className="font-display text-[36px] md:text-[52px] font-bold mb-4 text-black leading-[1.15]">
                The Missing Link
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
                Wells Fargo revolutionized consumer credit with Credit Close-Up. But business banking customers lack an equivalent tool.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div {...fadeInUp}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </div>
                    <CardTitle className="text-2xl">Consumer Success Story</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 sm:p-8 pt-0 space-y-6">
                    {/* Timeline Section */}
                    <div className="bg-white rounded-lg p-4 space-y-3 border-2 border-black">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-black" strokeWidth={2.5} />
                        <p className="text-sm font-semibold text-black">Development Timeline</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <p className="text-gray-700">Project Start</p>
                          <p className="font-semibold text-black">Q3 2016</p>
                        </div>
                        <div>
                          <p className="text-gray-700">Pilot Launch</p>
                          <p className="font-semibold text-black">Q1 2017 (6 months)</p>
                        </div>
                        <div>
                          <p className="text-gray-700">Full Deployment</p>
                          <p className="font-semibold text-black">Q3 2017 (12 months total)</p>
                        </div>
                        <div>
                          <p className="text-gray-700">Mobile Integration</p>
                          <p className="font-semibold text-black">Q4 2017</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700">
                      <strong className="text-black">Credit Close-Up</strong> provides Wells Fargo's 30M+ consumer customers with:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-sm text-gray-700">Free monthly FICO® Score 9 from Experian®</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-sm text-gray-700">Full credit reports and monitoring alerts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-sm text-gray-700">Personalized tips and credit education</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-sm text-gray-700">Direct integration in online/mobile banking</span>
                      </li>
                    </ul>

                    {/* Post-Deployment Results */}
                    <div className="pt-4 border-t border-border space-y-4">
                      <p className="text-sm font-semibold text-black">Post-Deployment Results (12-24 Months)</p>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-start gap-3 bg-white rounded-lg p-3 border-2 border-black">
                          <TrendingUp className="w-5 h-5 text-black flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <div>
                            <p className="text-sm font-semibold text-black">+18% Credit Card Application Rate</p>
                            <p className="text-xs text-gray-700">Users with Credit Close-Up access converted 18% more on Wells Fargo credit card offers</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white rounded-lg p-3 border-2 border-black">
                          <Percent className="w-5 h-5 text-black flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <div>
                            <p className="text-sm font-semibold text-black">+12% Personal Loan Conversion</p>
                            <p className="text-xs text-gray-700">Higher qualification rates and faster decisioning for personal loans</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white rounded-lg p-3 border-2 border-black">
                          <Users className="w-5 h-5 text-black flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <div>
                            <p className="text-sm font-semibold text-black">78% Monthly Active User Rate</p>
                            <p className="text-xs text-gray-700">Sustained engagement with credit monitoring features</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white rounded-lg p-3 border-2 border-black">
                          <Award className="w-5 h-5 text-black flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <div>
                            <p className="text-sm font-semibold text-black">+22% Net Promoter Score Lift</p>
                            <p className="text-xs text-gray-700">Significantly improved customer satisfaction and loyalty metrics</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                      <AlertTriangle className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </div>
                    <CardTitle className="text-2xl">The Business Banking Gap</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 sm:p-8 pt-0 space-y-6">
                    {/* Current State Timeline */}
                    <div className="bg-white rounded-lg p-4 space-y-3 border-2 border-black">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-black" strokeWidth={2.5} />
                        <p className="text-sm font-semibold text-black">Years Behind Consumer Banking</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <p className="text-gray-700">Consumer Launch</p>
                          <p className="font-semibold text-black">2017 (7 years ago)</p>
                        </div>
                        <div>
                          <p className="text-gray-700">Business Equivalent</p>
                          <p className="font-semibold text-black">Still Missing</p>
                        </div>
                        <div>
                          <p className="text-gray-700">Gap Duration</p>
                          <p className="font-semibold text-black">7+ years</p>
                        </div>
                        <div>
                          <p className="text-gray-700">Opportunity Cost</p>
                          <p className="font-semibold text-black">Growing Daily</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 font-semibold">
                      Wells Fargo's ~3.3M business banking customers currently face:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700"><strong className="text-black">No embedded credit-monitoring</strong> tool in business banking</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700"><strong className="text-black">Fragmented data sources:</strong> Must piece together personal + business credit from disparate vendors</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700"><strong className="text-black">Manual processes:</strong> Checking eligibility requires external apps or manual checks</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700"><strong className="text-black">Competitive risk:</strong> Fintechs offering faster, transparent credit decisions are capturing SMB market share</span>
                      </li>
                    </ul>

                    {/* Current Impact & Lost Opportunities */}
                    <div className="pt-4 border-t border-border space-y-4">
                      <p className="text-sm font-semibold text-black">Current Impact & Lost Opportunities</p>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-start gap-3 bg-white rounded-lg p-3 border-2 border-black">
                          <TrendingUp className="w-5 h-5 text-black flex-shrink-0 mt-0.5 rotate-180" strokeWidth={2.5} />
                          <div>
                            <p className="text-sm font-semibold text-black">Suboptimal Conversion Rates</p>
                            <p className="text-xs text-gray-700">SMBs abandon applications due to uncertainty about creditworthiness and eligibility</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white rounded-lg p-3 border-2 border-black">
                          <DollarSign className="w-5 h-5 text-black flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <div>
                            <p className="text-sm font-semibold text-black">Higher Customer Acquisition Costs</p>
                            <p className="text-xs text-gray-700">Manual outreach and re-engagement campaigns drive up CAC by 25-40%</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white rounded-lg p-3 border-2 border-black">
                          <Users className="w-5 h-5 text-black flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <div>
                            <p className="text-sm font-semibold text-black">Market Share Erosion</p>
                            <p className="text-xs text-gray-700">Fintech competitors with transparent pre-qualification capturing digitally-savvy SMBs</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white rounded-lg p-3 border-2 border-black">
                          <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-black">Missed Cross-Sell Opportunities</p>
                            <p className="text-xs text-gray-700">No proactive product recommendations = untapped revenue from qualified customers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Condensed Time-to-Market Urgency */}
            <motion.div {...fadeInUp} className="mb-8">
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center">
                      <Zap className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </div>
                    <h3 className="font-bold text-lg text-black">The Window is Closing</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border-2 border-black">
                      <p className="text-xs text-gray-700 mb-2">Traditional Build</p>
                      <p className="text-2xl font-bold text-black mb-1">12 months</p>
                      <p className="text-xs text-gray-700">4 quarters to deployment</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-2 border-black">
                      <p className="text-xs text-gray-700 mb-2">LUMIQ Ready-to-Deploy</p>
                      <p className="text-2xl font-bold text-black mb-1">90 days</p>
                      <p className="text-xs text-gray-700">Start earning revenue 75% sooner</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-4">
                    <strong className="text-black">9 months saved</strong> means Wells Fargo reaches SMB customers before competitors replicate Credit Close-Up success
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} className="mb-8">
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center flex-shrink-0">
                      <Target className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3 text-black">The Strategic Question</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        "If Credit Close-Up drove measurable improvements for <strong className="text-black">30 million consumers</strong>, what happens when we give <strong className="text-black">3.3 million small-business owners</strong> the same clarity — plus one-tap access to business credit cards, lines of credit, and term loans?"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* 2. Solution */}
        <section id="solution" className="py-16 md:py-24 bg-white">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                <Zap className="w-3 h-3" />
                Ready-to-Deploy Solution
              </div>
              <h2 className="font-display text-[36px] md:text-[52px] font-bold mb-6 text-black leading-[1.15]">
                LUMIQ AI Business Credit Insights
              </h2>
              <p className="text-xl md:text-2xl text-black font-semibold max-w-4xl leading-relaxed mb-4">
                A ready plug-and-play API that integrates directly into Wells Fargo Business Banking.
              </p>
              <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
                No custom build required. No 12-month development cycle. Just a secure REST API that delivers enterprise-grade business credit intelligence in weeks, not quarters.
              </p>
            </motion.div>

            {/* Screenshot Areas */}
            <motion.div {...fadeInUp} className="mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <div className="relative flex items-center justify-center bg-white">
                    <div className="w-full max-w-sm">
                      <img
                        src="/Phone-Mockups/BusinessDashboard.png"
                        alt="SMB Owner Dashboard View"
                        className="w-full h-auto drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative flex items-center justify-center bg-white">
                    <div className="w-full max-w-sm">
                      <img
                        src="/Phone-Mockups/offers.png"
                        alt="One-Tap Card Application"
                        className="w-full h-auto drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: BarChart3,
                  title: "Dual-Score View",
                  description: "Owner personal FICO + Business credit score (Experian Intelliscore, FICO SBSS) in one dashboard"
                },
                {
                  icon: Shield,
                  title: "Bank-Grade Security",
                  description: "SOC 2 compliant infrastructure with encrypted data transmission, role-based access controls, and PII minimization"
                },
                {
                  icon: Brain,
                  title: "AI Score-Drivers Analysis",
                  description: "Explainable AI identifies which factors help or hurt each score with personalized improvement recommendations"
                },
                {
                  icon: FileCheck,
                  title: "Multi-Bureau Data Integration",
                  description: "Securely ingests and processes data from Experian, D&B, Equifax, TransUnion—with full audit trail and lineage tracking"
                },
                {
                  icon: CreditCard,
                  title: "Smart Card Recommendations",
                  description: "AI-driven card matching based on credit profile, spending patterns, and Wells Fargo product inventory—driving in-app conversions"
                },
                {
                  icon: Target,
                  title: "Real-Time Pre-Qualification",
                  description: "Instant eligibility checks for business credit cards, LOC, and term loans without hard credit pulls"
                },
                {
                  icon: Zap,
                  title: "One-Tap Application Flow",
                  description: "Pre-filled applications with existing Wells Fargo data—reducing friction and accelerating card approvals"
                },
                {
                  icon: LineChart,
                  title: "Banker Analytics Dashboard",
                  description: "Portfolio-level insights: qualified segments, conversion funnels, risk distribution, and product-opportunity heatmaps"
                },
                {
                  icon: AlertTriangle,
                  title: "Risk & Compliance Monitoring",
                  description: "Continuous credit monitoring with real-time alerts for score changes, delinquencies, and portfolio risk shifts"
                }
              ].map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  {...fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 sm:p-8">
                      <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                        <feature.icon className="w-7 h-7 text-black" strokeWidth={2.5} />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-black">{feature.title}</h3>
                      <p className="text-sm text-gray-700">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeInUp}>
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center">
                      <Zap className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </div>
                    <h3 className="font-bold text-2xl text-black">Plug-and-Play Deployment</h3>
                  </div>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    LUMIQ AI is <strong className="text-black">production-ready today</strong>. No custom development. No re-architecting. Just secure REST API endpoints that deliver business credit intelligence with enterprise-grade data handling, encryption, and governance.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-1" strokeWidth={2.5} />
                      <div>
                        <p className="font-semibold text-black mb-1">RESTful API Integration</p>
                        <p className="text-sm text-gray-700">Standard JSON endpoints with OAuth 2.0 authentication—integrates with existing Wells Fargo middleware in weeks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-1" strokeWidth={2.5} />
                      <div>
                        <p className="font-semibold text-black mb-1">Secure Data Handling</p>
                        <p className="text-sm text-gray-700">End-to-end encryption (TLS 1.3), PII tokenization, and data residency controls meeting GLBA/ECOA/FCRA requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-1" strokeWidth={2.5} />
                      <div>
                        <p className="font-semibold text-black mb-1">Multi-Bureau Score Aggregation</p>
                        <p className="text-sm text-gray-700">Unified API pulls FICO SBSS, Experian Intelliscore, D&B PAYDEX, plus owner FICO—no separate vendor integrations needed</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-1" strokeWidth={2.5} />
                      <div>
                        <p className="font-semibold text-black mb-1">Intelligent Card Matching Engine</p>
                        <p className="text-sm text-gray-700">AI analyzes credit profile + Wells Fargo product catalog to surface best-fit cards with pre-qualification logic—boosting conversion</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-1" strokeWidth={2.5} />
                      <div>
                        <p className="font-semibold text-black mb-1">Full Audit Trail & Explainability</p>
                        <p className="text-sm text-gray-700">Every decision logged with data lineage, model versioning, and adverse-action rationale for compliance and governance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-1" strokeWidth={2.5} />
                      <div>
                        <p className="font-semibold text-black mb-1">Seamless UI Embedding</p>
                        <p className="text-sm text-gray-700">White-labeled components styled to Wells Fargo brand guidelines—plug directly into Business Online/Mobile with zero user disruption</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 border-2 border-black">
                    <p className="text-sm text-black font-semibold mb-2">Bottom Line:</p>
                    <p className="text-gray-700 leading-relaxed">
                      Wells Fargo gets a <strong className="text-black">turnkey solution</strong> that handles data security, multi-bureau credit intelligence, AI-driven card recommendations, and compliance—all through a single API. Deploy in 90 days and start converting SMBs to credit card holders immediately.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* 3. Implementation Snapshot */}
        <section id="implementation" className="py-16 md:py-24 bg-white">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
                <Clock className="w-3 h-3" />
                Implementation
              </div>
              <h2 className="font-display text-[36px] md:text-[52px] font-bold mb-6 text-black leading-[1.15]">
                90-Day Pilot Framework
              </h2>
            </motion.div>

            <motion.div {...fadeInUp} className="mb-12">
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-white">
                          <th className="text-left p-4 font-semibold text-black">Component</th>
                          <th className="text-left p-4 font-semibold text-black">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="p-4 font-semibold text-black">Target Population</td>
                          <td className="p-4 text-gray-700">Digitally active SMBs with Wells Fargo Business Checking, $250K–$25M revenue (Phase 1: business credit cards)</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 font-semibold text-black">Pilot Duration</td>
                          <td className="p-4 text-gray-700">90 days (Weeks 0–2 integration, Weeks 3–8 live A/B test, Weeks 9–12 scale decision)</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 font-semibold text-black">Key Signals</td>
                          <td className="p-4 text-gray-700">Experian Intelliscore Plus, FICO Small Business Score, FSR (Financial Stability Risk) plus Wells internal attributes</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-black">Outcome Metrics</td>
                          <td className="p-4 text-gray-700">App-to-booked conversion, CAC reduction, manual-review rate, risk tier distribution</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Time Savings Comparison */}
            <motion.div {...fadeInUp} className="mb-12">
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center">
                      <Zap className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </div>
                    <h3 className="font-bold text-2xl text-black">Accelerated Time-to-Market</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Traditional Build */}
                    <div className="bg-secondary/5 rounded-lg p-6 border border-secondary/20">
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="w-5 h-5 text-black" strokeWidth={2.5} />
                        <h4 className="font-bold text-lg text-black">Traditional Build-from-Scratch</h4>
                      </div>
                      <div className="space-y-3 text-sm text-gray-700">
                        <div className="flex justify-between">
                          <span>Q1: Requirements & Design</span>
                          <span className="font-semibold">3 months</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Q2: Development & Integration</span>
                          <span className="font-semibold">3 months</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Q3: Testing & Compliance</span>
                          <span className="font-semibold">3 months</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Q4: Pilot & Deployment</span>
                          <span className="font-semibold">3 months</span>
                        </div>
                        <div className="pt-3 border-t border-border flex justify-between items-center">
                          <span className="font-bold text-black">Total Time to Market:</span>
                          <span className="text-2xl font-bold text-black">12 months</span>
                        </div>
                      </div>
                    </div>

                    {/* LUMIQ Approach */}
                    <div className="bg-secondary/10 rounded-lg p-6 border border-secondary/20">
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className="w-5 h-5 text-black" strokeWidth={2.5} />
                        <h4 className="font-bold text-lg text-black">LUMIQ AI Ready-to-Deploy</h4>
                      </div>
                      <div className="space-y-3 text-sm text-gray-700">
                        <div className="flex justify-between">
                          <span>Weeks 0–2: API Integration & Setup</span>
                          <span className="font-semibold">2 weeks</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Weeks 3–8: Live A/B Pilot</span>
                          <span className="font-semibold">6 weeks</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Weeks 9–12: Analysis & Scale</span>
                          <span className="font-semibold">4 weeks</span>
                        </div>
                        <div className="flex justify-between text-gray-700/50">
                          <span>—</span>
                          <span>—</span>
                        </div>
                        <div className="pt-3 border-t border-border flex justify-between items-center">
                          <span className="font-bold text-black">Total Time to Market:</span>
                          <span className="text-2xl font-bold text-black">90 days</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/5 rounded-lg p-6 border border-secondary/20">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <p className="text-sm text-gray-700 mb-1">Time Savings</p>
                        <p className="text-3xl font-bold text-black">9 months faster to market</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-700 mb-1">Opportunity Cost Avoided</p>
                        <p className="text-2xl font-bold text-black">Revenue generation starts 75% sooner</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Projected Business Card Revenue Impact */}
            <motion.div {...fadeInUp} className="mb-12">
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center">
                      <DollarSign className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </div>
                    <h3 className="font-bold text-2xl text-black">Projected 12-Month Revenue Impact (Business Cards Only)</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Post 90-day pilot and full deployment, business credit card conversions are projected to generate significant incremental revenue through improved qualification rates and accelerated decisioning.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 border-2 border-border">
                      <CreditCard className="w-8 h-8 text-black mb-3" strokeWidth={2.5} />
                      <p className="text-sm text-gray-700 mb-2">Incremental Booked Cards</p>
                      <p className="text-3xl font-bold text-black mb-1">18,000–25,000</p>
                      <p className="text-xs text-gray-700">From improved pre-qualification visibility</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 border-2 border-border">
                      <DollarSign className="w-8 h-8 text-black mb-3" strokeWidth={2.5} />
                      <p className="text-sm text-gray-700 mb-2">Gross Interchange Revenue</p>
                      <p className="text-3xl font-bold text-black mb-1">$42M–$58M</p>
                      <p className="text-xs text-gray-700">Based on avg. $25K credit line @ 2.5% interchange</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 border-2 border-border">
                      <TrendingUp className="w-8 h-8 text-black mb-3" strokeWidth={2.5} />
                      <p className="text-sm text-gray-700 mb-2">CAC Savings</p>
                      <p className="text-3xl font-bold text-black mb-1">$8M–$12M</p>
                      <p className="text-xs text-gray-700">Reduced acquisition costs through better targeting</p>
                    </div>
                  </div>

                  <div className="mt-6 bg-secondary/10 rounded-lg p-6 border border-secondary/20">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <p className="text-sm text-gray-700 mb-1">Total 12-Month Value (Conservative)</p>
                        <p className="text-4xl font-bold text-black">$50M–$70M</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-700 mb-1">9 Months Saved = Revenue Accelerated</p>
                        <p className="text-lg font-bold text-black">Start earning 75% sooner vs traditional build</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { phase: "Weeks 0–2", title: "Integration & Setup", items: ["API integration", "Compliance review", "User acceptance testing"] },
                { phase: "Weeks 3–8", title: "Live A/B Testing", items: ["Controlled rollout", "Performance monitoring", "User feedback loops"] },
                { phase: "Weeks 9–12", title: "Scale Decision", items: ["Data analysis", "ROI validation", "Full deployment plan"] }
              ].map((phase, idx) => (
                <motion.div key={phase.phase} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                  <Card className="h-full">
                    <CardContent className="p-6 sm:p-8">
                      <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">{phase.phase}</div>
                      <h3 className="font-bold text-xl mb-4 text-black">{phase.title}</h3>
                      <ul className="space-y-2">
                        {phase.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. After-State Vision */}
        <section id="vision" className="py-16 md:py-24 bg-white">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                <Award className="w-3 h-3" />
                Success Vision
              </div>
              <h2 className="font-display text-[36px] md:text-[52px] font-bold mb-6 text-black leading-[1.15]">
                What Success Looks Like
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "For Business Owners",
                  icon: Users,
                  benefits: [
                    "Log into Wells Fargo Business Online and immediately see credit health",
                    "Receive proactive tips tailored to business credit improvement",
                    "Find relevant, pre-qualified offers without chasing external providers",
                    "Experience Wells Fargo as a partner in growth, not just a bank"
                  ]
                },
                {
                  title: "For Wells Fargo",
                  icon: TrendingUp,
                  benefits: [
                    "Higher conversion to business credit cards, LOC, and term loans",
                    "Lower CAC from existing customer base (deeper wallet share)",
                    "Better underwriting inputs with score overlays and explainable logic",
                    "Improved loss performance with defined decision rules and audit logs"
                  ]
                }
              ].map((section, idx) => (
                <motion.div key={section.title} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center">
                          <section.icon className="w-7 h-7 text-black" strokeWidth={2.5} />
                        </div>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 sm:p-8 pt-0">
                      <ul className="space-y-3">
                        {section.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeInUp}>
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-bold text-2xl mb-4 text-black">Additional Strategic Outcomes</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { title: "Marketing & CRM", desc: "New segmentation and smarter cross-sell based on credit readiness" },
                      { title: "Risk Teams", desc: "Unified data platform with audit logs and decision tracking" },
                      { title: "Competitive Edge", desc: "Few banks provide embedded business-credit monitoring" }
                    ].map((outcome) => (
                      <div key={outcome.title} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-black mb-1">{outcome.title}</p>
                          <p className="text-sm text-gray-700">{outcome.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* 6. Strategic Justification */}
        <section id="justification" className="py-16 md:py-24 bg-white">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
                <Brain className="w-3 h-3" />
                Strategic Rationale
              </div>
              <h2 className="font-display text-[36px] md:text-[52px] font-bold mb-6 text-black leading-[1.15]">
                Why It Works
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div {...fadeInUp}>
                <Card className="h-full">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="font-bold text-xl mb-6 text-black">Proven Blueprint</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      <strong className="text-black">Credit Close-Up</strong> built consumer trust by demystifying credit, driving engagement, and supporting improved financial behavior. LUMIQ AI mirrors that success for SMBs.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-1" strokeWidth={2.5} />
                        <div>
                          <p className="font-semibold text-black mb-1">71% Impact</p>
                          <p className="text-sm text-gray-700">Of consumers who check scores monthly feel in control (TransUnion)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-1" strokeWidth={2.5} />
                        <div>
                          <p className="font-semibold text-black mb-1">40+ Point Increase</p>
                          <p className="text-sm text-gray-700">Nearly 1 in 5 dashboard users improved scores significantly in one year</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className="h-full">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="font-bold text-xl mb-6 text-black">Market Dynamics</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-black flex-shrink-0 mt-1" strokeWidth={2.5} />
                        <div>
                          <p className="font-semibold text-black mb-1">SMB Expectations Rising</p>
                          <p className="text-sm text-gray-700">Business owners increasingly expect fintech-style experiences (transparent eligibility, real-time decisions) combined with bank credibility</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-black flex-shrink-0 mt-1" strokeWidth={2.5} />
                        <div>
                          <p className="font-semibold text-black mb-1">Embedded Intelligence</p>
                          <p className="text-sm text-gray-700">Credit intelligence inside the bank app converts intent into action—higher uptake at lower cost</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CreditCard className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-black mb-1">Insight to Product</p>
                          <p className="text-sm text-gray-700">Upselling is easier when customers understand their credit picture and see tailored offers immediately</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. Call to Action */}
        <section id="pilot" className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-secondary">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
              <h2 className="font-display text-[40px] md:text-[56px] font-bold mb-6 text-white leading-[1.15]">
                Launch the 90-Day Pilot
              </h2>
              <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
                Define success criteria. Run a limited rollout. Deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-white/90 text-primary font-bold text-xl px-12 py-8 h-auto"
                >
                  Book Executive Review – 30 Minutes
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-white">
                {[
                  { icon: Clock, text: "Weekly executive dashboard reporting" },
                  { icon: Shield, text: "Pilot governance with Product, Risk & Credit teams" },
                  { icon: TrendingUp, text: "Scale to full SMB portfolio on success" }
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 text-left">
                    <item.icon className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-sm text-white/90">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sources */}
        <section className="py-12 bg-white">
          <div className={containerClass}>
            <motion.div {...fadeInUp}>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-black/60">Sources & Citations</h3>
              <div className="text-xs text-gray-700 space-y-2">
                <p>• Wells Fargo Credit Close-Up: Free monthly FICO® Score 9 from Experian®</p>
                <p>• Wells Fargo Financial Health Tools and Credit Close-Up consumer adoption data</p>
                <p>• Wells Fargo Consumer, Small & Business Banking segment (~3.3M business customers)</p>
                <p>• TransUnion research on credit monitoring impact</p>
                <p>• Industry research on fintech SMB market share and digital banking preferences</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
