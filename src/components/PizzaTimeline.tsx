import { classNames } from "../helpers/helperFunctions";
import "../timeline.module.css";

interface PizzaTimelineProps {
  display: boolean;
}

export default function TimelineContainer({ display }: PizzaTimelineProps) {
  return (
    <>
      <ul
        className={classNames(
          display === true ? "display" : "hide",
          "timeline"
        )}
        id="timeline"
      >
        <li className="dot">
          <div className="timestamp">
            <span className="icon"></span>
            <span className="pizza-info"></span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp">
            <span className="icon"></span>
            <span className="pizza-info"></span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp">
            <span className="icon"></span>
            <span className="pizza-info"></span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp">
            <span className="icon"></span>
            <span className="pizza-info"></span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp">
            <span className="icon"></span>
            <span className="pizza-info"></span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp">
            <span className="icon"></span>
            <span className="pizza-info"></span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp">
            <span className="icon"></span>
            <span className="pizza-info"></span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp">
            <span className="icon"></span>
            <span className="pizza-info"></span>
          </div>
        </li>
      </ul>
    </>
  );
}
