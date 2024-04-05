import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useActions } from "../../../common/hooks/useActions";
import { diagramActions, diagramThunk } from "../../diagram/diagramSlice";
import { useAppSelector } from "../../../common/hooks/useAppSelector";
import {
  checkedCnySelector,
  checkedEuroSelector,
  checkedUsdSelector,
  dateSelector,
} from "../../diagram/diagramSelector";
import { useAppDispatch } from "../../../common/hooks/useAppDispatch";

export const CheckBox = () => {
  const checkedEuro = useAppSelector(checkedEuroSelector);
  const checkedUsd = useAppSelector(checkedUsdSelector);
  const checkedCny = useAppSelector(checkedCnySelector);
  const { getDataDiagram } = useActions(diagramThunk);
  const actionDiagram = diagramActions;
  const dispatch = useAppDispatch();

  const date = useAppSelector(dateSelector);

  const onChangeEuro = () => {
    let isGetvalue = !checkedEuro;
    dispatch(actionDiagram.setChecked({ value: "checkedEuro" }));

    if (isGetvalue) {
      date.forEach((d) => {
        getDataDiagram({ value: "eur", date: d });
      });
    } else {
      dispatch(actionDiagram.clearDataDiagram({ value: "eur" }));
    }
  };
  const onChangeUsd = () => {
    let isGetvalue = !checkedUsd;
    dispatch(actionDiagram.setChecked({ value: "checkedUsd" }));

    if (isGetvalue) {
      date.forEach((d) => {
        getDataDiagram({ value: "usd", date: d });
      });
    } else {
      dispatch(actionDiagram.clearDataDiagram({ value: "usd" }));
    }
  };
  const onChangeCny = () => {
    let isGetvalue = !checkedCny;
    dispatch(actionDiagram.setChecked({ value: "checkedCny" }));

    if (isGetvalue) {
      date.forEach((d) => {
        getDataDiagram({ value: "cny", date: d });
      });
    } else {
      dispatch(actionDiagram.clearDataDiagram({ value: "cny" }));
    }
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox />}
        label="Евро"
        checked={checkedEuro}
        onChange={onChangeEuro}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Доллар"
        checked={checkedUsd}
        onChange={onChangeUsd}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Юань"
        checked={checkedCny}
        onChange={onChangeCny}
      />
    </FormGroup>
  );
};
