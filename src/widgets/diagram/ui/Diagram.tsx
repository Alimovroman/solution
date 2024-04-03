import { useEffect } from "react";
import style from "./Diagram.module.css";
import { diagramThunk } from "../diagramSlice";
import { useActions } from "../../../common/hooks/useActions/useActions";

export const Diagram = () => {
  return (
    <div>
      <div className={style.diagramWrapper}>
        <div>Рубли</div>
        <div className={style.diagram}></div>
      </div>
      <div>Дата</div>
    </div>
  );
};
