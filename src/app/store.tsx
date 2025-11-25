import { configureStore } from "@reduxjs/toolkit";
import app from "./appSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    app,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type appDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<appDispatch>();
