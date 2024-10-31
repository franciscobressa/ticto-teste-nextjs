import Image from "next/image";
import style from "./DeleteButton.module.css";

interface DeleteButtonProps {
  deleteFunction: () => void;
}
export default function DeleteButton({ deleteFunction }: DeleteButtonProps) {
  return (
    <div className={style.DeleteButton} onClick={deleteFunction}>
      <Image
        height={15}
        width={14}
        alt="excluir"
        src={"/images/icon feather-trash.svg"}
      />
    </div>
  );
}
