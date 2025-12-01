import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Database, Shield, Lock, Users, TrendingUp, BarChart3, CheckCircle2, 
  FileText, Target, DollarSign, Zap, ArrowRight, AlertCircle, 
  Activity, Layers, GitBranch, Eye, Settings, LineChart 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HowItWorks() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen relative">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-[#C40C0C] via-[#8B0A0A] to-[#4A4A4A] text-white pb-16">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

          {/* Hero Content */}
          <section id="hero" className="pt-28 md:pt-32 pb-24">
            <div className="mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
              <motion.div {...fadeInUp} className="max-w-5xl space-y-8">
                <div className="inline-block bg-secondary text-black px-4 py-2 rounded-full text-sm font-semibold">
                  How It Works
                </div>
                
                <h1 className="text-[48px] md:text-[64px] font-bold leading-tight">
                  How LUMIQ AI Business Credit Close-Up Works
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-4xl">
                  The business-credit version of Wells Fargo Close-Up — embedded directly into your Business Online Banking. 
                  Real-time credit visibility, explainable signals, and product pre-qualification aligned to Wells Fargo's risk appetite.
                </p>

                <div className="flex items-center gap-3 pt-4">
                  <span className="text-sm text-white font-bold">Supports:</span>
                  <div className="flex flex-wrap gap-2">
                    {["SBFE Business Data", "FICO SBSS", "Experian FSR", "Consumer FICO®"].map((model) => (
                      <Badge key={model} className="bg-white/10 text-white border-white/20 font-normal">
                        {model}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-secondary text-black hover:bg-secondary/90 rounded-full font-semibold text-lg px-8 mt-4"
                  >
                    Request a 20-minute Pilot Review
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Owner Experience Section */}
        <section id="owner-experience" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
          <div className="mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <motion.div {...fadeInUp} className="space-y-16">
              <div className="text-center max-w-4xl mx-auto space-y-4">
                <Badge className="bg-primary/10 text-primary border-[#C40C0C]/20">
                  Business Owner Experience
                </Badge>
                <p className="text-lg text-gray-700">
                  Four simple steps from login to pre-qualified offer — all inside Wells Fargo Business Online.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                      step: "1",
                      title: "Sign In",
                      description: "User logs in to Wells Fargo Business Online. LUMIQ AI quietly fetches required signals via SBFE, FICO SBSS, Experian FSR, and consumer bureaus.",
                      icon: Lock,
                      image: "/Phone-Mockups/1.png"
                    },
                  {
                    step: "2",
                    title: "View Credit Health",
                    description: "Owner sees both their personal FICO and their Business Credit Score in a single unified view. Includes alerts, score factors, utilization, and payment insights.",
                    icon: Activity,
                    image: "/Phone-Mockups/2.png"
                  },
                  {
                    step: "3",
                    title: "See Pre-Qualified Wells Fargo Products",
                    description: "Based on underwriting inputs + policy overlays, eligible business products surface with clear 'Why You Qualify' explanations.",
                    icon: Target,
                    image: "/Phone-Mockups/3.png"
                  },
                  {
                    step: "4",
                    title: "One-Tap Application",
                    description: "User applies with one tap; the offer converts directly to Wells Fargo's existing workflow.",
                    icon: Zap,
                    image: "/Phone-Mockups/4.png"
                  }
                ].map((step) => (
                  <Card key={step.step} className="h-full">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                          {step.step}
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center">
                          <step.icon className="w-7 h-7 text-black" strokeWidth={2.5} />
                        </div>
                      </div>
                      {step.image && (
                        <div className="mb-4 flex items-center justify-center">
                          <div className="relative max-w-[200px] w-full">
                            <img
                              src={step.image}
                              alt={step.title}
                              className="w-full h-auto drop-shadow-xl rounded-lg"
                            />
                          </div>
                        </div>
                      )}
                      <h3 className="text-lg font-bold text-black mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Mobile Mockups */}
              <div className="grid lg:grid-cols-2 gap-10 pt-8">
                {[
                  {
                    title: "Credit Dashboard View",
                    image: "/Phone-Mockups/seehow1.png",
                    label: "Dual-score visibility: Personal FICO + Business Credit"
                  },
                  {
                    title: "Pre-Qualified Offers",
                    image: "/Phone-Mockups/pre qual offer.png",
                    label: "Wells Fargo business cards with eligibility explanations"
                  }
                ].map((mockup) => (
                  <div key={mockup.title} className="space-y-4">
                    <h4 className="text-base md:text-lg font-semibold text-primary uppercase tracking-wider text-center">
                      {mockup.title}
                    </h4>
                    <div className="relative flex items-center justify-center">
                      <div className="relative max-w-sm w-full">
                        <img
                          src={mockup.image}
                          alt={mockup.title}
                          className="w-full h-auto drop-shadow-2xl"
                        />
                      </div>
                    </div>
                    <p className="text-sm text-center text-gray-700">
                      {mockup.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bank Ops & Integration Section */}
        <section id="bank-ops" className="py-16 md:py-24 bg-white">
          <div className="mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <motion.div {...fadeInUp} className="space-y-16">
              <div className="text-center max-w-4xl mx-auto space-y-4">
                <Badge className="bg-primary/10 text-primary border-[#C40C0C]/20">
                  Bank Operations & Integration
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-black">
                  How LUMIQ AI Integrates with Wells Fargo
                </h2>
                <p className="text-lg text-gray-700">
                  Seamless API integration with no disruption to existing systems.
                </p>
              </div>

              {/* Architecture Diagram */}
              <div className="bg-white bg-white rounded-3xl p-8 md:p-12 border border-border border-border shadow-lg">
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Data Sources",
                      icon: Database,
                      items: [
                        "SBFE Business Credit",
                        "FICO SBSS",
                        "Experian FSR",
                        "Consumer FICO® (3 bureaus)",
                        "WF Relationship Data"
                      ],
                      color: "bg-blue-500"
                    },
                    {
                      title: "LUMIQ AI Engine",
                      icon: Layers,
                      items: [
                        "Score interpretation",
                        "Segmentation",
                        "Risk overlays",
                        "Explainability"
                      ],
                      color: "bg-primary"
                    },
                    {
                      title: "WF Product Routing",
                      icon: GitBranch,
                      items: [
                        "Business Cards",
                        "LOC (Phase 2)",
                        "Term Loans (Phase 2)",
                        "Policy alignment"
                      ],
                      color: "bg-secondary"
                    },
                    {
                      title: "WF Dashboards",
                      icon: LineChart,
                      items: [
                        "Banker visibility",
                        "Model logs",
                        "Audit trail",
                        "Conversion analytics"
                      ],
                      color: "bg-green-500"
                    }
                  ].map((block, idx, arr) => (
                    <div key={block.title} className="relative">
                      <Card className="h-full">
                        <CardContent className="p-6 sm:p-8">
                          <div className={`w-16 h-16 rounded-2xl ${block.color} flex items-center justify-center mb-6`}>
                            <block.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                          </div>
                          <h3 className="font-bold text-black mb-4">
                            {block.title}
                          </h3>
                          <ul className="space-y-2">
                            {block.items.map((item) => (
                              <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" strokeWidth={2.5} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                      {idx < arr.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                          <ArrowRight className="w-6 h-6 text-primary" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Integration Details */}
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { label: "No system disruption", icon: Shield },
                  { label: "REST API with sandbox", icon: Settings },
                  { label: "SOC2-aligned", icon: Lock },
                  { label: "WF-hosted or vendor VPC", icon: Database },
                  { label: "Role-based access", icon: Users },
                  { label: "Audit-ready data lineage", icon: FileText }
                ].map((feature) => (
                  <Card key={feature.label} className="h-full">
                    <CardContent className="p-4 text-center space-y-2">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mx-auto mb-3">
                        <feature.icon className="w-6 h-6 text-black" strokeWidth={2.5} />
                      </div>
                      <p className="text-xs font-medium text-gray-700 leading-tight">
                        {feature.label}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Signals & Models Section */}
        <section id="signals" className="py-16 md:py-24 bg-white">
          <div className="mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <motion.div {...fadeInUp} className="space-y-12">
              <div className="text-center max-w-4xl mx-auto space-y-4">
                <Badge className="bg-primary/10 text-primary border-[#C40C0C]/20">
                  Credit Signals & Models
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-black">
                  Credit Signals & Models Used
                </h2>
                <p className="text-lg text-gray-700">
                  Explicit, validated credit signals for Risk and Compliance comfort.
                </p>
              </div>

              <div className="space-y-12">
                {/* Individual/Guarantor Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-black flex items-center gap-3">
                    <Users className="w-6 h-6 text-black" strokeWidth={2.5} />
                    Individual / Guarantor (Personal)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        name: "Guarantor FICO® Score",
                        type: "Consumer Credit",
                        description: "Personal credit score of business owner(s) from Experian, Equifax, and TransUnion.",
                        icon: Users
                      },
                      {
                        name: "Guarantor Credit Report Data",
                        type: "Consumer History",
                        description: "Delinquencies, collections, charge-offs, revolving utilization, total debt, length of history, new credit, inquiries.",
                        icon: FileText
                      }
                    ].map((signal) => (
                      <Card key={signal.name} className="h-full">
                        <CardContent className="p-6 sm:p-8">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center">
                              <signal.icon className="w-7 h-7 text-black" strokeWidth={2.5} />
                            </div>
                            <Badge className="bg-secondary/10 text-black border-secondary/20 font-normal">
                              {signal.type}
                            </Badge>
                          </div>
                          <h4 className="font-bold text-black mb-3">
                            {signal.name}
                          </h4>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {signal.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Company/Business Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-black flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-black" strokeWidth={2.5} />
                    Company / Business
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        name: "Business Credit Report via SBFE",
                        type: "SBFE Network",
                        description: "Small Business Financial Exchange data feeding D&B, Experian Business, Equifax Business credit reports.",
                        icon: Database
                      },
                      {
                        name: "Composite Business Risk Score",
                        type: "FICO SBSS",
                        description: "FICO SBSS-type score combining owner credit, business credit, and bank relationship data.",
                        icon: BarChart3
                      },
                      {
                        name: "Bureau-Level Business Metrics",
                        type: "Experian",
                        description: "Experian business risk scores, FSR (Financial Stability Risk), and Intelliscore-style measures.",
                        icon: Activity
                      }
                    ].map((signal) => (
                      <Card key={signal.name} className="h-full">
                        <CardContent className="p-6 sm:p-8">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center">
                              <signal.icon className="w-7 h-7 text-black" strokeWidth={2.5} />
                            </div>
                            <Badge className="bg-secondary/10 text-black border-secondary/20 font-normal">
                              {signal.type}
                            </Badge>
                          </div>
                          <h4 className="font-bold text-black mb-3">
                            {signal.name}
                          </h4>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {signal.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Application/Relationship Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-black flex items-center gap-3">
                    <Shield className="w-6 h-6 text-black" strokeWidth={2.5} />
                    Application / Relationship Data
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        name: "Business Fundamentals",
                        type: "Application Data",
                        description: "Time in business, annual revenue, industry/NAICS classification for risk segmentation.",
                        icon: Target
                      },
                      {
                        name: "Wells Fargo Relationship",
                        type: "Bank Data",
                        description: "Existing deposits, loans, prior cards, transaction patterns, and relationship depth.",
                        icon: DollarSign
                      },
                      {
                        name: "Internal Performance Data",
                        type: "Behavior Signals",
                        description: "NSFs, overdrafts, prior delinquencies, payment velocity, and account management history.",
                        icon: Activity
                      },
                      {
                        name: "KYC/KYB & Identity",
                        type: "Compliance",
                        description: "Identity verification, sanction screening, and PATRIOT Act compliance checks.",
                        icon: Lock
                      }
                    ].map((signal) => (
                      <Card key={signal.name} className="h-full">
                        <CardContent className="p-6 sm:p-8">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center">
                              <signal.icon className="w-7 h-7 text-black" strokeWidth={2.5} />
                            </div>
                            <Badge className="bg-secondary/10 text-black border-secondary/20 font-normal">
                              {signal.type}
                            </Badge>
                          </div>
                          <h4 className="font-bold text-black mb-3">
                            {signal.name}
                          </h4>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {signal.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              <Card className="bg-white">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-black shrink-0" strokeWidth={2.5} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-black text-lg">
                        Score Refresh & Audit Trail
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Scores are refreshed per login or scheduled intervals set by Wells Fargo. 
                        All signals stored with full audit trail and explanation metadata for compliance and governance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Decisioning & Product Routing Section */}
        <section id="decisioning" className="py-16 md:py-24 bg-white">
          <div className="mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <motion.div {...fadeInUp} className="space-y-12">
              <div className="text-center max-w-4xl mx-auto space-y-4">
                <Badge className="bg-primary/10 text-primary border-[#C40C0C]/20">
                  Policy-Aligned Decisioning
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-black">
                  Policy-Aligned Decisioning & Product Routing
                </h2>
                <p className="text-lg text-gray-700">
                  Every recommendation within Wells Fargo's risk appetite. No automated approvals.
                </p>
              </div>

              {/* Decision Flow Diagram */}
              <div className="bg-white bg-white rounded-3xl p-8 md:p-12 border border-border border-border shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  {[
                    { label: "Inputs", sublabel: "Scores + Attributes", icon: Database },
                    { label: "WF Policy Overlay", sublabel: "Risk Appetite", icon: Shield },
                    { label: "Pre-Qualification", sublabel: "Eligibility Check", icon: CheckCircle2 },
                    { label: "Offer", sublabel: "Product Match", icon: Target },
                    { label: "Conversion", sublabel: "Application Flow", icon: Zap }
                  ].map((step, idx, arr) => (
                    <div key={step.label} className="flex items-center gap-6">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C40C0C] to-[#F2C75C] flex items-center justify-center shadow-lg">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-black text-sm">
                            {step.label}
                          </p>
                          <p className="text-xs text-gray-600">
                            {step.sublabel}
                          </p>
                        </div>
                      </div>
                      {idx < arr.length - 1 && (
                        <ArrowRight className="w-6 h-6 text-primary hidden md:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Principles */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="h-full">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                      <Shield className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">
                      Decision Principles
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "LUMIQ AI applies Wells Fargo's credit policy rules",
                        "No automated approvals; only pre-qualifications within WF risk appetite",
                        "Every recommendation includes transparent score factors",
                        "Adverse-action rationale provided if declined"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                      <Target className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">
                      Product Roadmap
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Badge className="bg-primary text-white border-none mb-2">Stage 1</Badge>
                        <p className="text-sm text-black font-semibold">
                          Business Credit Cards
                        </p>
                        <p className="text-xs text-gray-600">
                          Primary focus for pilot and initial rollout
                        </p>
                      </div>
                      <div>
                        <Badge className="bg-secondary text-black border-none mb-2">Stage 2</Badge>
                        <p className="text-sm text-black font-semibold">
                          Business LOC, Term Loans, CRE
                        </p>
                        <p className="text-xs text-gray-600">
                          Expansion to additional commercial products
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Monitoring, Insights & Governance Section */}
        <section id="governance" className="py-16 md:py-24 bg-white">
          <div className="mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <motion.div {...fadeInUp} className="space-y-12">
              <div className="text-center max-w-4xl mx-auto space-y-4">
                <Badge className="bg-primary/10 text-primary border-[#C40C0C]/20">
                  Governance & Portfolio Monitoring
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-black">
                  Governance & Portfolio Monitoring
                </h2>
                <p className="text-lg text-gray-700">
                  Complete transparency, audit trails, and actionable insights for internal teams.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Column 1: Banker Dashboard */}
                <Card className="h-full">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                      <Eye className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">
                      Banker Dashboard
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Tier segmentation",
                        "Pre-qual funnel",
                        "Industry risk heatmap",
                        "Conversion lift vs control"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Column 2: Compliance Controls */}
                <Card className="h-full">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                      <Shield className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">
                      Compliance Controls
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Data lineage",
                        "Explainability",
                        "Policy versioning",
                        "ECOA/FCRA/GLBA-aligned handling",
                        "PII minimization"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Column 3: KPIs */}
                <Card className="h-full">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                      <LineChart className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-6">
                      Key Performance Indicators
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { metric: "+10–15%", label: "Increase in qualified SMB applications", icon: TrendingUp },
                        { metric: "+20–35%", label: "Faster time-to-decision", icon: Zap },
                        { metric: "100%", label: "Audit-trail coverage", icon: Shield },
                        { metric: "–18–25%", label: "Reduced manual reviews", icon: CheckCircle2 }
                      ].map((kpi) => (
                        <div key={kpi.label} className="flex flex-col items-center text-center p-5 rounded-xl bg-gray-50 border border-black/10 hover:border-black/30 hover:shadow-md transition-all">
                          <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-3">
                            <kpi.icon className="w-6 h-6 text-black" strokeWidth={2.5} />
                          </div>
                          <div className="text-2xl md:text-3xl font-bold text-black mb-2">
                            {kpi.metric}
                          </div>
                          <p className="text-xs md:text-sm text-gray-700 leading-tight">
                            {kpi.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pilot Rollout Timeline Section */}
        <section id="pilot" className="py-16 md:py-24 bg-white">
          <div className="mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <motion.div {...fadeInUp} className="space-y-12">
              <div className="text-center max-w-4xl mx-auto space-y-4">
                <Badge className="bg-primary/10 text-primary border-[#C40C0C]/20">
                  Pilot Timeline
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-black">
                  Pilot Rollout Timeline
                </h2>
                <p className="text-lg text-gray-700">
                  90-day controlled experiment with clear milestones and success criteria.
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-12 left-8 right-8 h-1 bg-gradient-to-r from-primary via-secondary to-green-500 hidden lg:block" />
                
                <div className="grid lg:grid-cols-3 gap-8">
                  {[
                    {
                      phase: "Weeks 0–2",
                      title: "Integration + Sandbox",
                      color: "from-primary to-primary/80",
                      icon: Settings,
                      items: [
                        "API integration & credential setup",
                        "Sandbox environment testing",
                        "Data mapping & validation",
                        "Security & compliance review"
                      ]
                    },
                    {
                      phase: "Weeks 3–8",
                      title: "Live A/B Traffic",
                      color: "from-secondary to-secondary/80",
                      icon: Activity,
                      items: [
                        "Controlled A/B test with live traffic",
                        "Dashboard monitoring & alerts",
                        "Weekly performance reviews",
                        "Conversion & risk tracking"
                      ]
                    },
                    {
                      phase: "Weeks 9–12",
                      title: "Optimization + Scale Decision",
                      color: "from-green-500 to-green-600",
                      icon: TrendingUp,
                      items: [
                        "Performance analysis & reporting",
                        "Model refinement & tuning",
                        "Compliance validation",
                        "Scale recommendation & roadmap"
                      ]
                    }
                  ].map((phase, idx) => (
                    <Card key={phase.phase} className="h-full relative">
                      <CardContent className="p-6 sm:p-8">
                        <div className="relative mb-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg relative z-10`}>
                            <phase.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                          </div>
                        </div>
                        <div className="mb-4">
                          <Badge className="bg-primary/10 text-primary border-none mb-2">
                            {phase.phase}
                          </Badge>
                          <h3 className="text-xl font-bold text-black">
                            {phase.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {phase.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-1" strokeWidth={2.5} />
                              <span className="text-sm text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Outputs */}
              <Card className="bg-white">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-6">
                    <FileText className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    Pilot Outputs & Deliverables
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {[
                      "Lift report with statistical significance",
                      "Score stability tests & validation",
                      "Compliance validation & audit logs",
                      "Scale recommendation & ROI forecast"
                    ].map((output) => (
                      <div key={output} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-sm text-gray-700">{output}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA Footer Section */}
        <section className="py-20 bg-gradient-to-r from-[#C40C0C] to-[#8B0A0A] text-white">
          <div className="mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <motion.div {...fadeInUp} className="text-center space-y-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold">
                See how LUMIQ AI increases pre-qualified applications by 10–15% within Wells Fargo's risk appetite
              </h2>
              <p className="text-xl text-white/90">
                Measurable lift. Controlled experiment. Explainable models. Policy-aligned.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold text-lg px-8"
                  >
                    Request Pilot Review
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-primary rounded-full font-semibold text-lg px-8"
                  >
                    Download Model Governance Framework
                    <FileText className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
