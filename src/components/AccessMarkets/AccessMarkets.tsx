import styles from "./AccessMarkets.module.css";
import {
  CoinIcon,
  GraphIcon,
  AnalyticsIcon,
  EarthIcon,
  ArrowIcon,
  GroupIcon,
  TickIcon,
} from "@/components/ui/icons";

const featurePills = [
  { icon: CoinIcon, label: "$0 Deposit Fees" },
  { icon: GroupIcon, label: "Spreads from 0.0 pips" },
  { icon: TickIcon, label: "Secure Funds" },
];

const marketCards = [
  {
    icon: CoinIcon,
    title: "Forex",
    description:
      "Trade the world's largest financial market. Access deep liquidity, tight spreads, and constant opportunity across major and minor currency pairs.",
  },
  {
    icon: GraphIcon,
    title: "Stocks",
    description:
      "From Wall Street to global tech leaders, follow the world's leading companies and react to market moves in real time.",
  },
  {
    icon: AnalyticsIcon,
    title: "Indices",
    description:
      "Trade major global indices with deep liquidity, precise execution, and competitive spreads across key markets.",
  },
  {
    icon: EarthIcon,
    title: "Commodities",
    description:
      "Tap into global demand and supply trends by trading essential resources such as oil, gas, and agricultural products.",
  },
];

export default function AccessMarkets() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.stripes}>
          {[...Array(11)].map((_, i) => (
            <div
              key={i}
              className={styles.stripe}
              style={{ left: `${i * 135}px` }}
            />
          ))}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Access <span className={styles.highlight}>17,000+</span>
            <br />
            markets all in one
          </h2>
          <p className={styles.subtitle}>
            Trade forex, shares, indices, and commodities with competitive
            spreads, deep liquidity, and seamless execution.
          </p>
        </div>

        <div className={styles.pills}>
          {featurePills.map((pill) => {
            const PillIcon = pill.icon;
            return (
              <div key={pill.label} className={styles.pill}>
                <PillIcon size={24} className={styles.pillIcon} />
                <span>{pill.label}</span>
              </div>
            );
          })}
        </div>

        <div className={styles.cards}>
          {marketCards.map((card) => {
            const CardIcon = card.icon;
            return (
              <div key={card.title} className={styles.card}>
                <div className={styles.cardIcon}>
                  <CardIcon size={50} />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <div className={styles.cardDivider} />
                <p className={styles.cardDescription}>{card.description}</p>
                <div className={styles.cardArrow}>
                  <ArrowIcon variant="default" className={styles.arrowDefault} />
                  <ArrowIcon variant="red" className={styles.arrowHover} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
