import Image from "next/image";
import styles from "./Footer.module.css";
import Logo from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";

const quickLinks = ["About Us", "Our Markets", "Platforms", "Pricing"];
const supportLinks = ["Help Center", "FAQs", "Terms & Conditions", "Privacy Policy"];
const companyLinks = ["Careers", "News & Updates", "Partnerships", "Legal Documents"];

const socialIcons = [
  { name: "Facebook", icon: "facebook" },
  { name: "LinkedIn", icon: "linkedin" },
  { name: "Instagram", icon: "instagram" },
  { name: "YouTube", icon: "youtube" },
  { name: "Twitter", icon: "twitter" },
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
                  <Icon name={social.icon} size={20} />
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
