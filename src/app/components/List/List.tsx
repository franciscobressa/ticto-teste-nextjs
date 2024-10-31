"use client";
import style from "./List.module.css";
import DeleteButton from "../DeleteButton/DeleteButton";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import FormatDate from "@/common/utils/FormatDate";

export default function List() {
  const financeiroList = useAppSelector((state) => state.Financeiro.list);
  return (
    <div className={style.listWrapper}>
      <div className={style.list}>
        <div className={style.gridContainer}>
          <div className={style.gridItem}>
            <span className={style.muted}>Descrição</span>
          </div>
          <div className={style.gridItem}>
            <span className={style.muted}>Valor</span>
          </div>
          <div className={style.gridItem}>
            <span className={style.muted}>Categoria</span>
          </div>
          <div className={style.gridItem}>
            <span className={style.muted}>Data</span>
          </div>
        </div>
        {financeiroList.map((item, index) => {
          return (
            <div key={index} className={style.listItemWrapper}>
              <div className={style.listItem}>
                <div className={style.gridContainer}>
                  <div className={style.gridItem}>{item.categoria}</div>
                  <div
                    className={style.gridItem}
                    style={{
                      color:
                        item.movimentacao === "entrada"
                          ? "var(--green-text-color)"
                          : "var(--red-text-color)",
                      fontWeight: "bold",
                    }}
                  >
                    R$ {item.valor}
                  </div>
                  <div className={style.gridItem}>{item.categoria}</div>
                  <div className={style.gridItem}>{FormatDate(item.data)}</div>
                  <div className={style.gridItem}>
                    <DeleteButton />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
