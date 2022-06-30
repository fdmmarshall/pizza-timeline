import { classNames } from "../helpers/helperFunctions";

interface TimelineProps {
  display: boolean;
}

export default function PizzaTimeline({ display }: TimelineProps) {
  return (
    <div
      className={classNames(
        display === true ? "display" : "hide",
        "Timeline-container"
      )}
      id="white-space"
    ></div>
  );
}
