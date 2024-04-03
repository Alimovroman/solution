import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { diagramReducer } from "../widgets/diagram/diagramSlice";
// ...
const store = configureStore({
  reducer: {
    diagram: diagramReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
