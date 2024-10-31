import {
  RegistroFinanceiro,
  setFinanceiroListItem,
  setModal,
} from "../reducers/financeiro";

export const cadastraRegistro = (registro: RegistroFinanceiro) => {
  return setFinanceiroListItem(registro);
};

export const setModalCadastro = (open: boolean) => {
  return setModal(open);
};
