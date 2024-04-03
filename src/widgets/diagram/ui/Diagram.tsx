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
import { useSelector } from "react-redux";

import { memo, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const initialData = {
  labels: [
    "2024.03.02",
    "2024.03.03",
    "2024.03.04",
    "2024.03.05",
    "2024.03.06",
  ],
  datasets: [
    {
      label: "",
      data: [8137119, 9431691, 10266674],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export const Diagram = memo(() => {
  const [data, setData] = useState<any>({
    labels: ["October", "November", "December"],
    datasets: [
      {
        data: [8137119, 9431691, 10266674],
        label: "euro",
        borderColor: "#3333ff",
        fill: true,
        lineTension: 0.5,
      },
      {
        data: [1216410, 1371390, 1477380],
        label: "usd",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true,
        lineTension: 0.5,
      },
      {
        data: [4654, 123548, 7894654],
        label: "cny",
        borderColor: "rgba(128, 300, 200)",
        backgroundColor: "rgba(128, 300, 200, 0.5)",
        fill: true,
        lineTension: 0.5,
      },
    ],
  });

  return (
    <div style={{ width: "600px" }}>
      <Line data={data || initialData} />
    </div>
  );
});
