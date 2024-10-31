"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import { setModalCadastro } from "@/store/actions/financeiro";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
export default function Header() {
  const dispatch = useAppDispatch();
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
          <Button
            buttonFunction={() => dispatch(setModalCadastro(true))}
            text="NOVA TRANSAÇÃO"
          />
        </div>
      </header>
    </>
  );
}
