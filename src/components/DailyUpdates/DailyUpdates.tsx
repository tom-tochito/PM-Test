import Image from "next/image";
import styles from "./DailyUpdates.module.css";
import Icon from "@/components/ui/Icon";

const articles = [
  {
    id: 1,
    date: "03 October 2025",
    title: "Gulf markets end mixed on Ukraine ceasefire hopes, tariff fears",
    excerpt:
      "Stock markets in the Gulf ended mixed on Wednesday, buoyed by Ukraine's readiness to support a proposal for...",
    image: "/assets/images/blog-image-2.png",
  },
];

export default function DailyUpdates() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.badge}>Daily Updates</span>
            <h2 className={styles.title}>
              Everything you need to trade the markets
            </h2>
          </div>
          <a href="#" className={styles.viewAll}>
            View all
            <Icon name="chevron-right-sm" width={6} height={12} />
          </a>
        </div>

        <div className={styles.grid}>
          <div className={styles.articleCard}>
            <div className={styles.articleImage}>
              <Image
                src="/assets/images/blog-image-2.png"
                alt="Article"
                width={276}
                height={202}
                className={styles.image}
              />
            </div>
            <div className={styles.articleContent}>
              <span className={styles.articleDate}>03 October 2025</span>
              <h3 className={styles.articleTitle}>
                Gulf markets end mixed on Ukraine ceasefire hopes, tariff fears
              </h3>
              <p className={styles.articleExcerpt}>
                Stock markets in the Gulf ended mixed on Wednesday, buoyed by
                Ukraine&apos;s readiness to support a proposal for...
              </p>
              <a href="#" className={styles.readMore}>
                Read more
              </a>
            </div>
          </div>

          <div className={styles.videoCard}>
            <Image
              src="/assets/images/laptop-video.png"
              alt="Trade CFDs with Premier Markets"
              fill
              className={styles.videoThumbnail}
            />
            <div className={styles.videoOverlay} />
            <button className={styles.playButton} aria-label="Play video">
              <Icon name="play" width={19} height={23} color="white" />
            </button>
          </div>

          <div className={styles.newsBar}>
            <Image
              src="/assets/images/market-cap-bg.png"
              alt=""
              fill
              className={styles.newsImage}
            />
            <div className={styles.newsOverlay} />
            <div className={styles.newsContent}>
              <h3 className={styles.newsTitle}>
                Premier Market - Market Cap Weighted PR (BKP)
              </h3>
              <p className={styles.newsDescription}>
                Stay ahead of the latest tech trends with our algorithmically selected
                portfolio of the 15 top tech stocks each month.
              </p>
              <div className={styles.newsTags}>
                <span>Google</span>
                <span>Trending</span>
                <span>investing.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
