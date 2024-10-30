"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useState } from "react";
export default function Header() {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <Image
            className={styles.logo}
            src={"/images/logo.svg"}
            alt={"logo"}
            width={186}
            height={35}
          />
          <Button buttonFunction={() => setModal(true)} text="NOVA TRANSAÇÃO" />
        </div>
      </header>
      {!!modal && <Modal setModal={setModal} />}
    </>
  );
}
