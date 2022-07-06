import "../style_assets/timeline.css";

export default function TimelineContainer() {
  return (
    <div className="wrapper">
      <div className="top-content">
        <div className="content-container item-one">
          <div className="content">
            <div className="svg">SVG</div>
            <div className="info">
              <h3>79 A.D.</h3>
              <p>text goes here</p>
            </div>
          </div>
        </div>
        <div className="content-container"></div>
        <div className="content-container item-three">
          <div className="content">
            <div className="svg">SVG</div>
            <div className="info">
              <h3>1880</h3>
              <p>text goes here</p>
            </div>
          </div>
        </div>
        <div className="content-container"></div>
        <div className="content-container item-five">
          <div className="content">
            <div className="svg">SVG</div>
            <div className="info">
              <h3>1905</h3>
              <p>text goes here</p>
            </div>
          </div>
        </div>
        <div className="content-container"></div>
        <div className="content-container item-seven">
          <div className="content">
            <div className="svg">SVG</div>
            <div className="info">
              <h3>1958</h3>
              <p>text goes here</p>
            </div>
          </div>
        </div>
        <div className="content-container"></div>
      </div>
      <div className="horizontal-timeline">
        <div className="container">
          <div className="dot"></div>
          <hr />
        </div>
        <div className="container">
          <div className="dot"></div>
          <hr />
        </div>
        <div className="container">
          <div className="dot"></div>
          <hr />
        </div>
        <div className="container">
          <div className="dot"></div>
          <hr />
        </div>
        <div className="container">
          <div className="dot"></div>
          <hr />
        </div>
        <div className="container">
          <div className="dot"></div>
          <hr />
        </div>
        <div className="container">
          <div className="dot"></div>
          <hr />
        </div>
        <div>
          <div className="dot"></div>
        </div>
      </div>
      <div className="bottom-content">
        <div className="content-container"></div>
        <div className="content-container item-two">
          <div className="content">
            <div className="svg">SVG</div>
            <div className="info">
              <h3>1522</h3>
              <p>text goes here</p>
            </div>
          </div>
        </div>
        <div className="content-container"></div>
        <div className="content-container item-four">
          <div className="content">
            <div className="svg">SVG</div>
            <div className="info">
              <h3>1889</h3>
              <p>text goes here</p>
            </div>
          </div>
        </div>
        <div className="content-container"></div>
        <div className="content-container item-six">
          <div className="content">
            <div className="svg">SVG</div>
            <div className="info">
              <h3>1943</h3>
              <p>text goes here</p>
            </div>
          </div>
        </div>
        <div className="content-container"></div>
        <div className="content-container item-eight">
          <div className="content">
            <div className="svg">SVG</div>
            <div className="info">
              <h3>TODAY</h3>
              <p>text goes here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
