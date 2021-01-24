/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState,  useEffect } from "react";
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
import Menu from "../components/menu";






export default function Layout ({ children, transitionStatus, location }) {

  
  return (
   
    <>

    <Header/>


    <div id="fixed-target">
    <div data-scroll-container>
    
        <Scroll callbacks={location} />


          {/* <Menu/> */}

          {children}

          <Footer/>
          
    </div>
    </div>
  </>
  )
}


