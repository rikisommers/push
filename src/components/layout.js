/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import { window, document, exists } from "browser-monads";

import Scroll from "./locomotiveScroll"
import "./locomotive-scroll.scss"


import "./layout.scss";
import "../styles/type.scss";
import "../styles/styles.scss";
import "./capture.scss";



import Header from "../components/header";
import Footer from "../components/footer";
// import Menu from "../components/menu";




export default function Layout ({ children, transitionStatus, location }) {

  
  return (
    <div id="fixed-target">
    <Header/>
    <div data-scroll-container>

        <Scroll callbacks={location} />
       {/* {exists(document) && 
          <AnimatedCursor
          innerSize={12}
          outerSize={12}
          color='0, 0, 0'
          outerAlpha={0.3}
          innerScale={1}
          outerScale={8}
          />
       } */}

          {/* <Menu/> */}

          {children}

          <Footer/>
    </div>
    </div>

  )
}
