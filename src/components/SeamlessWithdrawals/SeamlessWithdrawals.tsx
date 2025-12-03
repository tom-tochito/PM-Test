import Image from "next/image";
import styles from "./SeamlessWithdrawals.module.css";
import Button from "@/components/ui/Button";

export default function SeamlessWithdrawals() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>Effortlessly mobile</span>
          <h2 className={styles.title}>Seamless Withdrawals</h2>
          <p className={styles.description}>
            Enjoy fast, secure, and hassle-free withdrawals with multiple
            payment options tailored to your needs.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span>Same-day processing</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span>No hidden fees</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span>Multiple payment methods</span>
            </div>
          </div>
          <Button variant="primary" size="lg">
            Learn More
          </Button>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/images/mobile-hand.png"
            alt="Mobile Trading App"
            width={500}
            height={600}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
