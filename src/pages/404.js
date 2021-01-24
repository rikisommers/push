import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <header className="c-hero">
    <div className="o-content">
      <h1>NOT FOUND</h1>  
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </header>
  </Layout>
)

export default NotFoundPage
