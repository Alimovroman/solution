import React from "react";
import "./App.css";
import { CheckBox } from "../widgets/checkbox";
import { DatePick } from "../widgets/datePick";
import { Diagram } from "../widgets/diagram/ui/Diagram";

function App() {
  return (
    <div className="App">
      <div>
        <CheckBox />
        <DatePick />
        <div>Число запросов API: 0</div>
      </div>
      <Diagram />
    </div>
  );
}

export default App;
