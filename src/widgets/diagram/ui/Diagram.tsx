import style from "./Diagram.module.css";

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
