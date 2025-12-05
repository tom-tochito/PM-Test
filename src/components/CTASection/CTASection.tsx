import Image from "next/image";
import styles from "./CTASection.module.css";
import Button from "@/components/ui/Button";

const steps = [
  { number: "1", title: "Register" },
  { number: "2", title: "Fund" },
  { number: "3", title: "Start Trading" },
];

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <div className={styles.steps}>
              {steps.map((step) => (
                <div key={step.number} className={styles.step}>
                  <div className={styles.stepCircle}>
                    <span className={styles.stepNumber}>{step.number}</span>
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
              ))}
            </div>
            <p className={styles.description}>
              Ready to trade smarter? Get instant access to global markets with
              reliable tools and 24/5 support.
            </p>
            <Button variant="secondary" size="lg" className={styles.ctaButton}>
              Get Started
            </Button>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/images/cta-hand-phone.png"
              alt="Trading on mobile"
              width={703}
              height={468}
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
