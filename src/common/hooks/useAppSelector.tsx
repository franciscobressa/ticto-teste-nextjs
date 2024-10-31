import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../configStore/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
