import styles from "./Icon.module.css";

interface IconProps {
  name: string;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export default function Icon({
  name,
  size,
  width,
  height,
  color = "currentColor",
  className = "",
}: IconProps) {
  const iconWidth = width ?? size ?? 24;
  const iconHeight = height ?? size ?? 24;

  return (
    <svg
      className={`${styles.icon} ${className}`}
      width={iconWidth}
      height={iconHeight}
      style={{ color }}
      aria-hidden="true"
    >
      <use href={`/assets/icons/sprite.svg#icon-${name}`} />
    </svg>
  );
}
