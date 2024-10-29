import styles from "./Button.module.css";
interface ButtonProps {
  text: string;
  buttonFunction: () => void;
}
export default function Button({ text, buttonFunction }: ButtonProps) {
  return (
    <button onClick={buttonFunction} className={styles.button}>
      {text}
    </button>
  );
}
