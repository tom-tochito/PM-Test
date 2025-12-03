"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

const navItems = [
  {
    label: "Trading",
    hasDropdown: true,
    items: [
      { label: "Forex", href: "#" },
      { label: "Indices", href: "#" },
      { label: "Commodities", href: "#" },
      { label: "Shares", href: "#" },
    ],
  },
  {
    label: "Discover",
    hasDropdown: true,
    items: [
      { label: "Platforms", href: "#" },
      { label: "Tools", href: "#" },
      { label: "Education", href: "#" },
    ],
  },
  {
    label: "Promotions",
    hasDropdown: true,
    items: [
      { label: "Welcome Bonus", href: "#" },
      { label: "Cashback", href: "#" },
    ],
  },
  {
    label: "Company",
    hasDropdown: true,
    items: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    label: "Partner with us",
    hasDropdown: false,
    isHighlighted: true,
    href: "#",
  },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className={styles.header}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.accountType}>
            <span className={styles.activeType}>Personal</span>
            <span className={styles.separator}>|</span>
            <span>Institutional</span>
          </div>
          <div className={styles.topLinks}>
            <span>WebTrader</span>
            <span className={styles.separator}>|</span>
            <span>Support</span>
            <span className={styles.separator}>|</span>
            <span>Open Demo</span>
            <span className={styles.separator}>|</span>
            <div className={styles.languageSelector}>
              <Image
                src="/assets/images/flag-en.png"
                alt="English"
                width={24}
                height={24}
                className={styles.flag}
              />
              <span>EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <Logo variant="dark" />
          </div>

          {/* Desktop Navigation */}
          <div className={styles.navItems} ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.label} className={styles.navItemWrapper}>
                {item.hasDropdown ? (
                  <>
                    <button
                      className={styles.navItem}
                      onClick={() => handleDropdownToggle(item.label)}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg
                        className={`${styles.chevron} ${openDropdown === item.label ? styles.chevronOpen : ""}`}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {openDropdown === item.label && item.items && (
                      <div
                        className={styles.dropdown}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className={styles.dropdownItem}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={`${styles.navItem} ${item.isHighlighted ? styles.highlighted : ""}`}
                  >
                    {item.label}
                    {item.isHighlighted && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className={styles.arrowIcon}
                      >
                        <path
                          d="M2 6H10M10 6L6 2M10 6L6 10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <Button variant="primary" size="sm">
              Register
            </Button>
            <a href="#" className={styles.userIcon} aria-label="User profile">
              <Image
                src="/assets/images/user-icon.svg"
                alt=""
                width={24}
                height={26}
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className={styles.mobileNav}>
          {navItems.map((item) => (
            <div key={item.label} className={styles.mobileNavItem}>
              {item.hasDropdown ? (
                <>
                  <button
                    className={styles.mobileNavButton}
                    onClick={() => handleDropdownToggle(item.label)}
                  >
                    {item.label}
                    <svg
                      className={`${styles.chevron} ${openDropdown === item.label ? styles.chevronOpen : ""}`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {openDropdown === item.label && item.items && (
                    <div className={styles.mobileDropdown}>
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className={styles.mobileDropdownItem}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className={`${styles.mobileNavButton} ${item.isHighlighted ? styles.highlighted : ""}`}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
          <div className={styles.mobileActions}>
            <Button variant="primary" size="md">
              Register
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
