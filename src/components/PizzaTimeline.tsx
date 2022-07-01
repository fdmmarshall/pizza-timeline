import { classNames } from "../helpers/helperFunctions";
import "../style_assets/timeline.module.css";

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
            <span className="pizza-info">
              <h3>79 A.D.</h3>
              <p></p>
            </span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp">
            <span className="icon"></span>
            <span className="pizza-info">
              <h3>1522</h3>
              <p></p>
            </span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp">
            <span className="icon"></span>
            <span className="pizza-info">
              <h3>1880</h3>
              <p></p>
            </span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp">
            <span className="icon"></span>
            <span className="pizza-info">
              <h3>1889</h3>
              <p></p>
            </span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp">
            <span className="icon"></span>
            <span className="pizza-info">
              <h3>1905</h3>
              <p></p>
            </span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp">
            <span className="icon"></span>
            <span className="pizza-info">
              <h3>1943</h3>
              <p></p>
            </span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp">
            <span className="icon"></span>
            <span className="pizza-info">
              <h3>1958</h3>
              <p></p>
            </span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp">
            <span className="icon"></span>
            <span className="pizza-info">
              <h3>TODAY</h3>
              <p></p>
            </span>
          </div>
        </li>
      </ul>
    </>
  );
}
