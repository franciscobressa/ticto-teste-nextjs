"use client";
import Image from "next/image";
import Card from "./components/Card/Card";
import CardHeader from "./components/Card/CardHeader/CardHeader";
import styles from "./page.module.css";
import CardBody from "./components/Card/CardBody/CardBody";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import {
  selectSaldoTotal,
  selectTotalEntrada,
  selectTotalSaida,
} from "@/store/reducers/financeiro";

export default function Home() {
  const isModalOpen = useAppSelector((state) => state.Financeiro.modal);
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.cardsWrapper}>
          <Card>
            <CardHeader>
              <div className="flex align-items-center justify-content-between">
                <span>Entradas</span>
                <Image
                  className={styles.logo}
                  src={"/images/icon-feather-green.svg"}
                  alt={"logo"}
                  width={19}
                  height={19}
                />
              </div>
            </CardHeader>
            <CardBody>
              R$ {useAppSelector(selectTotalEntrada).toFixed(2)}
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex align-items-center justify-content-between">
                <span>Saídas</span>
                <Image
                  className={styles.logo}
                  src={"/images/icon-feather-red.svg"}
                  alt={"logo"}
                  width={19}
                  height={19}
                />
              </div>
            </CardHeader>
            <CardBody>
              R$ {useAppSelector(selectTotalSaida).toFixed(2)}
            </CardBody>
          </Card>
          <Card
            backgroundColor={
              useAppSelector(selectSaldoTotal) >= 0
                ? "var(--green-text-color)"
                : "var(--red-text-color)"
            }
            color="var(--white-text-color)"
          >
            <CardHeader>
              <span>Saldo Total</span>
            </CardHeader>
            <CardBody>
              R$ {useAppSelector(selectSaldoTotal).toFixed(2)}
            </CardBody>
          </Card>
        </div>
        <List />
        {isModalOpen && <Modal />}
      </main>
    </div>
  );
}
