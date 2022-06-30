import { classNames } from "../helpers/helperFunctions";
import PizzaTimeline from "./PizzaTimeline";

interface ContainerProps {
  display: boolean;
}

export default function TimelineContainer({ display }: ContainerProps) {
  return (
    <div
      className={classNames(
        display === true ? "display" : "hide",
        "Timeline-container"
      )}
      id="white-space"
    >
      <h1>THE ORIGIN STORY OF PIZZA</h1>
      <PizzaTimeline display={display} />
    </div>
  );
}
