import {
  RegistroFinanceiro,
  removeFinanceiroListItem,
  setFinanceiroListItem,
  setModal,
} from "../reducers/financeiro";

export const cadastraRegistro = (registro: RegistroFinanceiro) => {
  return setFinanceiroListItem(registro);
};

export const removeRegistro = (id: number) => {
  return removeFinanceiroListItem(id);
};

export const setModalCadastro = (open: boolean) => {
  return setModal(open);
};
