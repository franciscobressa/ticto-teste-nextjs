"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import Button from "../Button/Button";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Image
          className={styles.logo}
          src={"/images/logo.svg"}
          alt={"logo"}
          width={186}
          height={35}
        />{" "}
        <Button
          buttonFunction={() => alert("Nova Transação")}
          text="NOVA TRANSAÇÃO"
        />
      </div>
    </header>
  );
}
