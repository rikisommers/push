import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import logo from "../images/SVG/logo.svg"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="c-header">
    <div className="c-header_content">
      
          <Link to="/">
            {/* {siteTitle} */}
            
            <h1 className="c-header_logo">
            {/* <img className="logo" src={logo} alt={siteTitle} /> */}
            P.
            </h1>
            
          </Link>
          <ul>   
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/services/">Services</Link></li>
            <li><Link to="/case-studies/">Case studies</Link></li>
            <li><Link to="/contact/">Contact</Link></li>
          </ul>
  

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header