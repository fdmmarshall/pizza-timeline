import { classNames } from "../helpers/helperFunctions";
import topPizzaHalf from "../image_assets/top_pizza_half.png";

interface PizzaProps {
  display: boolean;
}

export default function TopHalf({ display }: PizzaProps) {
  return (
    <div className="container">
      <img
        src={topPizzaHalf}
        alt="Top pizza half"
        className={classNames(display === true ? "display" : "hide")}
      />
    </div>
  );
}
