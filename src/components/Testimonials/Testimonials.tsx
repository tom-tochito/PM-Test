import styles from "./Testimonials.module.css";
import Icon from "@/components/ui/Icon";

const testimonials = [
  // Column 1
  {
    id: 1,
    text: "I'm new in trading and I really like that Premier let me start small. I can trade crypto and few other assets easy. Withdrawls are quick too. Help Center is simple to use and I learned a lot from there.",
    author: "Adam Keller",
    initials: "AK",
    icon: "trustpilot",
    column: 1,
  },
  {
    id: 2,
    text: "My experince with PM is perfect so far. Payouts come same day few hours max. Works good with both crypto and credit card. You can take money out many times per day and no hidden fees. Spreads are ok too 😊",
    author: "Marco Lazzari",
    initials: "ML",
    icon: "earth",
    column: 1,
  },
  {
    id: 3,
    text: "Good service ☺️\nNever had a single problem with withdraw. Usually takes under 24 hours. You get update when it's submitted and when it's done. Got many assets to trade and the spreads are not bad. And mT5  Thank you!",
    author: "TradeAce92",
    initials: "TA",
    icon: "trustpilot",
    column: 1,
  },
  // Column 2
  {
    id: 4,
    text: "Premier works well for me. KYC was fast and support people (Thx milos!!) 🤗 helped me right away when I had a question. I was able to deposit and start trading in same day. Withdrawal came to my bank after 2 days. All smooth.",
    author: "Lucas Vermeer",
    initials: "LV",
    icon: "trustpilot",
    column: 2,
  },
  {
    id: 5,
    text: "I think Premier's trading cost are low compare to others. Spreads are good on most pairs, deposit is free, for withdraw they have a small fee but it's fine. Thanks guys",
    author: "Petar Ilic",
    initials: "PL",
    icon: "email",
    column: 2,
  },
  {
    id: 6,
    text: "Multiple withdraws made, all success. Used both bank and international transfer. Also few friends joined from my referral and no issue for them. Been here long time, still all fine.",
    author: "Shivani Kaur",
    initials: "SK",
    icon: "earth",
    column: 2,
  },
  // Column 3
  {
    id: 7,
    text: "Been using Premier for about 3 months now. Card deposits go through right away and show in balance within a minute. I withdraw my profit each month and it's always in my bank by end of day. Very happy.",
    author: "David Lorens",
    initials: "DL",
    icon: "email",
    column: 3,
  },
  {
    id: 8,
    text: "Premier is a serious broker. Web platform looks nice and runs good. Support reply quick and helpful. Sometimes small slippage in busy time but nothing crazy. Commisions are low so I stay here.",
    author: 'Mark "Clips" Renard',
    initials: "MR",
    icon: "email",
    column: 3,
  },
  {
    id: 9,
    text: "Deposit and withdraws are fast. One time my payout came before my bank even show the deduction lol. Trade speed is good and data feed fast too. Feels like pro level broker.",
    author: "Mateusz Durek",
    initials: "MD",
    icon: "email",
    column: 3,
  },
];

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
