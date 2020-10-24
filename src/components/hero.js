import React from "react"
// import { Link } from "gatsby"
// import Image from "../components/image"

import "./hero.scss"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"




const Hero = () => (
  
  <header className="o-banner c-hero"> 

    <div class="services">
      <p>Hi I am a New Zealand based digital designer with 10 years of experience working across a wide range of industries and projects. My aim here is to help you connect and engage with your client base though user focused design and useful technology. Let's talk about your next project!</p>
      <p>We are not IT people or web people, we are just regular people that can help you reach your people</p>
      <p>We can help you with...</p>
    
    
    <div class="g-3">

      <div>
        <ul>
          <li>Static Websites</li>
          <li>CMS Websites</li>
          <li>E-commerce Websites</li>
          <li>SEO</li>
          <li>ADwords Campaigns</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>Banners</li>
          <li>Landing Pages</li>
          <li>Social Campaigns</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>Branding</li>
          <li>Animation</li>
          <li>Other Stuff</li>
        </ul>
      </div>

    </div>
    </div>

    <div className="o-content">
      <h2 id="sub-title">Push through the noise.</h2>
      <p id="lead">Lets build something great.</p>
    </div>

  </header>
  
)

export default Hero
