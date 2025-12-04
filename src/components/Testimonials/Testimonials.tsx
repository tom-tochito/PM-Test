"use client";

import { useState } from "react";
import styles from "./Testimonials.module.css";
import Icon from "@/components/ui/Icon";

const testimonials = [
  {
    id: 1,
    text: "Premier Markets has completely transformed my trading experience. The platform is intuitive, and the spreads are the best I've found.",
    author: "Sarah M.",
    role: "Professional Trader",
  },
  {
    id: 2,
    text: "The customer support team is exceptional. They're available 24/5 and always help me with any questions I have about my trades.",
    author: "James K.",
    role: "Day Trader",
  },
  {
    id: 3,
    text: "I've been trading for 10 years and Premier Markets offers the most competitive pricing I've seen. Highly recommended!",
    author: "Michael R.",
    role: "Institutional Investor",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            What <span className={styles.highlight}>Premier Traders</span>
            <br />
            are saying about us
          </h2>
        </div>

        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>
              <Icon name="quote" size={48} />
            </div>
            <p className={styles.testimonialText}>
              {testimonials[activeIndex].text}
            </p>
            <div className={styles.author}>
              <div className={styles.authorAvatar}>
                {testimonials[activeIndex].author.charAt(0)}
              </div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>
                  {testimonials[activeIndex].author}
                </span>
                <span className={styles.authorRole}>
                  {testimonials[activeIndex].role}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.dots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === activeIndex ? styles.activeDot : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
