/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Component } from 'react';
import ReactDOM from 'react-dom';

import "./layout.scss"
import "../styles/type.scss"
import "../styles/styles.scss"
// import "../scripts/cursor.js"
import Header from "../components/header"




const Layout = ({ children, transitionStatus }) => {

  
  return (
     <div class="o-container">
        <div className="cursor"></div>
        <div className="cursor"></div>
          <Header/>

          {children}
    </div>
  )
}


export default Layout
