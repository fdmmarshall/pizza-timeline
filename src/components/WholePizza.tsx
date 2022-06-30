import pizza from "../pizza_1.png";
import { classNames } from "../helpers/helperFunctions";

interface PizzaProps {
  display: boolean;
}

export default function WholePizza({ display }: PizzaProps) {
  return (
    <div className="Pizza-section" id="Pizza-section">
      <img
        src={pizza}
        alt="Pizza"
        className={classNames(display === true ? "display" : "hide", "Pizza")}
      />
    </div>
  );
}
