import React from "react"
import BodyClassName from "react-body-classname"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CaseStudiesPage = () => (
  <BodyClassName className="articles">
  <Layout>
    <SEO title="Page two" />

    <header className="o-banner o-banner--sm">
      <div className="o-content">
       <h1>Hi from the case studies page</h1>
      </div>
    </header>
    <section className="o-content">
      <h2>Content</h2>
    </section>

  </Layout>
  </BodyClassName>
)

export default CaseStudiesPage