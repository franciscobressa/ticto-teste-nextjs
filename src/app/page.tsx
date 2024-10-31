"use client";
import Image from "next/image";
import Card from "./components/Card/Card";
import CardHeader from "./components/Card/CardHeader/CardHeader";
import styles from "./page.module.css";
import CardBody from "./components/Card/CardBody/CardBody";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";
import { useAppSelector } from "@/common/hooks/useAppSelector";
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
            <CardBody>R$ 12156,00</CardBody>
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
            <CardBody>R$ 12156,00</CardBody>
          </Card>
          <Card
            backgroundColor="var(--success-color)"
            color="var(--white-text-color)"
          >
            <CardHeader>
              <span>Saldo Total</span>
            </CardHeader>
            <CardBody>R$ 12156,00</CardBody>
          </Card>
        </div>
        <List />
        {isModalOpen && <Modal />}
      </main>
    </div>
  );
}
