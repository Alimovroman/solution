import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./DatePick.module.css";

export const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <div className={style.dateBlock}>
        <div className={style.text}>Дата с</div>
        <DatePicker
          selected={startDate}
          dateFormat="yyyy/MM/dd"
          onChange={(date) => setStartDate(date!)}
        />
      </div>
      <div className={style.dateBlock}>
        <div className={style.text}>Дата по</div>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date!)}
          dateFormat="yyyy/MM/dd"
        />
      </div>
    </div>
  );
};
