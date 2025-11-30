import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

function Privacy() {
  return (
    <PageLayout>
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto w-full px-5 md:px-[5vw] max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <h1 className="font-display text-[40px] md:text-[56px] font-bold text-foreground">
                Privacy Policy
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Last Updated: January 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  This Privacy Policy describes how LUMIQ AI and FuteurCredX ("we", "us", or "our") collect, use, and protect information in connection with the Wells Fargo Business Credit Close-Up demonstration and pilot program.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Contact Information</h3>
                  <p className="text-sm text-muted-foreground">
                    When you submit inquiries or request pilot information, we collect your name, email address, company information, and any messages you provide.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Business Credit Data (Pilot Participants Only)</h3>
                  <p className="text-sm text-muted-foreground">
                    During pilot programs, we may access business credit data including owner FICO scores, business credit scores (FICO SBSS, Experian FSR), internal banking relationship data, and transaction patterns. All data remains within the financial institution's controlled environment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Usage Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    We collect anonymized usage data to improve platform performance, including page views, feature usage, and technical diagnostics.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>To respond to inquiries and provide pilot program information</li>
                  <li>To deliver credit intelligence services during authorized pilot programs</li>
                  <li>To generate risk scores, pre-qualification insights, and portfolio analytics</li>
                  <li>To improve platform functionality and user experience</li>
                  <li>To comply with legal and regulatory requirements (FCRA, ECOA, GLBA)</li>
                  <li>To maintain audit trails and explainability documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security & Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Encryption & Access Controls</h3>
                  <p className="text-sm text-muted-foreground">
                    All data is encrypted at rest and in transit using industry-standard protocols. Access is restricted through role-based access controls (RBAC) and multi-factor authentication.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Infrastructure Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Our platform is SOC 2 Type II compliant and follows ISO 27001 standards. Data can be deployed within financial institution's own infrastructure or in a segregated vendor VPC with Wells Fargo-approved security controls.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Data Minimization</h3>
                  <p className="text-sm text-muted-foreground">
                    We collect only the minimum data necessary for credit intelligence services. PII is minimized and pseudonymized where possible.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Contact information is retained for business purposes unless you request deletion. Pilot program data is retained according to contractual agreements with participating financial institutions, typically 3-7 years for compliance and audit purposes. All data retention aligns with FCRA, ECOA, and banking regulatory requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Sharing & Third Parties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  We do not sell or rent personal information. Data may be shared only in the following circumstances:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>With the financial institution you represent, as part of authorized pilot programs</li>
                  <li>With credit bureaus (Experian, Equifax, TransUnion, D&B) for authorized credit decisioning</li>
                  <li>With service providers under strict data processing agreements (hosting, analytics)</li>
                  <li>When required by law, regulation, or legal process</li>
                  <li>To protect against fraud, security threats, or legal liability</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground mb-2">You have the right to:</p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>Access the information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your contact information (subject to legal retention requirements)</li>
                  <li>Opt out of marketing communications</li>
                  <li>Receive an explanation of automated credit decisions (adverse action rights under FCRA)</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  To exercise these rights, contact us at <a href="mailto:privacy@futeurcredx.com" className="text-primary hover:underline">privacy@futeurcredx.com</a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our platform is designed to comply with Fair Credit Reporting Act (FCRA), Equal Credit Opportunity Act (ECOA), Gramm-Leach-Bliley Act (GLBA), and applicable banking regulations. We maintain full data lineage, explainability documentation, and audit trails to support regulatory examinations and adverse action reporting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies & Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This demonstration site uses essential cookies for functionality and anonymized analytics to improve user experience. We do not use third-party advertising cookies or sell tracking data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We may update this Privacy Policy periodically. Material changes will be communicated via email to pilot participants and posted on this page with an updated "Last Updated" date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  For privacy-related questions or concerns, contact:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-foreground">FuteurCredX / LUMIQ AI</p>
                  <p className="text-muted-foreground">17 State Street, Floor 40</p>
                  <p className="text-muted-foreground">New York, NY 10004</p>
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:privacy@futeurcredx.com" className="text-primary hover:underline">privacy@futeurcredx.com</a>
                  </p>
                  <p className="text-muted-foreground">
                    Phone: <a href="tel:+12129374610" className="text-primary hover:underline">212-937-4610</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Privacy;
