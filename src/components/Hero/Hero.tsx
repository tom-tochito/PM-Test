import Image from "next/image";
import styles from "./Hero.module.css";
import Button from "@/components/ui/Button";

const tickerItems = [
  { flag: "🇺🇸", pair: "USD/EUR", trend: "up", value: "0.00014", change: "-234.45" },
  { flag: "🪙", pair: "XAUUSD", trend: "down", value: "0.00014", change: "-234.45" },
  { flag: "🇺🇸", pair: "USD/EUR", trend: "up", value: "0.00014", change: "-234.45" },
  { flag: "🪙", pair: "XAUUSD", trend: "down", value: "0.00014", change: "-234.45" },
];

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
          <div className={styles.phonesContainer}>
            <div className={styles.phoneBack}>
              <Image
                src="/assets/images/iphone-back.png"
                alt="iPhone back"
                width={406}
                height={632}
                className={styles.phoneImage}
                priority
              />
            </div>
            <div className={styles.phoneFront}>
              <div className={styles.phoneFrame}>
                <div className={styles.phoneScreen}>
                  <div className={styles.statusBar}>
                    <span className={styles.time}>9:41</span>
                    <div className={styles.statusIcons}>
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>
                  <div className={styles.appContent}>
                    <p className={styles.watchlistTitle}>My Watchlist</p>
                    <div className={styles.watchlistItems}>
                      <div className={styles.watchlistItem}>
                        <Image
                          src="/assets/images/stock-vanguard.png"
                          alt="Vanguard"
                          width={33}
                          height={32}
                          className={styles.stockIcon}
                        />
                        <div className={styles.stockInfo}>
                          <span className={styles.stockName}>Vanguard S&P 500</span>
                          <span className={styles.stockTicker}>VUSA</span>
                        </div>
                        <div className={styles.stockPrice}>
                          <span className={styles.price}>$75.48</span>
                          <span className={styles.priceUp}>+1.1575</span>
                        </div>
                      </div>
                      <div className={styles.watchlistItem}>
                        <Image
                          src="/assets/images/stock-ishares.png"
                          alt="iShares"
                          width={31}
                          height={32}
                          className={styles.stockIcon}
                        />
                        <div className={styles.stockInfo}>
                          <span className={styles.stockName}>iShares Core S&P 500</span>
                          <span className={styles.stockTicker}>IVV</span>
                        </div>
                        <div className={styles.stockPrice}>
                          <span className={styles.price}>$75.48</span>
                          <span className={styles.priceDown}>-0.10</span>
                        </div>
                      </div>
                      <div className={styles.watchlistItem}>
                        <Image
                          src="/assets/images/stock-invesco.png"
                          alt="Invesco"
                          width={32}
                          height={32}
                          className={styles.stockIcon}
                        />
                        <div className={styles.stockInfo}>
                          <span className={styles.stockName}>Invesco QQQ Trust</span>
                          <span className={styles.stockTicker}>QQQ</span>
                        </div>
                        <div className={styles.stockPrice}>
                          <span className={styles.price}>$75.48</span>
                          <span className={styles.priceUp}>+0.01</span>
                        </div>
                      </div>
                      <div className={styles.watchlistItem}>
                        <Image
                          src="/assets/images/stock-bitcoin.png"
                          alt="Bitcoin"
                          width={33}
                          height={32}
                          className={styles.stockIcon}
                        />
                        <div className={styles.stockInfo}>
                          <span className={styles.stockName}>21Shares Bitcoin Core</span>
                          <span className={styles.stockTicker}>CBTC</span>
                        </div>
                        <div className={styles.stockPrice}>
                          <span className={styles.price}>$75.48</span>
                          <span className={styles.priceDown}>-0.12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.homeIndicator} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className={styles.tickerItem}>
              <span className={styles.tickerFlag}>{item.flag}</span>
              <span className={styles.tickerPair}>{item.pair}</span>
              <svg
                className={styles.tickerTrend}
                width="24"
                height="12"
                viewBox="0 0 24 12"
                fill="none"
              >
                {item.trend === "up" ? (
                  <path d="M1 11L6 6L10 8L15 3L23 1" stroke="#22C55E" strokeWidth="2" />
                ) : (
                  <path d="M1 1L6 6L10 4L15 9L23 11" stroke="#EF4444" strokeWidth="2" />
                )}
              </svg>
              <span className={styles.tickerValue}>{item.value}</span>
              <span className={styles.tickerChange}>{item.change}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
