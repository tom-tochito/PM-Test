import Image from "next/image";
import styles from "./Hero.module.css";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const tickerItems = [
  { flags: ["/assets/images/flag-us.png", "/assets/images/flag-eu.png"], pair: "USD/EUR", trend: "up", value: "0.00014", change: "-234.45" },
  { flags: ["/assets/images/flag-au.png", "/assets/images/flag-us.png"], pair: "XAU/USD", trend: "down", value: "0.00014", change: "-234.45" },
  { flags: ["/assets/images/flag-us.png", "/assets/images/flag-eu.png"], pair: "USD/EUR", trend: "up", value: "0.00014", change: "-234.45" },
  { flags: ["/assets/images/flag-au.png", "/assets/images/flag-us.png"], pair: "XAU/USD", trend: "down", value: "0.00014", change: "-234.45" },
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
                      <Icon name="signal" width={18} height={12} color="white" />
                      <Icon name="wifi" width={16} height={12} color="white" />
                      <Icon name="battery" width={25} height={12} color="white" />
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
      <div className={styles.tickerWrapper}>
        <svg
          className={styles.tickerCurve}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,120 L0,60 Q360,0 720,40 T1440,60 L1440,120 Z"
            fill="white"
          />
        </svg>
        <div className={styles.ticker}>
          <div className={styles.tickerTrack}>
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <div key={index} className={styles.tickerItem}>
                <div className={styles.tickerFlags} data-count={item.flags.length}>
                  {item.flags.map((flag, flagIndex) => (
                    <Image
                      key={flagIndex}
                      src={flag}
                      alt=""
                      width={28}
                      height={20}
                      className={styles.tickerFlag}
                    />
                  ))}
                </div>
                <span className={styles.tickerPair}>{item.pair}</span>
                <Icon
                  name={item.trend === "up" ? "trend-up" : "trend-down"}
                  width={40}
                  height={16}
                  color={item.trend === "up" ? "#22C55E" : "#EF4444"}
                  className={styles.tickerTrend}
                />
                <span className={styles.tickerValue}>{item.value}</span>
                <span className={styles.tickerChange}>{item.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
