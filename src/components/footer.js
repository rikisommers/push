import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import TransitionLink from 'gatsby-plugin-transition-link'
import { StaticQuery, graphql } from "gatsby"
import logo from "../images/SVG/logo.svg"

export default function Footer() {
  const url = typeof window !== 'undefined' ? window.location.href : '';

  var contactLink;
  if (!url.toString().includes("contact")) {

    contactLink =
   
    <ul className="links">   
    <li><AniLink paintDrip duration={0.3}  to="/contact">Lets Chat</AniLink></li>
    </ul>

   ;
  }

  return (

    <StaticQuery
      query={graphql`
        query FooterQuery {
            datoCmsFooter {
             title
             intro
             content1
             content2
             facebook
             instagram
            }
          }
      `}

      render={data => (
          <div className="c-hero-home footer"
               >
              
              <div className="o-content">
                <div class="footer__content"
                    data-scroll 
                    data-scroll-repeat="true"	
                    data-scroll-speed="1"
                    >  

                    <div className="content1">

                        <h1 className="heading">{data.datoCmsFooter.title}</h1>

                        <div className="sub-text intro"
                        dangerouslySetInnerHTML={{ __html: data.datoCmsFooter.intro }}
                        >
                        </div>
                      
                        <div className="c1" 
                        dangerouslySetInnerHTML={{ __html: data.datoCmsFooter.content1 }}>   
                        </div>
                    </div>
                    <div className="content2">
                      {contactLink}
                    {/* {(() => {
                        //immediately invoked func  
                    // if(window.location.href == "/contact"){
                    //     <ul className="links">   
                    //     <li><AniLink swipe direction="up" duration={1} to="/contact">Lets Chat</AniLink></li>
                    //     </ul>
                    //   }
                    })()} */}
                    </div>


                </div>

                <div className="footer__content"
                     data-scroll 
                     data-scroll-repeat="true"	
                     data-scroll-speed="2"
                >

                    <div className="content1">
                    <ul className="social">

                        <li>
                          <a className="text">facebook</a>
                        </li> 
                        <li>
                          <a className="text">instagram</a>
                        </li> 

                    </ul>
                    </div>

                    <p className="copyright content2">© pushdigital 2020</p>
              </div>
              
          </div>
        </div>
      )}
    />


 

  )
}