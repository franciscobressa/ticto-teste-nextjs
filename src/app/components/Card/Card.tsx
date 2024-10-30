import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
}
export default function Card({
  children,
  backgroundColor = "#fff",
  color = "var(--primary-text-color)",
}: CardProps) {
  return (
    <div style={{ backgroundColor, color }} className={styles.card}>
      {children}
    </div>
  );
}
