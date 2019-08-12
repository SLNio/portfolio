import React from "react";
import { selection } from "./pictures";
import favicon2 from "./favicon2.png";

class PhotoViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  // Funtion to set next image with right arrow button
  setNextImage = props => {
    const nextIndex = this.state.index + 1;
    this.setState({ index: nextIndex });
  };

  // Funtion to set previous image with left arrow button
  setPreviousImage = props => {
    let previousIndex = this.state.index - 1;
    this.setState({ index: previousIndex });
  };

  render() {
    // Define range of left and right arrow button
    const showRight = this.state.index < selection.length - 1;
    const showLeft = this.state.index > 0;
    return (
      <div>
        <span className="title">Shan Li Nio Photography</span>
        <div className="photoViewer">
          <img src={selection[this.state.index]} className="pic" alt="" />
          <div>
            <img
              // Hide buttons when out of range, otherwise call setImage functions
              style={showLeft ? null : { visibility: "hidden" }}
              src={favicon2}
              id="arrowLeft"
              alt="previous"
              onClick={this.setPreviousImage}
            />
            <img
              style={showRight ? null : { visibility: "hidden" }}
              src={favicon2}
              id="arrowRight"
              alt="next"
              onClick={this.setNextImage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoViewer;
