import React from "react"
import { Link } from "gatsby"
import BodyClassName from "react-body-classname"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Capture from "../components/capture"


const IndexPage = () => (
  <BodyClassName className="landing">
  <Layout>
    <Hero/>
    
    <section className="o-grid2 o-grid2--panels">
  
        <div className="o-tile">
          <Link to="/services" >
            <div className="c-card shadow">
              <figure className="c-card__img"></figure>
              <h3 className="c-card__header">Design</h3>
              <div className="c-card__content">werwer</div>
            </div>
          </Link>
        </div>

        <div className="o-tile">
          <Link to="/services" >
            <div className="c-card shadow">
              <figure className="c-card__img"></figure>
              <h3 className="c-card__header">Development</h3>
              <div className="c-card__content">werwer</div>
            </div>
          </Link>
        </div>
   
        <div className="o-tile">
          <Link to="/services" >
            <div className="c-card shadow">
              <figure className="c-card__img"></figure>
              <h3 className="c-card__header">Social</h3>
              <div className="c-card__content">werwer</div>
            </div>
          </Link>
        </div>

        <div className="o-tile">
          <Link to="/services" >
            <div className="c-card shadow">
              <figure className="c-card__img"></figure>
              <h3 className="c-card__header">Support</h3>
              <div className="c-card__content">werwer</div>
            </div>
          </Link>
        </div>

    </section>

    
    <section className="o-content">
      <h1>Content</h1>
    </section>

    <Capture/>

  </Layout>
  </BodyClassName>
)

export default IndexPage
