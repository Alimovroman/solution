import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./DatePick.module.css";
import { diagramActions, diagramThunk } from "../../diagram/diagramSlice";
import { useAppDispatch } from "../../../common/hooks/useAppDispatch";

export const DatePick = () => {
  const [startDate, setStartDate] = useState(
    new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)
  );
  const [endDate, setEndDate] = useState(new Date());
  const dispatch = useAppDispatch();
  const actionsDiagram = diagramActions;

  const dataStart = `${startDate.getFullYear()}-${
    startDate.getMonth() + 1
  }-${startDate.getDate()}`;
  const dataEnd = `${endDate.getFullYear()}-${
    endDate.getMonth() + 1
  }-${endDate.getDate()}`;

  let mil = Math.floor(
    new Date(dataStart).getTime() - new Date(dataEnd).getTime()
  );

  const dayMs = 86400000;

  useEffect(() => {
    dispatch(actionsDiagram.clearDate());
    let seconds = (mil / 1000) | 0;
    let minutes = (seconds / 60) | 0;
    let hours = (minutes / 60) | 0;
    let days = ((hours / 24) * -1) | 0;

    for (let i = 0; i <= days; i++) {
      if (i === 0) {
        const newDate = new Date(new Date(dataStart).getTime());
        const year = newDate.getFullYear();
        const month =
          newDate.getMonth() + 1 < 10
            ? `0${newDate.getMonth() + 1}`
            : newDate.getMonth();
        const days =
          newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
        const dataResult = `${year}-${month}-${days}`;

        dispatch(actionsDiagram.setDate({ date: dataResult }));
      } else {
        const newDate = new Date(new Date(dataStart).getTime() + dayMs * i);
        const year = newDate.getFullYear();
        const month =
          newDate.getMonth() + 1 < 10
            ? `0${newDate.getMonth() + 1}`
            : newDate.getMonth();
        const days =
          newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
        const dataResult = `${year}-${month}-${days}`;

        dispatch(actionsDiagram.setDate({ date: dataResult }));
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
