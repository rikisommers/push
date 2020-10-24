import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import logo from "../images/SVG/logo.svg"
import "./header.scss"

const ShadowHeader = ({ siteTitle }) => (
  
          <Link to="/" className="c-header_logo shadow">
            <h1 className="c-header_logo">
            {/* <img className="logo" src={logo} alt={siteTitle} /> */}
            P.
            </h1>
          </Link>
         
)

ShadowHeader.propTypes = {
  siteTitle: PropTypes.string,
}

ShadowHeader.defaultProps = {
  siteTitle: ``,
}

export default ShadowHeader