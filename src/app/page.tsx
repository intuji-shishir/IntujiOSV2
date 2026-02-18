import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroContent}>
            <span className={styles.badge}>v2.0 Now Available</span>
            <h1 className={styles.title}>
              The Operating System <br />
              for the Future of Work
            </h1>
            <p className={styles.subtitle}>
              IntujiOS seamlessly integrates your workflow, team collaboration,
              and business intelligence into one unified, beautiful interface.
            </p>
            <div className={styles.ctaGroup}>
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="secondary">View Demo</Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className={styles.features} id="features">
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Everything you need</h2>
              <p className={styles.sectionSubtitle}>
                Powerful features designed to supercharge your productivity and streamline your operations.
              </p>
            </div>

            <div className={styles.grid}>
              <Card>
                <div className={styles.featureIcon}>⚡</div>
                <h3 className={styles.featureTitle}>Lightning Fast</h3>
                <p className={styles.featureDesc}>
                  Built on next-gen architecture for instant load times and real-time updates across all your devices.
                </p>
              </Card>
              <Card>
                <div className={styles.featureIcon}>🔒</div>
                <h3 className={styles.featureTitle}>Enterprise Security</h3>
                <p className={styles.featureDesc}>
                  Bank-grade encryption and role-based access control to keep your data safe and compliant.
                </p>
              </Card>
              <Card>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Advanced Analytics</h3>
                <p className={styles.featureDesc}>
                  Gain deep insights into your business performance with our integrated dashboard and reporting tools.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <Card className={styles.ctaCard} hoverEffect={false}>
              <h2 className={styles.sectionTitle} style={{ marginBottom: "24px" }}>
                Ready to transform your workflow?
              </h2>
              <Button size="lg">Start Your Free Trial</Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
