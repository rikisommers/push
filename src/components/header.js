import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import TransitionLink from 'gatsby-plugin-transition-link'


import logo from "../images/SVG/logo.svg"

import v1 from "../images/SVG/v1.svg"
import v2 from "../images/SVG/v2.svg"


import "./header.scss"

const Header = ({ siteTitle }) => (

  // <div class="g-nav">

  //     <nav class="g-nav__header">
  //         <h1 className="c-header_logo">
  //           <AniLink
  //           style={{ textDecoration: "none" }}
  //           paintDrip 
  //           duration={1}
  //           to="/"
  //           >
  //           push
  //           </AniLink>
  //         </h1>

  //         <ul class="menu">   
  //         <li><AniLink paintDrip duration={1} to="/">Home</AniLink></li>
  //         <li><AniLink paintDrip duration={1} to="/about">About</AniLink></li>
  //         <li><AniLink swipe direction="up" duration={1} to="/contact">Lets Chat</AniLink></li>
  //         <li id="hamburger"></li>
  //         </ul> 
  

  //     </nav>

  //     <div class="g-nav__footer-left">
  //         <img src={v2}></img>
  //     </div>

  //     <div class="g-nav__footer-right">
  //           <a href="mailto:fd">contact@pushdigital.co.nz</a>
  //         <img src={v1}></img>
  //     </div>

  // </div>

  <nav className="c-header">
    <div className="c-header_content">  
          
          <h1 className="c-header_logo">
            <AniLink
            style={{ textDecoration: "none" }}
            paintDrip duration={1}
            to="/">
              push
            </AniLink>
          </h1>
         
         <ul>   
         <li><AniLink paintDrip duration={1} to="/">Home</AniLink></li>
         <li><AniLink paintDrip duration={1} to="/about">About Us</AniLink></li>
         <li><AniLink paintDrip duration={1} to="/contact">Contact</AniLink></li>
         <li id="hamburger"></li>
        </ul> 


    </div>
    
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header