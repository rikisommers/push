/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
//import Link from "gatsby"
import ShadowHeader from "./shadow-header"
import Menu from "./menu"

import "./layout.scss"
import "../styles/styles.scss"
//import "../scripts/data-scroll.js"



const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // const props = useSpring({opacity: 1, from: {opacity: 0}})
  // <animated.div style={props}>I will fade in</animated.div>
 
  
  return (
    <div className="o-container page-content">
         
 
      <Menu/>
      <ShadowHeader siteTitle={data.site.siteMetadata.title}/>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
