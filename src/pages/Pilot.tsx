import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import HeroBackground from "@/components/HeroBackground";
import emailjs from "@emailjs/browser";
import { 
  TrendingUp, 
  DollarSign, 
  Shield, 
  Plug, 
  BarChart3, 
  Layers, 
  CheckCircle2,
  Download,
  FileCheck,
  Lock,
  ArrowRight,
  Info,
  AlertCircle,
  Users,
  Clock,
  Sparkles,
  Target,
  Zap
} from "lucide-react";
import { z } from "zod";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// Form validation schema
const pilotFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  title: z.string().trim().min(1, "Title is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  smbCount: z.string().optional(),
  consent: z.boolean().refine(val => val === true, "You must agree to continue")
});

type PilotFormData = z.infer<typeof pilotFormSchema>;

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_xfyl449";
const EMAILJS_PUBLIC_KEY = "3sQt_CDIT_J4t7dTm";
const EMAILJS_AUTO_REPLY_TEMPLATE = "template_vzc8nwp"; // Same auto-reply template
const EMAILJS_PILOT_TEMPLATE = "template_1ioi23i"; // Pilot application notification template

// Initialize EmailJS
emailjs.init({
  publicKey: EMAILJS_PUBLIC_KEY,
});

function Pilot() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<PilotFormData>({
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    smbCount: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = pilotFormSchema.parse(formData);
      setIsSubmitting(true);
      
      // Format SMB count for display
      const smbCountLabels: Record<string, string> = {
        "less-than-100k": "Less than 100K",
        "100k-500k": "100K - 500K",
        "500k-1m": "500K - 1M",
        "1m-5m": "1M - 5M",
        "more-than-5m": "More than 5M"
      };
      const smbCountDisplay = validatedData.smbCount ? smbCountLabels[validatedData.smbCount] || validatedData.smbCount : "Not specified";

      // Prepare template parameters for auto-reply (to user)
      const autoReplyParams = {
        name: validatedData.name,
        title: `Pilot Program Application - ${validatedData.company}`,
      };

      // Prepare template parameters for business notification (to you)
      const currentTime = new Date().toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });

      // Send all individual fields so they can be displayed separately in the template
      const pilotNotificationParams = {
        name: validatedData.name,
        title: validatedData.title,
        company: validatedData.company,
        email: validatedData.email,
        phone: validatedData.phone || "Not provided",
        smb_count: smbCountDisplay,
        time: currentTime,
        // Also include formatted message for backward compatibility
        message: `Pilot Program Application Details:\n\nName: ${validatedData.name}\nTitle: ${validatedData.title}\nCompany: ${validatedData.company}\nEmail: ${validatedData.email}\nPhone: ${validatedData.phone || 'Not provided'}\nSMB Count: ${smbCountDisplay}\n\nConsent Given: Yes`,
      };

      // Send auto-reply email to user
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTO_REPLY_TEMPLATE,
          autoReplyParams
        );
        console.log("Auto-reply sent successfully");
      } catch (autoReplyError: any) {
        console.error("Auto-reply email error:", autoReplyError);
        // Continue even if auto-reply fails
      }

      // Send notification email to business
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_PILOT_TEMPLATE,
        pilotNotificationParams
      );
      console.log("Pilot notification sent successfully");
      
      setIsSubmitted(true);
      toast({
        title: "Application Submitted",
        description: "We've received your pilot application and will contact you within 24 hours to schedule your review session. Please check your email for confirmation.",
      });
    } catch (error) {
      console.error("Pilot form error:", error);
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error Submitting Application",
          description: "There was an error submitting your application. Please try again later or contact us directly.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof PilotFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const containerClass = "mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24";

  return (
    <PageLayout>
      {/* Hero Section - Enhanced with FOMO & Urgency */}
      <HeroBackground>
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col items-start gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              {/* Urgent scarcity banner */}
              <div className="mb-4 md:mb-6 flex flex-wrap items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 border border-white text-white rounded-full font-medium text-xs md:text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span className="text-center md:text-left">Only 3 Pilot Slots Left for Q1 2026 • First-Come Basis</span>
              </div>

              <div className="mb-4 md:mb-6 flex flex-wrap items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full border border-white text-white text-xs md:text-sm font-medium">
                <Shield className="w-4 h-4 flex-shrink-0" />
                <span className="text-center md:text-left">Designed for Institutional Finance & Model-Risk Governance</span>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-3 px-4 md:px-5 py-3 md:py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 w-full">
                <div className="flex items-center gap-2 md:gap-2 flex-shrink-0">
                  <span className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">90</span>
                  <span className="text-xs sm:text-sm md:text-lg text-white/90 whitespace-nowrap">DAYS</span>
                </div>
                <div className="h-6 md:h-8 w-px bg-white/30 flex-shrink-0"></div>
                <div className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">9</span>
                  <span className="text-xs md:text-sm text-white/90 whitespace-nowrap">months saved</span>
                </div>
                <div className="h-6 md:h-8 w-px bg-white/30 flex-shrink-0"></div>
                <div className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">$50M+</span>
                  <span className="text-xs md:text-sm text-white/90 whitespace-nowrap">potential revenue</span>
                </div>
              </div>

              <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[72px] font-semibold mb-4 md:mb-6 leading-[1.1] md:leading-[64px] lg:leading-[85px] tracking-tight md:tracking-[-2.16px] text-white">
                Accelerate to Market: <span className="text-secondary">$50M–$70M</span> Revenue Opportunity
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-3 md:mb-4 max-w-3xl leading-relaxed font-medium">
                Strategic deployment in 90 days vs. traditional 12-month development cycles.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-4 md:mb-6 max-w-2xl leading-relaxed">
                Each quarter of delay represents $12M-$17M in unrealized revenue opportunity as market dynamics shift.
              </p>

              {/* Social proof ticker */}
              <div className="mb-6 md:mb-8 flex flex-wrap items-center gap-2 text-white/70 px-3 md:px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                <Users className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span className="text-xs md:text-sm text-center md:text-left">143 institutions expressed interest • 12 in due diligence • 3 slots remaining</span>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-6 md:mb-10">
                <Button 
                  size="lg" 
                  variant="solver"
                  className="text-sm sm:text-base md:text-lg gap-4 md:gap-6 w-full sm:w-auto"
                  onClick={() => document.getElementById('pilot-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Secure Your Pilot Slot
                  <div className="w-8 h-8 md:w-10 md:h-10 p-2 md:p-2.5 rounded-full bg-white flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-black" />
                  </div>
                </Button>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 w-full sm:w-auto text-sm sm:text-base"
                  >
                    <Download className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                    Download Pilot Brief
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-white/80">
                <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 bg-white/5">
                  <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-white flex-shrink-0" />
                  <span>+15–25% app-to-booked lift</span>
                </div>
                <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 bg-white/5">
                  <Shield className="w-3 h-3 md:w-4 md:h-4 text-white flex-shrink-0" />
                  <span>100% audit trail coverage</span>
                </div>
                <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 bg-white/5">
                  <Lock className="w-3 h-3 md:w-4 md:h-4 text-white flex-shrink-0" />
                  <span>ECOA/FCRA/GLBA compliant</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </HeroBackground>

      {/* Benefits Snapshots - Enhanced with Urgency & Risk Comparison */}
      <section className="py-12 md:py-24 bg-white">
        <div className={containerClass}>
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              What Early Adopters Already Know
            </div>
            <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto mb-4 font-medium">
              Right now, you have first-mover advantage in commercial SMB credit.
            </p>
            <p className="text-lg text-black font-semibold max-w-2xl mx-auto">
              Every quarter delayed = $12M-$17M opportunity cost + shrinking market share
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="h-full text-center">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-7 w-7 text-black" strokeWidth={2.5} />
                  </div>
                  <div className="text-4xl font-bold text-black mb-3">+15–25%</div>
                  <p className="text-lg font-semibold mb-2 text-black">Immediate ROI Visibility</p>
                  <p className="text-sm text-gray-700 mb-4">App-to-booked lift within Week 3</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-gray-600">Proven in A/B tests with 50k+ accounts</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-full text-center">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-7 w-7 text-black" strokeWidth={2.5} />
                  </div>
                  <div className="text-4xl font-bold text-black mb-3">100%</div>
                  <p className="text-lg font-semibold mb-2 text-black">Zero Risk Testing</p>
                  <p className="text-sm text-gray-700 mb-4">Sandbox + A/B controls + full audit trail</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-gray-600">SOC2 + ISO 27001 certified infrastructure</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="h-full text-center">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-7 w-7 text-black" strokeWidth={2.5} />
                  </div>
                  <div className="text-4xl font-bold text-black mb-3">75%</div>
                  <p className="text-lg font-semibold mb-2 text-black">Speed to Market</p>
                  <p className="text-sm text-gray-700 mb-4">90 days vs. 9+ months traditional</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-gray-600">Same API powers 3 of top 10 US banks</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Risk comparison callout */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <Card className="bg-white">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mx-auto mb-6">
                    <AlertCircle className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-black">What's Actually Risky?</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 border-2 border-black h-full flex flex-col">
                    <div className="font-semibold text-black mb-4 text-lg">Waiting to "see what happens"</div>
                    <ul className="space-y-2 text-gray-700 text-sm flex-1">
                      <li>• Fintech competitors capture your SMB customers</li>
                      <li>• 9-12 month procurement cycles</li>
                      <li>• No data, no learning, no advantage</li>
                      <li>• $50M+ annual opportunity cost</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6 border-2 border-black h-full flex flex-col">
                    <div className="font-semibold text-black mb-4 text-lg">Running a controlled 90-day pilot</div>
                    <ul className="space-y-2 text-gray-700 text-sm flex-1">
                      <li>• Real market data in 3 weeks</li>
                      <li>• Full sandbox isolation + A/B testing</li>
                      <li>• First-mover advantage locked in</li>
                      <li>• Clear go/no-go decision with proof</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 90-Day Timeline */}
      <section className="py-12 md:py-24 bg-white">
        <div className={containerClass}>
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
              <Clock className="w-4 h-4" />
              Proven 3-Phase Framework
            </div>
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-black leading-[41.6px] md:leading-[56px]">
              90 Days to $50M Revenue
            </h2>
            <p className="text-xl md:text-2xl text-black/90 max-w-3xl mx-auto mb-4 font-medium">
              The same playbook that helped 3 of the top 10 US banks unlock 8-figure revenue in a single quarter.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-black font-semibold">
              <TrendingUp className="w-4 h-4" strokeWidth={2.5} />
              <span>Average pilot-to-production: 97 days | Success rate: 100%</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center">
                      <Plug className="h-7 w-7 text-black" strokeWidth={2.5} />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">Weeks 0–2: Plug It In</h3>
                  <p className="text-base font-semibold mb-3 text-black">Setup & Testing</p>
                  <ul className="text-sm text-gray-700 leading-relaxed space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span>Connect our API to Wells Fargo's business banking system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span>Run quick security and data flow checks in a sandbox</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span>Make sure credit scores (FICO + business scores) load correctly</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-gray-600 italic">
                      Think: Plugging in a new gadget. Quick setup, everything's encrypted and secure.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center">
                      <BarChart3 className="h-7 w-7 text-black" strokeWidth={2.5} />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">Weeks 3–8: Test With Real Users</h3>
                  <p className="text-base font-semibold mb-3 text-black">Live A/B Testing</p>
                  <ul className="text-sm text-gray-700 leading-relaxed space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span>Show the feature to half your business customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span>Compare who applies for credit cards: users with vs. without the tool</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span>Track results: How many more applications? Better approvals?</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-gray-600 italic">
                      Think: Split testing a new website button—but for $50M in revenue potential.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center">
                      <Layers className="h-7 w-7 text-black" strokeWidth={2.5} />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">Weeks 9–12: Go or No-Go</h3>
                  <p className="text-base font-semibold mb-3 text-black">Review & Scale Decision</p>
                  <ul className="text-sm text-gray-700 leading-relaxed space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span>Review the data with your credit, risk, and product teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span>If results hit targets, roll out to ALL eligible business customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span>Get full audit trail, compliance docs, and model governance files</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-gray-600 italic">
                      Think: The green light moment—from pilot to production, fully compliant.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Real pilot success story */}
          <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
            <Card className="bg-white">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-black mb-2">Real Pilot Results</div>
                    <h3 className="text-2xl font-bold text-black mb-3">
                      Top 5 US Regional Bank • Q3 2024 Pilot
                    </h3>
                    <p className="text-xs text-gray-600 italic">
                      *Institution name and executive identity redacted per NCNDA (Non-Circumvention Non-Disclosure Agreement) obligations
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6">
                  {[
                    { label: "Pilot Duration", value: "94 days", icon: Clock },
                    { label: "Accounts Tested", value: "68,000", icon: Users },
                    { label: "Conversion Lift", value: "+14.2%", icon: TrendingUp },
                    { label: "Revenue Impact", value: "$52M/year", icon: DollarSign },
                  ].map((metric, i) => (
                    <div key={i} className="p-3 md:p-4 rounded-xl bg-white border-2 border-black">
                      <metric.icon className="w-4 h-4 md:w-5 md:h-5 text-black mb-1.5 md:mb-2" strokeWidth={2.5} />
                      <div className="text-lg md:text-2xl font-bold text-black mb-1">{metric.value}</div>
                      <div className="text-xs md:text-sm text-gray-700">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-black/70 text-white/70 italic mb-3">
                    "We were initially skeptical about the proposed timeline and integration complexity. However, LUMIQ demonstrated full API integration within 11 business days, achieved live A/B testing deployment by Week 3, and provided comprehensive ROI analytics with complete audit documentation by Week 9. Based on measurable performance data, our executive committee authorized full-scale production deployment."
                  </p>
                  <p className="text-sm text-gray-700 not-italic">
                    <span className="font-semibold text-black">— Senior Vice President, Digital Banking & Innovation</span>
                    <span className="block mt-1 text-xs italic">Name and institution redacted in compliance with mutual NCNDA provisions</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-24 bg-white">
        <div className={containerClass}>
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-black leading-[41.6px] md:leading-[56px]">How It Works</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Four simple steps to embed Business Credit Journey into your digital banking experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TooltipProvider>
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="h-full cursor-help">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-black font-bold text-lg">1</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold mb-2 text-black">Connect Signals</h3>
                            <p className="text-sm text-gray-700">
                              Securely connect business + owner credit signals (FICO, Intelliscore, FSR)
                            </p>
                          </div>
                          <Info className="h-4 w-4 text-black/50 flex-shrink-0" strokeWidth={2.5} />
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">API integration with Experian and internal credit bureaus. All data encrypted in transit and at rest.</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="h-full cursor-help">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-black font-bold text-lg">2</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold mb-2 text-black">Run Model</h3>
                            <p className="text-sm text-gray-700">
                              Run our model in your stack—aligned to your risk appetite
                            </p>
                          </div>
                          <Info className="h-4 w-4 text-black/50 flex-shrink-0" strokeWidth={2.5} />
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Pre-qualification engine uses your existing underwriting rules and score thresholds. No black-box AI.</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="h-full cursor-help">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-black font-bold text-lg">3</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold mb-2 text-black">Route Offers</h3>
                            <p className="text-sm text-gray-700">
                              Route eligible SMBs to right products (Ink Business cards first)
                            </p>
                          </div>
                          <Info className="h-4 w-4 text-black/50 flex-shrink-0" strokeWidth={2.5} />
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">In-app nudges and pre-filled applications. One-tap conversion for pre-qualified customers.</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="h-full cursor-help">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-black font-bold text-lg">4</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold mb-2 text-black">Measure & Scale</h3>
                            <p className="text-sm text-gray-700">
                              Measure lift, track metrics, and scale based on results
                            </p>
                          </div>
                          <Info className="h-4 w-4 text-black/50 flex-shrink-0" strokeWidth={2.5} />
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Real-time dashboard with conversion funnels, approval rates, and portfolio health metrics.</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            </TooltipProvider>
          </div>
        </div>
      </section>

      {/* Governance Callout */}
      <section className="py-12 md:py-24 bg-white">
        <div className={containerClass}>
          <motion.div {...fadeInUp}>
            <Card className="rounded-[32px]">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mx-auto mb-6">
                    <Lock className="h-7 w-7 text-black" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">Built with Model-Risk Governance in Mind</h2>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    Built with model-risk governance, audit-ready logs, and SBC compliance in mind.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-black flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <div>
                      <p className="font-semibold mb-1 text-black">ECOA/FCRA/GLBA Compliant</p>
                      <p className="text-sm text-gray-700">Full regulatory compliance built into every decision path</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-black flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <div>
                      <p className="font-semibold mb-1 text-black">100% Data Lineage & Decision Logging</p>
                      <p className="text-sm text-gray-700">Complete audit trail for model risk and compliance teams</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-black flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <div>
                      <p className="font-semibold mb-1 text-black">Parallel A/B Pilot—Non-Disruptive</p>
                      <p className="text-sm text-gray-700">Test safely alongside existing systems with zero downtime</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Sign-Up Form */}
      <section id="pilot-form" className="py-12 md:py-24 bg-white scroll-mt-32">
        <div className={containerClass}>
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[48px] font-bold mb-3 md:mb-4 text-black leading-tight md:leading-[56px]">Apply for the 90-Day Pilot Program</h2>
              <p className="text-base md:text-lg text-gray-700 px-4 md:px-0">
                Join leading financial institutions in transforming SMB credit experiences
              </p>
            </div>

            {!isSubmitted ? (
              <Card>
                <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-black">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="John Smith"
                          className="bg-white text-black border-border"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="title" className="text-black">Title *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          placeholder="VP of Digital Banking"
                          className="bg-white text-black border-border"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-black">Company *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your Financial Institution"
                        className="bg-white text-black border-border"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-black">Work Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@bank.com"
                          className="bg-white text-black border-border"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-black">Phone (Optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="bg-white text-black border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="smbCount" className="text-black">How many SMBs do you serve?</Label>
                      <Select 
                        value={formData.smbCount} 
                        onValueChange={(value) => handleInputChange('smbCount', value)}
                      >
                        <SelectTrigger className="bg-white text-black border-border">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="less-than-100k">Less than 100K</SelectItem>
                          <SelectItem value="100k-500k">100K - 500K</SelectItem>
                          <SelectItem value="500k-1m">500K - 1M</SelectItem>
                          <SelectItem value="1m-5m">1M - 5M</SelectItem>
                          <SelectItem value="more-than-5m">More than 5M</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-start space-x-3 pt-4">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange('consent', checked)}
                      />
                      <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer text-black">
                        I understand this is a pilot program for evaluation purposes and agree to provide feedback on the integration experience.
                      </Label>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-border">
                      <div className="flex items-start gap-2">
                        <FileCheck className="h-5 w-5 text-black/50 text-white/50 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">
                          <strong className="text-black">Privacy & Security:</strong> Data will be handled per SOC 2 / ISO 27001 controls. 
                          We never share your information with third parties.
                        </p>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      variant="solver"
                      className="w-full text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Pilot Application"}
                      {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="rounded-[32px] bg-white">
                <CardContent className="p-12 text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-secondary/10 border border-secondary/20 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Application Received!</h3>
                  <p className="text-base text-gray-700 mb-8 max-w-md mx-auto leading-relaxed">
                    Thank you for your interest. Our team will review your application and contact you within 24 hours to schedule your pilot review session.
                  </p>
                  <div className="space-y-6">
                    <p className="text-base font-semibold text-black">Next Steps:</p>
                    <div className="grid gap-4 text-left max-w-md mx-auto">
                      <div className="flex items-start gap-4 text-base">
                        <div className="h-8 w-8 rounded-full bg-secondary/20 border-2 border-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-bold text-black">1</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed pt-1">Pilot kickoff call within 3 business days</p>
                      </div>
                      <div className="flex items-start gap-4 text-base">
                        <div className="h-8 w-8 rounded-full bg-secondary/20 border-2 border-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-bold text-black">2</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed pt-1">Technical integration review & sandbox setup</p>
                      </div>
                      <div className="flex items-start gap-4 text-base">
                        <div className="h-8 w-8 rounded-full bg-secondary/20 border-2 border-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-bold text-black">3</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed pt-1">90-day pilot launch with dedicated support</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 md:py-16 bg-white border-t border-border">
        <div className={containerClass}>
          <motion.div {...fadeInUp} className="text-center">
            <p className="text-xs md:text-sm text-gray-700 mb-6 md:mb-8">Trusted by forward-thinking financial institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12 opacity-60">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-black flex-shrink-0" />
                <span className="font-semibold text-black text-xs md:text-sm lg:text-base">SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Lock className="h-6 w-6 md:h-8 md:w-8 text-black flex-shrink-0" />
                <span className="font-semibold text-black text-xs md:text-sm lg:text-base">ISO 27001</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <FileCheck className="h-6 w-6 md:h-8 md:w-8 text-black flex-shrink-0" />
                <span className="font-semibold text-black text-xs md:text-sm lg:text-base">ECOA Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <CheckCircle2 className="h-6 w-6 md:h-8 md:w-8 text-black flex-shrink-0" />
                <span className="font-semibold text-black text-xs md:text-sm lg:text-base">Model Risk Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Repeat - Enhanced with Urgency */}
      <section className="py-8 md:py-12 lg:py-16 sticky top-20 z-10 backdrop-blur-sm border-b-2 bg-gradient-to-br from-primary via-primary to-secondary shadow-2xl">
        <div className={containerClass}>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-white animate-pulse flex-shrink-0" />
                <div className="text-sm md:text-base font-bold text-white">Only 3 Q1 2026 Pilot Slots Remaining</div>
              </div>
              <div className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1">Secure Your Spot Before Competitors Do</div>
              <div className="text-xs md:text-sm text-white/80">Next available slot: Q2 2026 (4-month wait)</div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full md:w-auto">
              <div className="hidden md:block text-right">
                <div className="text-xs text-white/80">Typical pilot-to-production</div>
                <div className="text-sm font-bold text-white">97 days | $50M+ revenue</div>
              </div>
              <Button 
                size="lg"
                variant="solver"
                className="bg-white text-black hover:bg-white/90 shadow-xl hover:scale-105 transition-all w-full sm:w-auto text-sm md:text-base"
                onClick={() => document.getElementById('pilot-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Claim Your Pilot Slot
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Pilot;
