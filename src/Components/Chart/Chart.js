import React from "react";
import "./Chart.css";
import "./ChartBar";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataVal = props.data.map((val) => val.value);
  const maxVal = Math.max(...dataVal);
  return (
    <div className="chart">
      {props.data.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          label={item.label}
          maxValue={maxVal}
        />
      ))}
    </div>
  );
};

export default Chart;
