import { RootState } from "../../app/store";

export const dateSelector = (state: RootState) => state.diagram.date;
export const countSelector = (state: RootState) => state.diagram.count;
export const dataDiagramSelector = (state: RootState) =>
  state.diagram.dataDiagram;
export const checkedEuroSelector = (state: RootState) =>
  state.diagram.checkedEuro;
export const checkedUsdSelector = (state: RootState) =>
  state.diagram.checkedUsd;
export const checkedCnySelector = (state: RootState) =>
  state.diagram.checkedCny;
