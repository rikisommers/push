import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import logo from "../images/SVG/logo.svg"
import "./header.scss"

const ShadowHeader = ({ siteTitle }) => (
  
          <Link to="/" className="c-header_logo shadow">
            {/* {siteTitle} */}
            
{/*         
            <img className="logo" src={logo} alt={siteTitle} />
             */}
          </Link>
         
)

ShadowHeader.propTypes = {
  siteTitle: PropTypes.string,
}

ShadowHeader.defaultProps = {
  siteTitle: ``,
}

export default ShadowHeader