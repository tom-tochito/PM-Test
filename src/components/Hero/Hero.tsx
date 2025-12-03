import Image from "next/image";
import styles from "./Hero.module.css";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Trade <span className={styles.highlight}>Forex</span>
            <br />
            with Premier Markets
          </h1>
          <p className={styles.subtitle}>
            Access global markets with advanced trading tools, competitive
            spreads, and institutional grade execution.
          </p>
          <div className={styles.actions}>
            <Button variant="secondary" size="lg">
              Start Trading
            </Button>
            <Button variant="ghost" size="lg">
              Try Demo Account
            </Button>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.phoneWrapper}>
            <Image
              src="/assets/images/iphone-mockup.png"
              alt="Premier Markets Trading App"
              width={406}
              height={632}
              className={styles.phoneImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
