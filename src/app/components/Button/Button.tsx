import styles from "./Button.module.css";
interface ButtonProps {
  text: string;
  fullWidth?: boolean;
  bold?: boolean;
  buttonFunction: () => void;
}
export default function Button({
  text,
  buttonFunction,
  fullWidth = false,
  bold = false,
}: ButtonProps) {
  return (
    <button
      style={{
        width: !!fullWidth ? "100%" : "",
        fontWeight: !!bold ? "bold" : "",
      }}
      onClick={buttonFunction}
      className={styles.button}
    >
      {text}
    </button>
  );
}
