import Description from "./Description";
import Score from "./Score";

const Card = () => {
  return (
    <div className="card">
      <div className="card__title">Your Result</div>
      <Score>76</Score>
      <Description assessment="Great" percentage={65} />
    </div>
  );
};

export default Card;
