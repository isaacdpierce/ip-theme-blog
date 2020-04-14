import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import SEO from "../components/seo"

const Portfolios = () => {
  return (
    <Layout>
      <SEO title="The Portfolios of Isaac Pierce" />
      <Hero />
      <h1>Hi from the portfolios page</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Portfolios
