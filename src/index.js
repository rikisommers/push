
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
    $(document).mousemove(function(e) {
      $('.cursor').eq(0).css({
          left: e.clientX,
          top: e.clientY
        });
      setTimeout(function() {
        $('.cursor').eq(1).css({
            left: e.clientX,
            top: e.clientY
          });
      }, 100);
    });

    function activeCursor () {
      $('.cursor').eq(1).css({
          width: '72px',
          height: '72px'
        });
    }
  
    function inactiveCursor () {
      $('.cursor').eq(1).css({
          width: '22px',
          height: '22px'
        });
    }
    
    
    return (

    <div className="App">
          <div className="cursor"></div>
          <div id="view">

          </div>
      
    
    </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

