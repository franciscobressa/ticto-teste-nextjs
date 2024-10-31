import { createSlice } from "@reduxjs/toolkit";

enum Movimentacao {
  ENTRADA = "entrada",
  SAIDA = "saida",
}

interface RegistroFinanceiro {
  descricao: string;
  valor: number;
  categoria: string;
  data: Date;
  movimentacao: Movimentacao;
}

interface Financeiro {
  list: Array<RegistroFinanceiro>;
  modal: boolean;
}

const initialState: Financeiro = {
  list: [
    {
      descricao: "string",
      valor: 213,
      categoria: "string",
      data: new Date(),
      movimentacao: Movimentacao.ENTRADA,
    },
  ],
  modal: false,
};

export const FinanceiroSlice = createSlice({
  name: "Financeiro",
  initialState,
  reducers: {
    setFinanceiroList: (state, action) => {
      return { ...state, list: action.payload };
    },
  },
});

export const { setFinanceiroList } = FinanceiroSlice.actions;

export default FinanceiroSlice.reducer;
