
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import locomotiveScroll from "locomotive-scroll";
import Layout from "./components/layout"
import "./styles.css";

class App extends React.Component {
  componentDidMount() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#view"),
      smooth: true
    });
    
  }
  render() {
    return (
    <div className="App">
          <div id="view">
          </div>
    </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

