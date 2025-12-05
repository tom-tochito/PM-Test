import styles from "./Testimonials.module.css";
import Icon from "@/components/ui/Icon";
import { testimonials } from "@/constants";

export default function Testimonials() {
  const column1 = testimonials.filter((t) => t.column === 1);
  const column2 = testimonials.filter((t) => t.column === 2);
  const column3 = testimonials.filter((t) => t.column === 3);

  return (
    <section className={styles.section}>
      <div className={styles.gradientGlow} />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            What <span className={styles.highlight}>Premier</span> Traders
            <br />
            are saying about us
          </h2>
          <p className={styles.subtitle}>
            Join a growing community of professionals who rely on our platform to
            trade smarter every day.
          </p>
          <div className={styles.navArrows}>
            <button className={styles.navArrow} aria-label="Previous">
              <Icon name="chevron-left" size={16} />
            </button>
            <button className={styles.navArrow} aria-label="Next">
              <Icon name="chevron-right" size={16} />
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            {column1.map((testimonial) => (
              <div key={testimonial.id} className={styles.card}>
                <p className={styles.text}>{testimonial.text}</p>
                <div className={styles.divider} />
                <div className={styles.authorRow}>
                  <div className={styles.avatar}>
                    <span className={styles.initials}>{testimonial.initials}</span>
                  </div>
                  <span className={styles.authorName}>{testimonial.author}</span>
                  <div className={styles.platformIcon}>
                    <Icon name={testimonial.icon} size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.column}>
            {column2.map((testimonial) => (
              <div key={testimonial.id} className={styles.card}>
                <p className={styles.text}>{testimonial.text}</p>
                <div className={styles.divider} />
                <div className={styles.authorRow}>
                  <div className={styles.avatar}>
                    <span className={styles.initials}>{testimonial.initials}</span>
                  </div>
                  <span className={styles.authorName}>{testimonial.author}</span>
                  <div className={styles.platformIcon}>
                    <Icon name={testimonial.icon} size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.column}>
            {column3.map((testimonial) => (
              <div key={testimonial.id} className={styles.card}>
                <p className={styles.text}>{testimonial.text}</p>
                <div className={styles.divider} />
                <div className={styles.authorRow}>
                  <div className={styles.avatar}>
                    <span className={styles.initials}>{testimonial.initials}</span>
                  </div>
                  <span className={styles.authorName}>{testimonial.author}</span>
                  <div className={styles.platformIcon}>
                    <Icon name={testimonial.icon} size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
