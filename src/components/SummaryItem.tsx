import MemoryIcon from "../assets/images/icon-memory.svg";
import ReactionIcon from "../assets/images/icon-reaction.svg";
import VerbalIcon from "../assets/images/icon-verbal.svg";
import VisualIcon from "../assets/images/icon-visual.svg";

interface Props {
  category: string;
  score: number;
}
const SummaryItem = ({ category, score }: Props) => {
  let icon: string;
  switch (category.toLowerCase()) {
    case "memory":
      icon = MemoryIcon;
      break;
    case "reaction":
      icon = ReactionIcon;
      break;
    case "verbal":
      icon = VerbalIcon;
      break;
    case "visual":
      icon = VisualIcon;
      break;
    default:
      icon = "";
  }

  return (
    <div className={`summary__item summary__item--${category.toLowerCase()}`}>
      <div
        className={`summary__item__title-container summary__item__title-container--${category.toLowerCase()}`}
      >
        <img src={icon} />
        <div>{category}</div>
      </div>
      <div className="summary__score">
        {score}
        <span className="summary__score-baseline"> / 100</span>
      </div>
    </div>
  );
};

export default SummaryItem;
