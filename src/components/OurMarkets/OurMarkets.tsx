"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./OurMarkets.module.css";
import Icon from "@/components/ui/Icon";

const categories = [
  { id: "most-traded", label: "Most Traded" },
  { id: "commodities", label: "Commodities" },
  { id: "indices", label: "Indices" },
  { id: "cryptocurrencies", label: "Cryptocurrencies" },
  { id: "shares", label: "Shares" },
  { id: "etfs", label: "ETFs" },
];

const marketData = [
  { id: 1, symbol: "BTC", name: "Bitcoin", price: "524,0", change: "+3,25%", positive: true, icon: "/assets/images/btc.svg" },
  { id: 2, symbol: "BTC", name: "Bitcoin", price: "524,0", change: "+3,25%", positive: true, icon: "/assets/images/btc.svg" },
  { id: 3, symbol: "BTC", name: "Bitcoin", price: "524,0", change: "+3,25%", positive: true, icon: "/assets/images/btc.svg" },
  { id: 4, symbol: "BTC", name: "Bitcoin", price: "524,0", change: "+3,25%", positive: true, icon: "/assets/images/btc.svg" },
  { id: 5, symbol: "ETH", name: "Ethereum", price: "524,0", change: "+3,25%", positive: true, icon: "/assets/images/eth.png" },
];

const timeframes = ["1d", "1h", "4h", "1m", "5m", "15m", "30m", "1w"];

export default function OurMarkets() {
  const [activeCategory, setActiveCategory] = useState("most-traded");
  const [activeTimeframe, setActiveTimeframe] = useState("1h");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Markets</h2>
          <p className={styles.subtitle}>
            Stay informed with the data that matters, on 17,000+ markets. Get
            the latest news, trader sentiment, spreads, price action and much
            more.
          </p>
          <div className={styles.categories}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.categoryBtn} ${
                  activeCategory === cat.id ? styles.active : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.marketList}>
            {marketData.map((market) => (
              <div
                key={market.id}
                className={styles.marketCard}
              >
                <div className={styles.marketInfo}>
                  <div className={styles.marketIcon}>
                    <Image
                      src={market.icon}
                      alt={market.symbol}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className={styles.marketDetails}>
                    <span className={styles.marketSymbol}>{market.symbol}</span>
                    <span className={styles.marketName}>{market.name}</span>
                  </div>
                </div>
                <div className={styles.marketPricing}>
                  <span className={styles.price}>₽ {market.price}</span>
                  <span
                    className={`${styles.change} ${
                      market.positive ? styles.positive : styles.negative
                    }`}
                  >
                    {market.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.chartArea}>
            <div className={styles.chartHeader}>
              <div className={styles.goldCard}>
                <div className={styles.goldBars} />
                <Icon name="expand" size={17} className={styles.expandIcon} />
                <h3 className={styles.goldTitle}>Gold</h3>
                <div className={styles.goldPrices}>
                  <div className={styles.buyPrice}>
                    <span className={styles.priceLabel}>Buy</span>
                    <span className={styles.priceValue}>3773.31</span>
                    <Icon name="arrow-right" size={11} className={styles.priceArrow} />
                  </div>
                  <div className={styles.sellPrice}>
                    <span className={styles.priceLabel}>Sell</span>
                    <span className={styles.priceValue}>3773.61</span>
                    <Icon name="arrow-right" size={11} className={styles.priceArrow} />
                  </div>
                </div>
              </div>
              <div className={styles.statsWrapper}>
                <div className={styles.statsCard}>
                  <div className={styles.statRow}>
                    <span className={styles.statLabel}>Buyers</span>
                    <div className={styles.statBarWrapper}>
                      <span className={styles.statValue}>66.93%</span>
                    </div>
                    <span className={styles.low}>Low: 3686.38</span>
                  </div>
                  <div className={styles.statRow}>
                    <span className={styles.statLabel}>Seller</span>
                    <div className={styles.statBarWrapper}>
                      <span className={styles.statValue}>66.93%</span>
                    </div>
                    <span className={styles.high}>High: 3788.96</span>
                  </div>
                </div>
                <a href="#" className={styles.browseLink}>
                  Browse all markets
                  <Icon name="chevron-right" size={24} className={styles.browseLinkIcon} />
                </a>
              </div>
            </div>
            <div className={styles.chartWrapper}>
              <div className={styles.chart}>
                <Image
                  src="/assets/images/xau-chart.svg"
                  alt="XAU/USD Trading Chart"
                  width={663}
                  height={343}
                  className={styles.chartImage}
                />
              </div>
              <div className={styles.timeframes}>
                {timeframes.map((tf) => (
                  <button
                    key={tf}
                    className={`${styles.timeframeBtn} ${
                      activeTimeframe === tf ? styles.activeTimeframe : ""
                    }`}
                    onClick={() => setActiveTimeframe(tf)}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.disclaimerWrapper}>
              <Icon name="info" size={12} className={styles.infoIcon} />
              <span className={styles.disclaimer}>
                Past performance is not a reliable indicator of future results
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
