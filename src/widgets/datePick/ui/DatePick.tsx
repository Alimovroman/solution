import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./DatePick.module.css";
import ReactDatePicker from "react-datepicker";
import { log } from "console";

export const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dataStart = `${startDate.getFullYear()}/${
    startDate.getMonth() + 1
  }/${startDate.getDate()}`;
  const dataEnd = `${endDate.getFullYear()}/${
    endDate.getMonth() + 1
  }/${endDate.getDate()}`;

  let mil = Math.floor(
    new Date(dataStart).getTime() - new Date(dataEnd).getTime()
  );

  const dayMs = 86400000;

  useEffect(() => {
    let seconds = (mil / 1000) | 0;

    let minutes = (seconds / 60) | 0;

    let hours = (minutes / 60) | 0;

    let days = ((hours / 24) * -1) | 0;
    // hours -= days * 24;

    let weeks = (days / 7) | 0;
    // days -= weeks * 7;
    for (let i = 0; i <= days; i++) {
      if (i === 0) {
        console.log(new Date(new Date(dataStart).getTime()));
        // } else if (i === 2) {
        //   console.log(new Date(new Date(dataStart).getTime() + dayMs));
      } else {
        console.log(new Date(new Date(dataStart).getTime() + dayMs * i));
      }
    }
  }, [startDate, endDate]);

  return (
    <div>
      <div className={style.dateBlock}>
        <div className={style.text}>Дата с</div>
        <DatePicker
          selected={startDate}
          dateFormat="yyyy-MM-dd"
          onChange={(date) => setStartDate(date!)}
        />
      </div>
      <div className={style.dateBlock}>
        <div className={style.text}>Дата по</div>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date!)}
          dateFormat="yyyy-MM-dd"
        />
      </div>
    </div>
  );
};
