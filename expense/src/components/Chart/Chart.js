import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const data = props.points.map((point) => point.value);
  const totmax = Math.max(...data);

  return (
    <div className="chart">
      {props.points.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxval={totmax}
          label={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
