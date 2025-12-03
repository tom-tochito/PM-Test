import styles from "./AccessMarkets.module.css";

const trustBadges = [
  { value: "17,000+", label: "Markets" },
  { value: "50,000+", label: "Traders" },
  { value: "24/5", label: "Support" },
  { value: "0.0", label: "Spreads from" },
];

export default function AccessMarkets() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Access <span className={styles.highlight}>17,000+</span>
            <br />
            markets all in one
          </h2>
          <p className={styles.description}>
            Trade forex, indices, commodities, shares, ETFs, and
            cryptocurrencies all from a single powerful platform.
          </p>
        </div>
        <div className={styles.badges}>
          {trustBadges.map((badge) => (
            <div key={badge.label} className={styles.badge}>
              <span className={styles.badgeValue}>{badge.value}</span>
              <span className={styles.badgeLabel}>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
