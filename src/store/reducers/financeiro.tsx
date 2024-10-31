import { createSlice } from "@reduxjs/toolkit";

export enum Movimentacao {
  ENTRADA = "entrada",
  SAIDA = "saida",
}

export interface RegistroFinanceiro {
  id: number;
  descricao: string;
  valor: string;
  categoria: string;
  data: string;
  movimentacao: Movimentacao;
}

interface Financeiro {
  list: Array<RegistroFinanceiro>;
  modal: boolean;
}

const initialState: Financeiro = {
  list: [],
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

export const { setFinanceiroListItem, removeFinanceiroListItem, setModal } =
  FinanceiroSlice.actions;

export default FinanceiroSlice.reducer;
