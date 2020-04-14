import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Isaac Pierce contact information" />
      <h1>Hi from the contact page</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Contact
