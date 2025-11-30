import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, FileCheck, AlertTriangle } from "lucide-react";

function Security() {
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
              <Lock className="w-8 h-8 text-primary" />
              <h1 className="font-display text-[40px] md:text-[56px] font-bold text-foreground">
                Security Policy
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade security designed for financial institutions
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
                <CardTitle>Security Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  LUMIQ AI's credit intelligence platform is built with security-first architecture designed to meet the stringent requirements of financial institutions. Our infrastructure, processes, and controls align with SOC 2 Type II, ISO 27001, and banking industry security standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  Data Encryption & Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Encryption at Rest</h3>
                  <p className="text-sm text-muted-foreground">
                    All data stored in our systems is encrypted using AES-256 encryption. Database volumes, backups, and archived data are encrypted with keys managed through AWS KMS or equivalent HSM-backed key management systems.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Encryption in Transit</h3>
                  <p className="text-sm text-muted-foreground">
                    All data transmission occurs over TLS 1.3 with perfect forward secrecy. API communications use mutual TLS (mTLS) for enhanced authentication and confidentiality.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">PII Minimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Personally identifiable information (PII) is minimized throughout the platform. Where possible, data is pseudonymized or tokenized. Credit decisioning uses hashed identifiers with full PII retained only within the financial institution's controlled environment.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Access Control & Authentication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Role-Based Access Control (RBAC)</h3>
                  <p className="text-sm text-muted-foreground">
                    Access is granted based on the principle of least privilege. Users receive only the permissions necessary for their role (business owner, banker, risk analyst, compliance officer, system administrator).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Multi-Factor Authentication (MFA)</h3>
                  <p className="text-sm text-muted-foreground">
                    All administrative and privileged access requires multi-factor authentication. We support TOTP, hardware tokens, and integration with enterprise SSO providers (Okta, Azure AD).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Session Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Sessions are time-limited with automatic logout after inactivity. Concurrent session limits prevent credential sharing. All authentication events are logged and monitored.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Infrastructure Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Deployment Options</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li><strong>Wells Fargo Hosted:</strong> Platform deployed entirely within Wells Fargo's controlled infrastructure</li>
                    <li><strong>Segregated VPC:</strong> Dedicated virtual private cloud with Wells Fargo-approved network controls</li>
                    <li><strong>Hybrid:</strong> Models and analytics in vendor environment; all sensitive data remains in Wells Fargo systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Network Security</h3>
                  <p className="text-sm text-muted-foreground">
                    All environments are protected by multiple layers of firewalls, intrusion detection/prevention systems (IDS/IPS), and DDoS mitigation. Network segmentation isolates production, staging, and development environments.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Vulnerability Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Regular vulnerability scans, penetration testing (annual minimum), and automated security patching. Critical security patches are applied within 48 hours of vendor release.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-primary" />
                  Compliance & Audit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Certifications & Standards</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>SOC 2 Type II (Security, Availability, Confidentiality)</li>
                    <li>ISO 27001 Information Security Management</li>
                    <li>FCRA-aligned credit reporting controls</li>
                    <li>GLBA Safeguards Rule compliance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Audit Logging</h3>
                  <p className="text-sm text-muted-foreground">
                    All system access, data queries, model executions, and administrative actions are logged with immutable audit trails. Logs are retained for 7 years and available for regulatory examination.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Data Lineage</h3>
                  <p className="text-sm text-muted-foreground">
                    Full data lineage tracking from source systems through transformations to final credit decisions. Every score, recommendation, and adverse action can be traced back to source data with complete explainability.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Application Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Secure Development Lifecycle</h3>
                  <p className="text-sm text-muted-foreground">
                    All code undergoes security review, static analysis (SAST), and dependency scanning before deployment. Third-party libraries are vetted for known vulnerabilities.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">API Security</h3>
                  <p className="text-sm text-muted-foreground">
                    RESTful APIs use OAuth 2.0 / JWT authentication with rate limiting, input validation, and output encoding. GraphQL endpoints implement query depth limits and field-level authorization.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Change Management</h3>
                  <p className="text-sm text-muted-foreground">
                    All production changes follow formal change control processes with security review, testing in staging environments, and rollback procedures.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Incident Response</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">24/7 Monitoring</h3>
                  <p className="text-sm text-muted-foreground">
                    Security Information and Event Management (SIEM) with real-time alerting for suspicious activity, unauthorized access attempts, and anomalous data patterns.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Incident Response Plan</h3>
                  <p className="text-sm text-muted-foreground">
                    Documented procedures for detecting, containing, investigating, and remediating security incidents. Notification protocols include affected financial institutions and regulators as required.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Breach Notification</h3>
                  <p className="text-sm text-muted-foreground">
                    In the event of a data breach affecting credit data, we will notify affected parties within 72 hours and comply with all applicable breach notification laws.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Continuity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Backup & Recovery</h3>
                  <p className="text-sm text-muted-foreground">
                    Automated daily backups with point-in-time recovery. Backups are encrypted and replicated across multiple geographic regions. Recovery Time Objective (RTO): 4 hours. Recovery Point Objective (RPO): 1 hour.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Disaster Recovery</h3>
                  <p className="text-sm text-muted-foreground">
                    Tested disaster recovery plans with annual tabletop exercises. Failover to secondary data center within 2 hours for critical services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  Reporting Security Concerns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you discover a security vulnerability or have security concerns, please report them immediately:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:security@futeurcredx.com" className="text-primary hover:underline font-medium">security@futeurcredx.com</a>
                  </p>
                  <p className="text-muted-foreground">
                    Phone: <a href="tel:+12129374610" className="text-primary hover:underline font-medium">212-937-4610</a> (24/7 Security Hotline)
                  </p>
                  <p className="text-xs text-muted-foreground mt-4">
                    We appreciate responsible disclosure and will work with security researchers to address reported vulnerabilities promptly.
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

export default Security;
