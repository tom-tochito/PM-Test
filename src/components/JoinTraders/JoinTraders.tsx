import Image from "next/image";
import styles from "./JoinTraders.module.css";
import Button from "@/components/ui/Button";

export default function JoinTraders() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Join <span className={styles.highlight}>50,000+</span>
            <br />
            traders who trust us
          </h2>
        </div>
        <div className={styles.right}>
          <p className={styles.description}>
            Experience advanced trading tools, transparent and competitive
            pricing, lightning-fast execution, and dedicated support trusted by
            traders worldwide.
          </p>
          <div className={styles.actions}>
            <Button variant="primary" size="lg">
              Start Trading
            </Button>
            <Button variant="outline" size="lg">
              Try Demo Account
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/images/trading-interface.png"
          alt="Trading Interface"
          width={600}
          height={400}
          className={styles.tradingImage}
        />
        <div className={styles.promoCard}>
          <div className={styles.promoCardContent}>
            <h3 className={styles.promoTitle}>
              Everything you need to trade the markets
            </h3>
            <Button variant="primary" size="md">
              Explore Accounts
            </Button>
          </div>
          <div className={styles.promoImageWrapper}>
            <Image
              src="/assets/images/mobile-promo.png"
              alt="Mobile Trading"
              width={200}
              height={300}
              className={styles.promoImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
