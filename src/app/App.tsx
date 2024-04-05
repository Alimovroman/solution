import React from "react";
import style from "./App.module.css";
import { CheckBox } from "../widgets/checkbox";
import { DatePick } from "../widgets/datePick";
import { Diagram } from "../widgets/diagram/ui/Diagram";
import { useAppSelector } from "../common/hooks/useAppSelector";
import { countSelector } from "../widgets/diagram/diagramSelector";

function App() {
  const count = useAppSelector(countSelector);
  return (
    <div className={style.root}>
      <div className={style.menuBlock}>
        <CheckBox />
        <DatePick />
        <div>Число запросов API: {count}</div>
      </div>
      <Diagram />
    </div>
  );
}

export default App;
