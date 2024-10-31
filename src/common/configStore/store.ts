import { configureStore } from "@reduxjs/toolkit";
import FinanceiroReducer from "@/store/reducers/financeiro";

export const store = configureStore({
  reducer: {
    Financeiro: FinanceiroReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
