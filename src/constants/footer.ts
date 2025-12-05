export const quickLinks = ["About Us", "Our Markets", "Platforms", "Pricing"];
export const supportLinks = ["Help Center", "FAQs", "Terms & Conditions", "Privacy Policy"];
export const companyLinks = ["Careers", "News & Updates", "Partnerships", "Legal Documents"];

export interface PaymentMethod {
  name: string;
  src: string;
  width: number;
  height: number;
}

export const paymentMethods: PaymentMethod[] = [
  { name: "PayPal", src: "/assets/images/paypal.svg", width: 80, height: 20 },
  { name: "Mastercard", src: "/assets/images/mastercard1.svg", width: 50, height: 30 },
  { name: "Skrill", src: "/assets/images/Skrill.svg", width: 60, height: 20 },
  { name: "Apple Pay", src: "/assets/images/applepay.svg", width: 50, height: 20 },
  { name: "Visa", src: "/assets/images/Visa.svg", width: 60, height: 20 },
];

export interface SocialIcon {
  name: string;
  icon: string;
}

export const socialIcons: SocialIcon[] = [
  { name: "Facebook", icon: "facebook" },
  { name: "LinkedIn", icon: "linkedin" },
  { name: "Instagram", icon: "instagram" },
  { name: "YouTube", icon: "youtube" },
  { name: "Twitter", icon: "twitter" },
];
