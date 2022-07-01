import "../style_assets/timeline.css";

export default function TimelineContainer() {
  return (
    <>
      <ul className="timeline" id="timeline">
        <li className="dot">
          <div className="timestamp-top">
            <span className="icon"></span>
            <span className="pizza-info">
              <h3>79 A.D.</h3>
              <p></p>
            </span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp-bottom">
            <span className="icon"></span>
            <span className="pizza-info">
              <h3>1522</h3>
              <p></p>
            </span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp-top">
            <span className="icon"></span>
            <span className="pizza-info">
              <h3>1880</h3>
              <p></p>
            </span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp-bottom">
            <span className="icon"></span>
            <span className="pizza-info">
              <h3>1889</h3>
              <p></p>
            </span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp-top">
            <span className="icon"></span>
            <span className="pizza-info">
              <h3>1905</h3>
              <p></p>
            </span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp-bottom">
            <span className="icon"></span>
            <span className="pizza-info">
              <h3>1943</h3>
              <p></p>
            </span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp-top">
            <span className="icon"></span>
            <span className="pizza-info">
              <h3>1958</h3>
              <p></p>
            </span>
          </div>
        </li>
        <li className="dot">
          <div className="timestamp-bottom">
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
