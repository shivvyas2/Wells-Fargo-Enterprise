import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Target, Shield, TrendingUp, Users, Lightbulb, ArrowRight, Database, Brain, BarChart3 } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

function About() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroBackground>
        <div className="flex flex-col items-start max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-8"
          >
            <Shield className="w-4 h-4" />
            FuteurCredX / LUMIQ AI
          </motion.div>

          <h1 className="font-display text-[48px] md:text-[64px] lg:text-[72px] font-bold mb-6 leading-[1.1] text-white">
            About FuteurCredX
          </h1>

          <p className="text-xl md:text-2xl text-white/95 mb-4 max-w-4xl leading-relaxed font-semibold">
            Building the future of credit intelligence—enterprise-grade AI that empowers financial institutions and consumers to make better credit decisions.
          </p>

          <p className="text-base text-white/80 mb-10 max-w-3xl leading-relaxed">
            From consumer credit education to business credit infrastructure, we deliver measurable outcomes through explainable AI and regulatory-aligned decisioning.
          </p>
        </div>
      </HeroBackground>

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-[36px] md:text-[48px] font-bold mb-4 text-foreground">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              FuteurCredX is an enterprise AI company specializing in credit intelligence, risk scoring, and financial product optimization for banks, lenders, and consumers.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-2 border-primary/30">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Mission-Driven</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Democratize credit intelligence and enable fair, transparent, and data-driven lending decisions at scale.
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
              <Card className="h-full border-2 border-secondary/30">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Dual Audience</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Serving both financial institutions (banks, credit unions, lenders) and consumers seeking credit transparency and optimization.
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
              <Card className="h-full border-2 border-primary/30">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Compliance-First</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Built with SOC 2, FCRA, ECOA, and GLBA alignment from day one. Audit-ready infrastructure designed for enterprise risk and compliance teams.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-[36px] md:text-[48px] font-bold mb-4 text-foreground">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We build AI-powered credit intelligence platforms that transform how institutions underwrite, monitor, and grow their portfolios.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-l-4 border-primary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Database className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Credit Data Unification</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Consolidate owner FICO, business credit scores (FICO SBSS, Experian FSR), internal banking data, and behavioral signals into a single unified view with full data lineage.
                      </p>
                      <p className="text-sm text-muted-foreground/80 italic">
                        Real-time ingestion with explainable scoring models aligned to institutional policy overlays.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="border-l-4 border-secondary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">AI-Powered Risk Decisioning</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Pre-qualification engines, early warning detection, and product recommendation models that reduce manual underwriting by 35% while improving approval accuracy by 18-20%.
                      </p>
                      <p className="text-sm text-muted-foreground/80 italic">
                        Explainable AI with full audit trails for compliance, adverse action reporting, and model governance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-l-4 border-primary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Portfolio Intelligence Dashboards</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Executive, risk, and banker dashboards showing qualified segments, pre-qualification funnels, industry risk heatmaps, conversion lift tracking, and loss pattern monitoring.
                      </p>
                      <p className="text-sm text-muted-foreground/80 italic">
                        Proactive alerts and segmentation tools enable data-driven portfolio optimization.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Products */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-[36px] md:text-[48px] font-bold mb-4 text-foreground">
              Our Enterprise Product & Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              LUMIQ AI for institutions—backed by comprehensive technical documentation and integration support.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-primary/40">
                <CardHeader>
                  <CardTitle className="text-2xl">LUMIQ AI for Institutions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Enterprise-grade credit intelligence for banks, credit unions, and lenders. Integrates directly into existing underwriting systems via RESTful API.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Unified business credit view (owner FICO + business scores)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Pre-qualification and product recommendation engines
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Portfolio health monitoring with early warning detection
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Compliance-ready audit trails and explainability
                      </p>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <a href="https://institutions.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                      Visit Institutions Portal
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full border-2 border-secondary/40">
                <CardHeader>
                  <CardTitle className="text-2xl">FuteurCredX Documentation Hub</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comprehensive technical documentation and integration resources for developers, engineers, and technical teams implementing FuteurCredX solutions.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Complete API reference documentation with endpoint specifications and authentication guides
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Step-by-step integration tutorials and implementation best practices
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Technical architecture diagrams, data flow specifications, and security protocols
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Sample code libraries, SDKs, and sandbox environment access for testing
                      </p>
                    </div>
                  </div>
                  <Button variant="secondary" className="w-full" asChild>
                    <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                      View Documentation
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#2B2B2B] via-[#1a1a1a] to-[#2B2B2B]">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-[36px] md:text-[48px] font-bold mb-4 text-white">
              Why We Built This
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              The credit industry is broken. Information asymmetry hurts consumers and institutions alike.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 className="font-bold text-xl mb-3 text-white">For Consumers</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                71% of consumers don't understand how their credit score is calculated. 1 in 5 have errors on their credit reports. Access to credit education and transparency shouldn't be a luxury—it should be a fundamental right.
              </p>
              <p className="text-white/60 text-sm italic">
                We saw consumers struggling to navigate credit systems designed to keep them in the dark. FuteurCredX changes that.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 className="font-bold text-xl mb-3 text-white">For Institutions</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Banks and lenders are losing qualified customers to fintech disruptors who offer faster decisions and transparent experiences. Manual underwriting is slow, expensive, and error-prone. Risk teams lack real-time portfolio visibility.
              </p>
              <p className="text-white/60 text-sm italic">
                We saw institutions stuck with legacy systems that couldn't adapt to modern expectations. LUMIQ AI bridges that gap.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 className="font-bold text-xl mb-3 text-white">The Outcome</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                By combining consumer-grade transparency with enterprise-grade compliance, we're creating a new standard for credit intelligence. Consumers get control. Institutions get velocity and risk visibility. Everyone wins.
              </p>
              <p className="text-white/60 text-sm italic">
                This isn't incremental improvement—it's systemic transformation of how credit decisions are made.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Links & Resources */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-[36px] md:text-[48px] font-bold mb-4 text-foreground">
              Explore FuteurCredX
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Visit our platform to see how we're transforming credit intelligence for institutions and consumers.
            </p>
            
            <Button size="lg" className="text-lg px-10 py-7 h-auto" asChild>
              <a href="https://www.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                Visit FuteurCredX
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-display text-[40px] md:text-[56px] font-bold mb-6 text-white leading-[1.15]">
              Ready to Transform Credit Intelligence?
            </h2>
            <p className="text-xl text-white/95 mb-10 leading-relaxed">
              Whether you're a financial institution looking to modernize underwriting or exploring enterprise credit solutions, we'd love to connect.
            </p>
            
            <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-bold text-xl px-12 py-8 h-auto shadow-xl" asChild>
              <a href="/contact">
                Get in Touch
                <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

export default About;
