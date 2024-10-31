"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import style from "./Modal.module.css";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { cadastraRegistro, setModalCadastro } from "@/store/actions/financeiro";
import { Movimentacao } from "@/store/reducers/financeiro";
import { useAppSelector } from "@/common/hooks/useAppSelector";

export default function Modal() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [tipo, setTipo] = useState<Movimentacao>(Movimentacao.ENTRADA);
  const [categoria, setCategoria] = useState("");

  const dispatch = useAppDispatch();
  const financeiroListLength = useAppSelector(
    (state) => state.Financeiro.list.length
  );
  const handleCadastro = () => {
    if (!nome || !preco || !categoria) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    dispatch(
      cadastraRegistro({
        id: financeiroListLength + 1,
        descricao: nome,
        categoria,
        data: String(new Date()),
        movimentacao: tipo,
        valor: preco,
      })
    );

    dispatch(setModalCadastro(false));
  };

  function formatPrice(value: string): string {
    const cleanedValue = value.replace(/\D/g, "");

    const integerPart = cleanedValue.slice(0, -2) || "0";
    const decimalPart = cleanedValue.slice(-2).padStart(2, "0");

    return parseFloat(integerPart).toLocaleString("pt-BR") + "," + decimalPart;
  }

  return (
    <div
      onClick={() => dispatch(setModalCadastro(false))}
      className={style.modalOverlay}
    >
      <div onClick={(e) => e.stopPropagation()} className={style.modal}>
        <div className={style.modalHeader}>
          <span
            className="pointer"
            onClick={() => dispatch(setModalCadastro(false))}
          >
            x
          </span>
        </div>
        <h4>Cadastrar Transação</h4>

        <form className={style.modalForm} onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="Nome"
            type="text"
            name="nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Preço"
            name="preco"
            required
            value={preco}
            onChange={(e) => {
              const value = e.target.value;
              setPreco(formatPrice(value));
            }}
          />
          <div className={style.radioGroup}>
            <input
              type="radio"
              id="entrada"
              name="tipo"
              value={Movimentacao.ENTRADA}
              checked={tipo === "entrada"}
              onChange={() => setTipo(Movimentacao.ENTRADA)}
              className={style.radioInput}
            />
            <label htmlFor="entrada" className={style.radioLabel}>
              <Image
                height={20}
                width={20}
                alt="excluir"
                src={"/images/arrow-up.svg"}
              />
              Entrada
            </label>

            <input
              type="radio"
              id="saida"
              name="tipo"
              value={Movimentacao.SAIDA}
              checked={tipo === "saida"}
              onChange={() => setTipo(Movimentacao.SAIDA)}
              className={style.radioInput}
            />
            <label htmlFor="saida" className={style.radioLabel}>
              <Image
                height={20}
                width={20}
                alt="excluir"
                src={"/images/arrow-down.svg"}
              />
              Saída
            </label>
          </div>
          <input
            type="text"
            placeholder="Categoria"
            name="categoria"
            required
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </form>

        <Button
          fullWidth
          bold
          buttonFunction={handleCadastro}
          text="CADASTRAR"
        />
      </div>
    </div>
  );
}
