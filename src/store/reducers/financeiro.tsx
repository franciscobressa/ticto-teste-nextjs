import { createSlice } from "@reduxjs/toolkit";

export enum Movimentacao {
  ENTRADA = "entrada",
  SAIDA = "saida",
}

export interface RegistroFinanceiro {
  id: number;
  descricao: string;
  valor: number;
  categoria: string;
  data: string;
  movimentacao: Movimentacao;
}

interface Financeiro {
  list: Array<RegistroFinanceiro>;
  modal: boolean;
}

const initialState: Financeiro = {
  list: [
    {
      id: 1,
      descricao: "Salário",
      categoria: "Mensal",
      data: "Thu Oct 31 2024 20:30:10 GMT-0400 (Horário Padrão do Amazonas)",
      movimentacao: Movimentacao.ENTRADA,
      valor: 6897.41,
    },
    {
      id: 2,
      descricao: "Água",
      categoria: "Mensal",
      data: "Thu Oct 31 2024 20:30:20 GMT-0400 (Horário Padrão do Amazonas)",
      movimentacao: Movimentacao.SAIDA,
      valor: 89.05,
    },
    {
      id: 3,
      descricao: "Luz",
      categoria: "Mensal",
      data: "Thu Oct 31 2024 20:30:32 GMT-0400 (Horário Padrão do Amazonas)",
      movimentacao: Movimentacao.SAIDA,
      valor: 186.1,
    },
    {
      id: 4,
      descricao: "Restaurante",
      categoria: "Consumo",
      data: "Thu Oct 31 2024 20:30:50 GMT-0400 (Horário Padrão do Amazonas)",
      movimentacao: Movimentacao.SAIDA,
      valor: 101.52,
    },
  ],
  modal: false,
};

export const FinanceiroSlice = createSlice({
  name: "Financeiro",
  initialState,
  reducers: {
    setFinanceiroListItem: (state, action) => {
      state.list.push(action.payload);
    },
    removeFinanceiroListItem: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    setModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export const selectTotalEntrada = (state: { Financeiro: Financeiro }) =>
  state.Financeiro.list
    .filter((item) => item.movimentacao === Movimentacao.ENTRADA)
    .reduce((total, item) => total + Number(item.valor), 0);

export const selectTotalSaida = (state: { Financeiro: Financeiro }) =>
  state.Financeiro.list
    .filter((item) => item.movimentacao === Movimentacao.SAIDA)
    .reduce((total, item) => total + Number(item.valor), 0);

export const selectSaldoTotal = (state: { Financeiro: Financeiro }) =>
  selectTotalEntrada(state) - selectTotalSaida(state);

export const { setFinanceiroListItem, removeFinanceiroListItem, setModal } =
  FinanceiroSlice.actions;

export default FinanceiroSlice.reducer;
