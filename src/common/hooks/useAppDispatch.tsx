import { useDispatch } from "react-redux";
import { AppDispatch } from "../configStore/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
