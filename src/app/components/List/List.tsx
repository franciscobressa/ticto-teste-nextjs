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
        <div className={style.listItemWrapper}>
          <div className={style.listItem}>
            <div className={style.gridContainer}>
              <div className={style.gridItem}>Salário</div>
              <div className={style.gridItem}>R$ 899,00</div>
              <div className={style.gridItem}>Educação</div>
              <div className={style.gridItem}>12/02/2022 às 13h24</div>
              <div className={style.gridItem}>
                <DeleteButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      {financeiroList.map((item, index) => {
        return (
          <div key={index} className={style.listItemWrapper}>
            <div className={style.listItem}>
              <div className={style.gridContainer}>
                <div className={style.gridItem}>{item.categoria}</div>
                <div className={style.gridItem}>R$ {item.valor}</div>
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
  );
}
