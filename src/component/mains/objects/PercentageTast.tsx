import "../../../css/Percentage.css";

function Percentage() {
  return (
    <>
      <div className="percentageTask">
        <h4 className="percentageTask_h1">Task completed</h4>
        <p className="percentage" id="percentage">
          0%
        </p>
        <div className="progreesBarContainer">
          <div className="progress"></div>
        </div>
      </div>
    </>
  );
}

export default Percentage;
