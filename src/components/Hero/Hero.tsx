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
                    <div className={styles.dynamicIsland} />
                    <div className={styles.statusIcons}>
                      <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                        <rect x="0" y="7" width="3" height="5" rx="0.5" fill="white"/>
                        <rect x="5" y="5" width="3" height="7" rx="0.5" fill="white"/>
                        <rect x="10" y="2" width="3" height="10" rx="0.5" fill="white"/>
                        <rect x="15" y="0" width="3" height="12" rx="0.5" fill="white"/>
                      </svg>
                      <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                        <path d="M8 2.5C10.7 2.5 13.2 3.5 15 5.2C15.3 5.5 15.3 6 15 6.3C14.7 6.6 14.2 6.6 13.9 6.3C12.4 4.9 10.3 4 8 4C5.7 4 3.6 4.9 2.1 6.3C1.8 6.6 1.3 6.6 1 6.3C0.7 6 0.7 5.5 1 5.2C2.8 3.5 5.3 2.5 8 2.5ZM8 6C9.8 6 11.4 6.7 12.6 7.8C12.9 8.1 12.9 8.6 12.6 8.9C12.3 9.2 11.8 9.2 11.5 8.9C10.6 8.1 9.4 7.5 8 7.5C6.6 7.5 5.4 8.1 4.5 8.9C4.2 9.2 3.7 9.2 3.4 8.9C3.1 8.6 3.1 8.1 3.4 7.8C4.6 6.7 6.2 6 8 6ZM9.5 10.5C9.5 11.3 8.8 12 8 12C7.2 12 6.5 11.3 6.5 10.5C6.5 9.7 7.2 9 8 9C8.8 9 9.5 9.7 9.5 10.5Z" fill="white"/>
                      </svg>
                      <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                        <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="white" strokeOpacity="0.5"/>
                        <rect x="2" y="2" width="18" height="8" rx="1.5" fill="white"/>
                        <path d="M23 4v4a2 2 0 0 0 0-4Z" fill="white" fillOpacity="0.5"/>
                      </svg>
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
