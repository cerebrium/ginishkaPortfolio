import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
      <h1>Welcome to my portfolio</h1>
    </div>
  </Layout>
)

export default IndexPage
