import { classNames } from "../helpers/helperFunctions";
import bottomPizzaHalf from "../image_assets/bottom_pizza_half.png";

interface PizzaProps {
  display: boolean;
}

export default function TopHalf({ display }: PizzaProps) {
  return (
    <div className="container">
      <img
        src={bottomPizzaHalf}
        alt="Bottom pizza half"
        className={classNames(display === true ? "display" : "hide")}
      />
    </div>
  );
}
