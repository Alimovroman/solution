import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";
import axios from "axios";
import { AppDispatch, RootState } from "../../app/store";

type Value = "eur" | "usd" | "cny";

const getDataDiagram = createAsyncThunk<
  { cost: string; value: Value; date: string },
  { value: Value; date: string },
  {
    // Optional fields for defining thunkApi field types
    dispatch: AppDispatch;
    state: RootState;
    extra: {
      jwt: string;
    };
  }
>("diagram/getDataDIagram", async ({ value, date }, thunkApi) => {
  const response = await axios
    .get(
      // `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${value}.json`
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${value}.json`
    )
    .then((res) => {
      return res.data;
    });

  return { cost: response[value].rub, value, date: response.date };
});

type DataItem = {
  data: string[];
  label: Currency;
  borderColor: string;
  backgroundColor?: string;
  fill: boolean;
  lineTension: number;
};

type Currency = "eur" | "usd" | "cny" | "rub";

type InitialState = {
  dataDiagram: Data;
  count: number;
  date: string[];
  checkedEuro: boolean;
  checkedUsd: boolean;
  checkedCny: boolean;
};

type Data = {
  labels: string[];
  datasets: DataItem[];
};
const initialState: InitialState = {
  checkedEuro: false,
  checkedUsd: false,
  checkedCny: false,
  count: 0,
  date: [],
  dataDiagram: {
    labels: [],
    datasets: [
      {
        data: [],
        label: "eur",
        borderColor: "#3333ff",
        fill: true,
        lineTension: 0.5,
      },
      {
        data: [],
        label: "usd",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true,
        lineTension: 0.5,
      },
      {
        data: [],
        label: "cny",
        borderColor: "rgba(128, 300, 200)",
        backgroundColor: "rgba(128, 300, 200, 0.5)",
        fill: true,
        lineTension: 0.5,
      },
    ],
  },
};

const diagramSlice = createSlice({
  name: "diagram",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<{ date: string }>) => {
      state.date.push(action.payload.date);
      state.dataDiagram.labels.push(action.payload.date);
      state.checkedCny = false;
      state.checkedEuro = false;
      state.checkedUsd = false;
      state.dataDiagram.datasets.forEach((d) => (d.data = []));
    },
    clearDate: (state, action: PayloadAction) => {
      state.date = [];
      state.dataDiagram.labels = [];
    },
    clearDataDiagram: (state, action: PayloadAction<{ value: Value }>) => {
      const dataItem = state.dataDiagram.datasets.find(
        (data) => data.label === action.payload.value
      );
      dataItem!.data = [];
    },
    setChecked: (
      state,
      action: PayloadAction<{
        value: "checkedEuro" | "checkedUsd" | "checkedCny";
      }>
    ) => {
      state[action.payload.value] = !state[action.payload.value];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataDiagram.fulfilled, (state, action) => {
      state.count += 1;

      const dataItem = state.dataDiagram.datasets.find(
        (data) => data.label === action.payload.value
      );
      // dataItem!.data = [];
      dataItem!.data.push(action.payload.cost);
    });
  },
});

export const diagramReducer = diagramSlice.reducer;
export const diagramThunk = { getDataDiagram };
export const diagramActions = diagramSlice.actions;
