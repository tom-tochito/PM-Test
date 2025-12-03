import Image from "next/image";
import styles from "./Logo.module.css";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const logoSrc =
    variant === "light"
      ? "/assets/images/logo-light.svg"
      : "/assets/images/logo.svg";

  return (
    <div className={`${styles.logo} ${className}`}>
      <Image
        src={logoSrc}
        alt="Premier Markets"
        width={160}
        height={46}
        priority
      />
    </div>
  );
}
