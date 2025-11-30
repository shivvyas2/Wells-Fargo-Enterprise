import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

function Terms() {
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
              <FileText className="w-8 h-8 text-primary" />
              <h1 className="font-display text-[40px] md:text-[56px] font-bold text-foreground">
                Terms of Service
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
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing or using the Wells Fargo Business Credit Close-Up demonstration site and related LUMIQ AI services (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Services.
                </p>
                <p className="text-muted-foreground mt-4">
                  This demonstration site is intended for evaluation purposes by Wells Fargo and authorized representatives. Production deployment and pilot programs are governed by separate Master Service Agreements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Service Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  LUMIQ AI provides enterprise credit intelligence services including:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>Unified business credit scoring (owner FICO + business credit scores)</li>
                  <li>AI-powered risk assessment and pre-qualification decisioning</li>
                  <li>Portfolio health monitoring and early warning detection</li>
                  <li>Product recommendation engines and cross-sell opportunities</li>
                  <li>Compliance-ready audit trails and explainability documentation</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Services are delivered via RESTful API integration into existing banking systems. All credit decisioning remains subject to financial institution approval and policy overlays.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Authorized Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Permitted Use</h3>
                  <p className="text-sm text-muted-foreground">
                    You may use the Services only for lawful business purposes in connection with evaluating or deploying business credit intelligence capabilities. You agree to comply with all applicable laws, including Fair Credit Reporting Act (FCRA), Equal Credit Opportunity Act (ECOA), and Gramm-Leach-Bliley Act (GLBA).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Prohibited Activities</h3>
                  <p className="text-sm text-muted-foreground mb-2">You may not:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                    <li>Reverse engineer, decompile, or disassemble the Services</li>
                    <li>Use the Services for consumer credit decisions without proper FCRA permissible purpose</li>
                    <li>Attempt to gain unauthorized access to systems or data</li>
                    <li>Interfere with or disrupt the Services or servers</li>
                    <li>Use the Services to discriminate in violation of ECOA or fair lending laws</li>
                    <li>Resell or redistribute the Services without authorization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Ownership & Usage Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Customer Data</h3>
                  <p className="text-sm text-muted-foreground">
                    Financial institutions retain all ownership rights to their customer data, transaction data, and relationship data. LUMIQ AI processes this data solely to provide Services and does not claim ownership.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Credit Bureau Data</h3>
                  <p className="text-sm text-muted-foreground">
                    Credit reports and scores from Experian, Equifax, TransUnion, and D&B are used pursuant to separate agreements with those bureaus. Use is limited to permissible purposes under FCRA.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Aggregated Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    LUMIQ AI may use de-identified, aggregated data to improve models and services. No individual customer information is used without authorization.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The Services, including all software, models, algorithms, documentation, and related intellectual property, are owned by FuteurCredX / LUMIQ AI and protected by copyright, trademark, and trade secret laws. These Terms do not grant you any ownership rights in the Services.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  "LUMIQ AI", "FuteurCredX", and associated logos are trademarks of FuteurCredX. Wells Fargo trademarks are used with permission solely for demonstration purposes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Service Availability & Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Uptime Commitment</h3>
                  <p className="text-sm text-muted-foreground">
                    Production services target 99.9% uptime, excluding scheduled maintenance. Specific SLAs are defined in Master Service Agreements for pilot and production deployments.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Maintenance Windows</h3>
                  <p className="text-sm text-muted-foreground">
                    Scheduled maintenance occurs during off-peak hours with advance notice. Emergency maintenance may occur with minimal notice to address security or availability issues.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Technical Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Support is available Monday-Friday, 9 AM - 6 PM EST via email (support@futeurcredx.com) or phone (212-937-4610). Production deployments include 24/7 critical incident support.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Disclaimer of Warranties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
                <p className="text-sm text-muted-foreground">
                  LUMIQ AI does not guarantee that credit scores, recommendations, or pre-qualification decisions are accurate, complete, or appropriate for all use cases. Financial institutions are responsible for validating model outputs and maintaining final credit decisioning authority.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, LUMIQ AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, DATA LOSS, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES.
                </p>
                <p className="text-sm text-muted-foreground">
                  IN NO EVENT SHALL LUMIQ AI'S TOTAL LIABILITY EXCEED THE AMOUNTS PAID BY YOU FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you. Master Service Agreements may contain different liability provisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Indemnification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  You agree to indemnify and hold harmless LUMIQ AI from any claims, damages, liabilities, and expenses (including reasonable attorneys' fees) arising out of: (a) your use of the Services in violation of these Terms, (b) your violation of applicable laws or regulations, (c) your violation of FCRA, ECOA, GLBA, or fair lending requirements, or (d) unauthorized access to Services using your credentials.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Compliance with Credit Reporting Laws</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Use of credit information through the Services is subject to FCRA requirements. You certify that you have a permissible purpose under 15 U.S.C. § 1681b for accessing credit reports and scores.
                </p>
                <p className="text-sm text-muted-foreground">
                  You agree to provide adverse action notices as required by FCRA and ECOA when credit decisions result in denial, counteroffer, or adverse terms. LUMIQ AI provides explainability documentation to support adverse action reporting but does not issue notices on your behalf.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Term & Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  These Terms remain in effect while you access or use the Services. Either party may terminate access with 30 days' written notice. LUMIQ AI may immediately suspend or terminate access for violation of these Terms or applicable laws.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Upon termination, you must cease using the Services. Provisions related to confidentiality, intellectual property, liability limitations, and dispute resolution survive termination.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  LUMIQ AI reserves the right to modify these Terms at any time. Material changes will be communicated via email or in-platform notification. Continued use of the Services after changes constitutes acceptance of modified Terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>13. Governing Law & Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Governing Law</h3>
                  <p className="text-sm text-muted-foreground">
                    These Terms are governed by the laws of the State of New York, without regard to conflict of law principles.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Dispute Resolution</h3>
                  <p className="text-sm text-muted-foreground">
                    Any disputes arising from these Terms shall be resolved through binding arbitration administered by the American Arbitration Association in New York, NY. Each party bears its own costs. Judgment on arbitration awards may be entered in any court of competent jurisdiction.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>14. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  For questions about these Terms, contact:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-foreground">FuteurCredX / LUMIQ AI</p>
                  <p className="text-muted-foreground">17 State Street, Floor 40</p>
                  <p className="text-muted-foreground">New York, NY 10004</p>
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:legal@futeurcredx.com" className="text-primary hover:underline">legal@futeurcredx.com</a>
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

export default Terms;
