"use client";

import { useState } from "react";
import styles from "./Testimonials.module.css";

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
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path
                  d="M14 24H8C8 17.373 13.373 12 20 12V16C15.582 16 12 19.582 12 24V24H14C16.209 24 18 25.791 18 28V32C18 34.209 16.209 36 14 36H10C7.791 36 6 34.209 6 32V24H14Z"
                  fill="currentColor"
                />
                <path
                  d="M38 24H32C32 17.373 37.373 12 44 12V16C39.582 16 36 19.582 36 24V24H38C40.209 24 42 25.791 42 28V32C42 34.209 40.209 36 38 36H34C31.791 36 30 34.209 30 32V24H38Z"
                  fill="currentColor"
                />
              </svg>
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
