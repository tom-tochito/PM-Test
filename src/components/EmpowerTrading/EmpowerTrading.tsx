import Image from "next/image";
import styles from "./EmpowerTrading.module.css";

const features = [
  {
    id: 1,
    icon: "/assets/images/feature-charting.png",
    title: "Charting tools and indicators",
    description:
      "Sharpen your analysis with an array of intuitive charts, drawing tools and 100+ indicators.",
    position: "top-left",
  },
  {
    id: 2,
    icon: "/assets/images/feature-leverage.png",
    title: "Get flexible leverage",
    description:
      "Trade larger positions and maximise your return potential with lower margin requirements.",
    position: "top-right",
  },
  {
    id: 3,
    icon: "/assets/images/feature-support.png",
    title: "Round-the-clock support",
    description:
      "Our dedicated experts are available 24/5 to guide and assist you at every step.",
    position: "bottom-left",
  },
  {
    id: 4,
    icon: "/assets/images/feature-alerts.png",
    title: "Customisable price alerts",
    description:
      "Set real-time alerts to track asset movements and stay ahead with your strategy.",
    position: "bottom-right",
  },
];

export default function EmpowerTrading() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Empower Your Trading</h2>
          <p className={styles.subtitle}>
            Unlock advanced tools, insights, and support to maximise your
            trading potential.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.centerIcon}>
            <svg
              width="40"
              height="26"
              viewBox="0 0 40 26"
              fill="none"
              className={styles.crossIcon}
            >
              <path
                d="M20 0V26M0 13H40"
                stroke="#ffa0a0"
                strokeWidth="4"
              />
            </svg>
          </div>

          {features.map((feature) => (
            <div
              key={feature.id}
              className={`${styles.featureCard} ${styles[feature.position.replace("-", "")]}`}
            >
              <div className={styles.featureIcon}>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={84}
                  height={84}
                />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}

          {/* Connection Lines */}
          <div className={styles.lines}>
            <div className={styles.lineTopLeft} />
            <div className={styles.lineTopRight} />
            <div className={styles.lineBottomLeft} />
            <div className={styles.lineBottomRight} />
          </div>
        </div>
      </div>
    </section>
  );
}
