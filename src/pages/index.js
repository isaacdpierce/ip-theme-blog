import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import SEO from "../components/seo"
import useSiteMetaData from "../hooks/useSiteMetadata"

const IndexPage = () => {
  const { title, siteUrl, description, keywords } = useSiteMetaData()
  return (
    <Layout>
      <SEO title={title} description={description} keywords={keywords} />
      <Hero />
    </Layout>
  )
}

export default IndexPage
