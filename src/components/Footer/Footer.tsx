import Image from "next/image";
import styles from "./Footer.module.css";
import Logo from "@/components/ui/Logo";

const quickLinks = ["About Us", "Our Markets", "Platforms", "Pricing"];
const supportLinks = ["Help Center", "FAQs", "Terms & Conditions", "Privacy Policy"];
const companyLinks = ["Careers", "News & Updates", "Partnerships", "Legal Documents"];

const socialIcons = [
  {
    name: "Facebook",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M18.9 0H1.1C.5 0 0 .5 0 1.1v17.8c0 .6.5 1.1 1.1 1.1h9.6v-7.7H8.1v-3h2.6V7c0-2.6 1.6-4 3.9-4 1.1 0 2.1.1 2.3.1v2.7h-1.6c-1.3 0-1.5.6-1.5 1.5v1.9h3l-.4 3h-2.6V20h5.1c.6 0 1.1-.5 1.1-1.1V1.1c0-.6-.5-1.1-1.1-1.1z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M18.5 0h-17C.7 0 0 .7 0 1.5v17c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zM6 17H3V8h3v9zM4.5 6.7c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7-.7 1.7-1.7 1.7zM17 17h-3v-4.4c0-1.1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3V17H8V8h2.9v1.2h0c.4-.8 1.4-1.6 2.8-1.6 3 0 3.6 2 3.6 4.5V17h-.3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 1.8c2.7 0 3 0 4 .1 1 0 1.5.2 1.9.3.5.2.8.4 1.1.7.3.3.6.7.7 1.1.1.4.3.9.3 1.9.1 1.1.1 1.4.1 4s0 3-.1 4c0 1-.2 1.5-.3 1.9-.2.5-.4.8-.7 1.1-.3.3-.7.6-1.1.7-.4.1-.9.3-1.9.3-1.1.1-1.4.1-4 .1s-3 0-4-.1c-1 0-1.5-.2-1.9-.3-.5-.2-.8-.4-1.1-.7-.3-.3-.6-.7-.7-1.1-.1-.4-.3-.9-.3-1.9-.1-1.1-.1-1.4-.1-4s0-3 .1-4c0-1 .2-1.5.3-1.9.2-.5.4-.8.7-1.1.3-.3.7-.6 1.1-.7.4-.1.9-.3 1.9-.3 1.1-.1 1.4-.1 4-.1zM10 0C7.3 0 7 0 5.9.1 4.8.1 4 .3 3.3.6c-.7.3-1.3.7-1.9 1.3S.6 3 .3 3.7C.1 4.3 0 5.1 0 6.2 0 7.3 0 7.6 0 10.3s0 3 .1 4.1c.1 1.1.3 1.9.6 2.6.3.7.7 1.3 1.3 1.9.6.6 1.2 1 1.9 1.3.7.3 1.5.5 2.6.6 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c1.1-.1 1.9-.3 2.6-.6.7-.3 1.3-.7 1.9-1.3.6-.6 1-1.2 1.3-1.9.3-.7.5-1.5.6-2.6.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.1-1.1-.3-1.9-.6-2.6-.3-.7-.7-1.3-1.3-1.9-.6-.6-1.2-1-1.9-1.3-.7-.3-1.5-.5-2.6-.6C13 0 12.7 0 10 0zm0 4.9c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.1-2.3 5.1-5.1-2.3-5.1-5.1-5.1zm0 8.4c-1.8 0-3.3-1.5-3.3-3.3S8.2 6.7 10 6.7s3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3zm6.5-8.6c0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2.7 0 1.2.5 1.2 1.2z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M19.6 5.2c-.2-.9-.9-1.6-1.8-1.8C16.2 3 10 3 10 3s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C0 6.8 0 10 0 10s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM8 13V7l5.2 3L8 13z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.3 1.9L10.8 9.5l7.2 9.6h-5.9l-4.6-6.2-5.3 6.2H.5l6.9-7.9L.5 1.9h6l4.2 5.7 5-5.7h1.6zm-1.5 15.3L4.9 3.8h1.6l10.9 13.4h-1.6z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Payment Methods */}
        <div className={styles.paymentSection}>
          <Image
            src="/assets/images/payment-methods.png"
            alt="Payment Methods"
            width={400}
            height={40}
            className={styles.paymentImage}
          />
        </div>

        <div className={styles.divider} />

        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          <div className={styles.brandSection}>
            <Logo variant="light" className={styles.logo} />
            <p className={styles.brandDescription}>
              CFDs are complex instruments and come with a high risk of losing
              money rapidly due to leverage. 21.38% of retail investor accounts
              generate profits when trading CFDs with this provider. You should
              consider whether you understand how CFDs work and whether you can
              afford to take the high risk of losing your money.
            </p>
            <div className={styles.socialLinks}>
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Quick links</h4>
              <ul className={styles.linkList}>
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Support</h4>
              <ul className={styles.linkList}>
                {supportLinks.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Company</h4>
              <ul className={styles.linkList}>
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Disclaimer */}
        <div className={styles.disclaimer}>
          <p>
            CFDs are complex instruments and come with a high risk of losing
            money rapidly due to leverage. 21.38% of retail investor accounts
            generate profits when trading CFDs with this provider. You should
            consider whether you understand how CFDs work and whether you can
            afford to take the high risk of losing your money.
          </p>
          <p>
            Premier Markets Ltd, trading as Premier Markets is a company
            incorporated under company number: A000003075 in Anguilla. Our
            registered office is located at Anguilla, The Valley, Kismet House,
            Sandy Hill, PO Box P.O.Box 174. The information on this site is not
            directed at residents of Russia, Afghanistan, Belgium, Canada,
            India, United States or any country or jurisdiction where such
            distribution or use would be contrary to local law, sanctions or
            regulation.
          </p>
        </div>

        <div className={styles.divider} />

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>Copyright © 2025 Premier Markets - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
