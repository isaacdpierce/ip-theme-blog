import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HeroLeft from "../components/hero/heroLeft"
import HeroRight from "../components/hero/heroRight"

const Resume = () => {
  return (
    <Layout>
      <SEO title="Isaac Pierce Resume" />
      <HeroLeft>resume stuff</HeroLeft>
      <HeroRight>more resume stuff</HeroRight>
    </Layout>
  )
}

export default Resume
