import SummaryItem from "./SummaryItem";
import data from "../data.json";

const Summary = () => {
  return (
    <div>
      <div>Summary</div>
      {data.map(({ category, score }) => (
        <SummaryItem key={category} category={category} score={score} />
      ))}
    </div>
  );
};

export default Summary;
