import style from "./CardBody.module.css";

interface CardBodyProps {
  children: React.ReactNode;
}

export default function CardBody({ children }: CardBodyProps) {
  return <div className={style.cardBody}>{children}</div>;
}
