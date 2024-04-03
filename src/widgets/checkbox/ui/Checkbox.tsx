import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useActions } from "../../../common/hooks/useActions/useActions";
import { diagramThunk } from "../../diagram/diagramSlice";

export const CheckBox = () => {
  const [checkedEuro, setCheckedEuro] = useState(false);
  const [checkedUsd, setCheckedUsd] = useState(false);
  const [checkedCny, setCheckedCny] = useState(false);
  const { getDataDiagram } = useActions(diagramThunk);

  const onChangeEuro = () => {
    let isGetvalue = !checkedEuro;
    setCheckedEuro(!checkedEuro);
    if (isGetvalue) {
      getDataDiagram({ value: "eur" });
    }
  };
  const onChangeUsd = () => {
    let isGetvalue = !checkedUsd;
    setCheckedUsd(!checkedUsd);
    if (isGetvalue) {
      getDataDiagram({ value: "usd" });
    }
  };
  const onChangeCny = () => {
    let isGetvalue = !checkedCny;
    setCheckedCny(!checkedCny);
    if (isGetvalue) {
      getDataDiagram({ value: "cny" });
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
