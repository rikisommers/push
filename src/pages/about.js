import React from "react"
import BodyClassName from "react-body-classname"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <BodyClassName className="about">
  <Layout>
    <SEO title="Page two" />

    <header className="o-banner o-banner--sm">
      <div className="o-content">
       <h1>Hi from the about page</h1>

       <p>Over 15 years experience in the digital world.</p>


      </div>
    </header>
    <section className="o-content">
      <h2>Our Approach</h2>

      <p>Simplicity is key. Only pay for what you need. Your product your rules.</p>
      <p>We aim to develop solutions specific to clients requirements, with minimal set up and minimal overhead.
        If you have a project in mind we can walk you through the options available and make a plan of attack that fits your budget and goals.
      </p>
    </section>
    <section className="o-content o-grid2">
    <h2>Services</h2>

    <div className="services-list">

        <div>
          <h3>Design</h3>
          <ul className="c-list">
            <li>UX consulting</li>
            <li>UI/UX design</li>
            <li>Mobile &amp; web design</li>
            <li>Design systems</li>
          </ul>
        </div>

        <div>
          <h3>Development</h3>
          <ul className="c-list">
            <li>Website development</li>
            <li>Application development</li>
            <li>E-commerce</li>

          </ul>
        </div>

        <div>
          <h3>Support</h3>
          <ul className="c-list">
            <li>Code maintenence</li>
            <li>Social media</li>
            <li>SEO</li>
          </ul>
        </div>

    </div>

    </section>

  </Layout>
  </BodyClassName>
)

export default AboutPage