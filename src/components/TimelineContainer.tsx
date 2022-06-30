import { classNames } from "../helpers/helperFunctions";

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
    ></div>
  );
}
