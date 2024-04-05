import style from "./CurrencyChart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { memo, useState } from "react";
import { useAppSelector } from "../../../common/hooks/useAppSelector";
import { dataDiagramSelector } from "../diagramSelector";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Diagram = memo(() => {
  const data = useAppSelector(dataDiagramSelector);

  return (
    <div style={{ width: "600px" }}>
      <Line data={data} />
    </div>
  );
});
