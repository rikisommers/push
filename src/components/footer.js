import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import TransitionLink from 'gatsby-plugin-transition-link'


import logo from "../images/SVG/logo.svg"

const Footer = ({ siteTitle }) => (
  <div className="c-hero-home">
    <div className="c-hero__content">
      <div className="o-content">  
            
          <h1 className="sub-text">
          <AniLink
          style={{ textDecoration: "none" }}
          fade
          to="/"
          duration={1}>
              push
          </AniLink>
          </h1>
              
          
          <ul>   
          <li><AniLink paintDrip duration={1} to="/">Home</AniLink></li>
          <li><AniLink paintDrip duration={1} to="/about">About</AniLink></li>
          <li><AniLink swipe direction="up" duration={1} to="/contact">Contact</AniLink></li>
            <li id="hamburger"></li>
          </ul> 


      </div>
    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer