import SummaryItem from "./SummaryItem";
import data from "../data.json";

const Summary = () => {
  return (
    <div className="summary">
      <div>Summary</div>
      {data.map(({ category, score }) => (
        <SummaryItem key={category} category={category} score={score} />
      ))}
      <button className="btn">Continue</button>
    </div>
  );
};

export default Summary;
