import Image from "next/image";
import style from "./DeleteButton.module.css";
export default function DeleteButton() {
  return (
    <div className={style.DeleteButton}>
      <Image
        height={15}
        width={14}
        alt="excluir"
        src={"/images/icon feather-trash.svg"}
      />
    </div>
  );
}
