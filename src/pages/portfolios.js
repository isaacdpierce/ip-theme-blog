import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HeroLeft from "../components/hero/heroLeft"
import HeroRight from "../components/hero/heroRight"

const Portfolios = () => {
  return (
    <Layout>
      <SEO title="The Portfolios of Isaac Pierce" />
      <HeroLeft>portfolio stuff</HeroLeft>
      <HeroRight>more portfolio stuff</HeroRight>
    </Layout>
  )
}

export default Portfolios
