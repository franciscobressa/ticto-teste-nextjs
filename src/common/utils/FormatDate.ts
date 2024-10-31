export default function FormatDate(dataString: Date): string {
  const data = new Date(dataString);

  const opcoesData: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const opcoesHora: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const dataFormatada = new Intl.DateTimeFormat("pt-BR", opcoesData).format(
    data
  );
  const horaFormatada = new Intl.DateTimeFormat("pt-BR", opcoesHora).format(
    data
  );

  return `${dataFormatada} às ${horaFormatada.replace(":", "h")}`;
}
