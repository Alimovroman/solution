import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";
import axios from "axios";

type Value = "eur" | "usd" | "cny";

const getDataDiagram = createAsyncThunk<
  { cost: number; value: Value },
  { value: Value }
>("diagram/getDataDIagram", async ({ value }) => {
  const response = await axios
    .get(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${value}.json`
    )
    .then((res) => {
      return res.data;
    });

  return { cost: response[value].rub, value };
});

type DataItem = {
  data: number[];
  label: Currency;
  borderColor: string;
  backgroundColor?: string;
  fill: boolean;
  lineTension: number;
};

type Currency = "euro" | "usd" | "cny" | "rub";

type InitialState = {
  euro: number | null;
  usd: number | null;
  cny: number | null;
  data: Data;
};

type Data = {
  labels: string[];
  datasets: DataItem[];
};
const initialState: InitialState = {
  euro: null,
  usd: null,
  cny: null,
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        label: "euro",
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataDiagram.fulfilled, (state, action) => {
      switch (action.payload.value) {
        case "eur":
          state.euro = action.payload.cost;
          break;
        case "usd":
          state.usd = action.payload.cost;
          break;
        case "cny":
          state.cny = action.payload.cost;
          break;
      }
    });
  },
});

export const diagramReducer = diagramSlice.reducer;
export const diagramThunk = { getDataDiagram };
