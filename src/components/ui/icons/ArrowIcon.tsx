interface ArrowIconProps {
  size?: number;
  variant?: "default" | "red";
  className?: string;
}

export default function ArrowIcon({
  size = 39,
  variant = "default",
  className,
}: ArrowIconProps) {
  const isRed = variant === "red";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity={isRed ? "1" : "0.15"}>
        <rect
          width="39"
          height="39"
          rx="19.5"
          transform="matrix(-1 0 0 1 39 0)"
          fill={isRed ? "#ED1D25" : "#151515"}
        />
        <path
          d="M25.6084 12.6709L13.9234 24.3559"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.6084 21.2427V12.6709H17.0366"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
