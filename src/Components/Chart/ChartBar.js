import React from "react";
import "./ChartBar.css";
const ChartBar = (props) => {
  let barFill = "0%";
//   console.log(props.value,"    ", props.maxValue);
  if (props.maxValue > 0) {
    barFill = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chartBar-main">
      <div className="chart-Bar">
        <div className="chart-Bar-fill" style={{ height: barFill }}></div>
      </div>
      <div className="Label">
        <label>{props.label}</label>
      </div>
    </div>
  );
};

export default ChartBar;
