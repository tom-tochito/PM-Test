import Image from "next/image";
import styles from "./SeamlessWithdrawals.module.css";
import Icon from "@/components/ui/Icon";

const features = [
  {
    icon: "/assets/images/Rocket.svg",
    title: "Ultra-Fast Processing",
    description:
      "Over 99% of withdrawals processed within 24 hours, based on verified 2025 internal performance data.",
  },
  {
    icon: "/assets/images/tick.svg",
    title: "Secure & Transparent",
    description:
      "Tier 1 banking and custody partners keep your funds protected at every stage.",
  },
  {
    icon: "/assets/images/star.svg",
    title: "Effortless Access",
    description:
      "Enjoy quick withdrawals with no hidden fees and a smooth, seamless process.",
  },
];

export default function SeamlessWithdrawals() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.featuresColumn}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.iconBox}>
                <Image src={feature.icon} alt="" width={24} height={24} />
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.imageColumn}>
          <div className={styles.phoneWrapper}>
            <Image
              src="/assets/images/mobile-hand.png"
              alt="Mobile Trading App"
              width={800}
              height={641}
              className={styles.phoneImage}
            />
          </div>

          {/* Mastercard logo */}
          <div className={styles.mastercardBadge}>
            <Image
              src="/assets/images/mastercard.svg"
              alt="Mastercard"
              width={148}
              height={78}
            />
          </div>

          {/* Notification card */}
          <div className={styles.notificationCard}>
            <div className={styles.notificationAvatar}>
              <Image
                src="/assets/images/avatar-john.png"
                alt="John Smith"
                width={40}
                height={40}
              />
            </div>
            <div className={styles.notificationContent}>
              <span className={styles.notificationLabel}>Premier Markets</span>
              <span className={styles.notificationName}>John Smith</span>
              <span className={styles.notificationStatus}>
                <span className={styles.statusPercent}>100%</span> withdrawal completed
              </span>
            </div>
          </div>

          {/* Cursor */}
          <div className={styles.cursorIcon}>
            <Icon name="cursor" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
