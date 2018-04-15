import React, { Component } from "react";
import Draggable from "gsap/Draggable";
import "./App.css";

class App extends Component {
  componentDidMount() {
    let raterHeight = document.getElementsByClassName("rater-container")[0]
      .clientHeight;

    let startingHeight = document
      .getElementsByClassName("rater-container")[0]
      .getBoundingClientRect();

    console.log(startingHeight);

    let snapPoints = [];

    for (var i = 0; i < 10; i++) {
      snapPoints.push(raterHeight / 11 * i);
    }

    console.log(raterHeight);
    console.log(snapPoints);

    Draggable.create(".square", {
      type: "y",
      bounds: document.getElementsByClassName("rater-container")[0],
      liveSnap: {
        y: snapPoints
      }
    });
  }

  render() {
    return (
      <div className="rater-container">
        <div className="square" />
      </div>
    );
  }
}

export default App;
