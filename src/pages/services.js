import React from "react"
import BodyClassName from "react-body-classname"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <BodyClassName className="service">
    <Layout>
      <SEO title="services" />
      
      <header className="o-banner c-hero">
   
        <div class="o-content">

          <div class="intro">
            <h1>Services</h1>
            <p>Simplicity is key. Only pay for what you need. Your product your rules.</p>
            <p>We aim to develop solutions specific to clients requirements, with minimal set up and minimal overhead.
              If you have a project in mind we can walk you through the options available and make a plan of attack that fits your budget and goals.
            </p>
          </div>

        </div>
      </header>

      <section className="o-banner o-grid2 o-grid2--panels">
        
        <div className="o-tile">
        <div className="o-card">
        <h1>Content</h1>
        </div>
        </div>

        <div className="o-tile">
        <div className="o-card">
        <h1>Content</h1>
        </div>
        </div>
        
      </section>

    </Layout>
  </BodyClassName>
)

export default ServicesPage