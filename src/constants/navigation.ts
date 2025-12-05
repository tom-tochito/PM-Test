export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  hasDropdown: boolean;
  items?: NavSubItem[];
  isHighlighted?: boolean;
  href?: string;
}

export const navItems: NavItem[] = [
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
