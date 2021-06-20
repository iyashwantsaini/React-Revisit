import "./ChartBar.css";

const ChartBar = (props) => {
  let fillh = "0%";
  if (props.maxval > 0) {
    fillh = Math.round((props.value / props.maxval) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillh }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
