import Image from "next/image";
import Button from "../Button/Button";
import style from "./Modal.module.css";

interface ModalProps {
  setModal: (modal: boolean) => void;
}

export default function Modal({ setModal }: ModalProps) {
  return (
    <div onClick={() => setModal(false)} className={style.modalOverlay}>
      <div onClick={(e) => e.stopPropagation()} className={style.modal}>
        <div className={style.modalHeader}>
          <span className="pointer" onClick={() => setModal(false)}>
            x
          </span>
        </div>
        <h4>Cadastrar Transação</h4>

        <form className={style.modalForm}>
          <input placeholder="Nome" type="text" name="nome" required />
          <input type="number" placeholder="Preço" name="preco" required />
          <div className={style.radioGroup}>
            <input
              type="radio"
              id="entrada"
              name="tipo"
              value="entrada"
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
              value="saida"
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
          />
        </form>

        <Button
          fullWidth
          bold
          buttonFunction={() => alert("Cadastra")}
          text="CADASTRAR"
        />
      </div>
    </div>
  );
}
