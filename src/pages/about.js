import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About Isaac Pierce" />
      <Hero />
      <h1>Hi from the about page</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default About
