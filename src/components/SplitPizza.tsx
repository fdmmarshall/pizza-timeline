import { classNames } from "../helpers/helperFunctions";
import topPizzaHalf from "../top_pizza_half.png";
import bottomPizzaHalf from "../bottom_pizza_half.png";

interface PizzaProps {
  display: boolean;
}

export default function PizzaSection({ display }: PizzaProps) {
  return (
    <div className="Pizza-section" id="Pizza-section">
      <img
        src={topPizzaHalf}
        alt="Top pizza half"
        className={classNames(display === true ? "display" : "hide")}
      />
      <div id="White-space"></div>
      <img
        src={bottomPizzaHalf}
        alt="Bottom pizza half"
        className={classNames(display === true ? "display" : "hide")}
      />
    </div>
  );
}
