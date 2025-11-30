import { useState } from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, Briefcase, Scale, Headphones } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import HeroBackground from "@/components/HeroBackground";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, { message: "First name is required" }).max(50, { message: "First name must be less than 50 characters" }),
  lastName: z.string().trim().min(1, { message: "Last name is required" }).max(50, { message: "Last name must be less than 50 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(2000, { message: "Message must be less than 2000 characters" }),
});

function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // For now, just show success message
      // In production, this would send to an email service or backend
      console.log("Form submitted:", validatedData);

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll get back to you within 24-48 hours.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Validation Error",
          description: "Please check the form and try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Mail className="w-4 h-4" />
            Get in Touch
          </motion.div>

          <h1 className="font-display text-[48px] md:text-[64px] lg:text-[72px] font-bold mb-6 leading-[1.1] text-white">
            We're Here to Help, 24/7
          </h1>

          <p className="text-xl md:text-2xl text-white/95 mb-4 max-w-4xl leading-relaxed font-semibold">
            Whether you're exploring Wells Fargo Business Credit Close-Up or need technical assistance, our team is ready to assist you.
          </p>

          <p className="text-base text-white/80 mb-10 max-w-3xl leading-relaxed">
            Reach out today and discover how our solutions can transform your credit intelligence strategy.
          </p>
        </div>
      </HeroBackground>

      {/* Contact Methods */}
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
              Ignite the Conversation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Let's start a journey together. Connect with the right team for your specific needs.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-2 border-primary/30 hover:border-primary/50 transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Business Inquiries</h3>
                  <p className="text-sm text-muted-foreground mb-4">Pilot programs, partnerships, and enterprise solutions</p>
                  <a href="mailto:business@futeurcredx.com" className="text-sm font-medium text-primary hover:underline">
                    business@futeurcredx.com
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full border-2 border-secondary/30 hover:border-secondary/50 transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <Scale className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Legal Inquiries</h3>
                  <p className="text-sm text-muted-foreground mb-4">Compliance, contracts, and legal matters</p>
                  <a href="mailto:legal@futeurcredx.com" className="text-sm font-medium text-secondary hover:underline">
                    legal@futeurcredx.com
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full border-2 border-primary/30 hover:border-primary/50 transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Headphones className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Technical Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">Integration assistance and technical questions</p>
                  <a href="mailto:support@futeurcredx.com" className="text-sm font-medium text-primary hover:underline">
                    support@futeurcredx.com
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 border-primary/30 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">NEW YORK OFFICE</h3>
                    <p className="text-muted-foreground mb-6">Where Opportunity Never Sleeps.<br />Welcome to the Heart of It All.</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-foreground">17 State Street, Floor 40</p>
                          <p className="text-sm text-muted-foreground">New York, NY 10004</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <a href="tel:+12129374610" className="text-sm text-foreground hover:text-primary transition">
                          212-937-4610
                        </a>
                      </div>
                    </div>

                    <Button className="mt-6" variant="outline" asChild>
                      <a href="https://maps.google.com/?q=17+State+Street,+Floor+40,+New+York,+New+York+10004" target="_blank" rel="noopener noreferrer">
                        Get Directions
                      </a>
                    </Button>
                  </div>

                  <div className="h-64 md:h-auto bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <MapPin className="w-24 h-24 text-primary/40" />
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
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
              Get in Touch With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're here to help! Whether you have questions about our services, need assistance, or want to provide feedback, our team is ready to assist you.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 border-muted">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <a href="mailto:support@futeurcredx.com" className="text-lg font-semibold text-foreground hover:text-primary transition">
                        support@futeurcredx.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <a href="tel:+18003967295" className="text-lg font-semibold text-foreground hover:text-primary transition">
                        +1 800-396-7295
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Clock className="w-5 h-5" />
                    <p>Available Monday to Friday, 9 AM - 6 PM EST</p>
                  </div>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className={errors.firstName ? "border-destructive" : ""}
                        />
                        {errors.firstName && (
                          <p className="text-xs text-destructive">{errors.firstName}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          className={errors.lastName ? "border-destructive" : ""}
                        />
                        {errors.lastName && (
                          <p className="text-xs text-destructive">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john.doe@example.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">How can we help you? *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your inquiry..."
                        rows={6}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Contact;
